# LocalRankAI – Detailed Design Document  
**Version 2 – November 2025**

---

## 1) Scope & Objectives

This DDD specifies architecture, data contracts, background jobs, APIs, security, and rollout for **LocalRankAI v2**. It extends the original design with:

- **Predictive Modelling Engine (PME)** – forecasts visibility uplift from fixes/tasks.  
- **Citation Opportunity Score (COS)** – ROI-weighted scoring of missing/weak citations.  
- **Review Campaign Engine (RCE)** – email/SMS review-request automation with tracking.  
- **Outcome Calculator** – estimates calls/visits/conversions from rank/visibility deltas.  
- **White-label dashboards/reports in Phase 2** (moved earlier).  

Market focus: **Australian SMBs & agencies**; integrations with **Google (GBP/GSC/GA4)** and **DataForSEO**.

---

## 2) System Architecture (Logical)

**Frontend:** React + **Shopify Polaris Web Components**  
**API Gateway:** Node.js (Express) – REST + thin GraphQL for UI aggregation  
**Workers/Jobs:** BullMQ on Redis; optional serverless cron  
**Data:**  
- Phase 1: Google Sheets (operational MVP) + Object Storage for evidence  
- Phase 2+: PostgreSQL (multi-tenant; RLS), Redis cache, Object Storage (S3/GCS)

```
[Browser (Polaris UI)]
   ↕  REST/GraphQL (Express)
      ├─ Aggregation Service (Google + DataForSEO)
      ├─ Insights Engine
      ├─ Smart Task Engine
      ├─ Predictive Modelling Engine  ← new
      ├─ Citation Audit Engine
      ├─ Review Campaign Engine      ← new
      ├─ Reporting/Outcome Service   ← upgraded
      ├─ AuthN/AuthZ
      └─ Scheduler/Workers (BullMQ)
         ↔ PostgreSQL / Sheets
         ↔ Redis (cache/queues)
         ↔ Object Storage (SERP/GBP evidence, models)
```

Non-functional objectives: predictable costs (DataForSEO batching), low-latency dashboards (<300ms cached), grid runs <10s for 25×25.

---

## 3) Tenancy, AuthN/Z & Roles

- **Tenant = Workspace** (agency or single business).  
- Entities: Workspace → Location(s) → Project(s) → Keywords, Citations, Reviews, Reports, Tasks.  
- **Roles:** owner, admin, analyst, viewer, client (share link read-only).  
- **AuthN:** Email/password (Cognito/Auth0) + OAuth2 (Google).  
- **AuthZ:** RBAC + row-level security (PostgreSQL RLS Phase 2).  
- **Share Links:** JWT with `scope=read`, `entity`, `exp`.

---

## 4) Data Model

### 4.1 Phase 1 (Sheets – MVP)
- `projects(id, workspace_id, name, domain, gbp_place_id, city, tz, created_at)`  
- `keywords(id, project_id, keyword, engine, device, grid_size, radius_km, tags[], active)`  
- `geogrid_runs(id, project_id, keyword_id, date, grid_size, radius_km, visibility_pct, avg_rank, best_rank, competitors[], snapshot_url)`  
- `insights(id, project_id, type, title, body, severity, evidence_url, created_at)`  
- `smart_tasks(id, project_id, title, why_now, recommended_fix, est_impact, effort, priority, status, due_date, evidence_url)`  
- `citations(id, project_id, directory, url, nap_name, nap_address, nap_phone, status, errors[], duplicate_of)`  
- `reviews(id, project_id, source, rating, text, created_at, responded)`  
- `review_campaigns(id, project_id, channel, template_id, status, sent, delivered, responded, last_run_at)` **(new)**  
- `predictive_models(id, project_id, version, features_json, metrics_json, created_at)` **(new)**  
- `outcomes(id, project_id, period_from, period_to, visibility_delta, est_calls, est_visits, confidence)` **(new)**  
- `reports(id, project_id, type, params, range_from, range_to, status, url)`  
- `integrations(id, workspace_id, provider, scopes, status, connected_at)`

> Evidence (SERP HTML/PNG, GBP diffs) stored in Object Storage; URLs referenced above.

### 4.2 Phase 2+ (PostgreSQL – multi-tenant)
Schemas: `core`, `audit`, `reporting`, `ml`, `billing`.

- **core.workspaces / locations / projects / users / roles / sessions**  
- **core.keywords / keyword_runs / geogrid_runs** (partition by month)  
- **audit.citation_sources / citation_findings / nap_mismatches / duplicates / competitor_citations**  
- **ml.models / ml.model_runs / ml.features / ml.metrics**  
- **reporting.reports / report_items / share_links / outcomes**  
- **engage.review_campaigns / campaign_events (sent, delivered, clicked, reviewed)**

Indexes: `(workspace_id, created_at)`, `(project_id, date)`, GIN for JSON features, trigram on keywords.

---

## 5) External Integrations

### Google Business Profile (GBP)
- Scopes: `business.manage`. Endpoints: locations, reviews, insights.  
- Jobs: `SyncGbpReviewsDaily`, `SyncGbpInsightsMonthly`, `DetectGbpChanges`.

### Google Search Console (GSC)
- Query/performance per page/query/country/device; 16-month window.  
- Used for outcome calculator and anomaly detection.

### Google Analytics 4 (GA4)
- Sessions, conversions, source/medium; used for **rank→lead correlation**.

### DataForSEO
- **Rank Tracker (Google, Maps; device/locale)**, **SERP HTML/Screenshots**, **Keyword Ideas**.  
- Jobs: `RunRankChecks`, `FetchSerpSnapshot`, backoff on 429, **budget guards** per workspace.

### Email/SMS gateway (for RCE)
- Providers: transactional email (e.g., SES, Resend) + SMS (e.g., Twilio).  
- Webhooks for delivered/failed/clicked; consent/unsubscribe support.

---

## 6) API Design

> REST first. Limited GraphQL for UI aggregation of dashboard widgets. All JSON. Idempotency keys on POST where applicable.

### 6.1 Auth/Tenancy
- `POST /auth/login`  
- `POST /auth/google/callback`  
- `GET /workspaces/:id` → summary + quota  
- `GET /projects?workspaceId=…`

### 6.2 Keywords & GeoGrid
- `POST /projects/:id/keywords (bulk)`  
- `GET /projects/:id/keywords?tag=&engine=&device=`  
- `POST /geogrid/run` `{projectId, keywordId, gridSize, radiusKm, center, compareDate?, competitors[]}`  
- `GET /geogrid/:runId` → heat, visibilityPct, avgRank, evidence url

### 6.3 Insights & Smart Tasks
- `GET /projects/:id/insights?type=&severity=&from=&to=`  
- `POST /projects/:id/tasks/generate` → creates weekly tasks from insights  
- `PATCH /tasks/:id` `{status, note}`

### 6.4 Citations
- `POST /citations/audit` `{projectId, directories[]?}`  
- `GET /citations/findings?projectId=&status=&directory=`  
- `GET /citations/mismatches?projectId=`  
- `GET /citations/duplicates?projectId=`  

### 6.5 **Citation Opportunity Score (new)**
- `GET /citations/opportunities?projectId=&limit=&minScore=`  
  - Returns `{directory, effort, est_visibility_gain, competitor_coverage, score}`  
- `POST /citations/opportunities/to-tasks` `{ids[]}` → creates Smart Tasks

### 6.6 Reviews & **Review Campaigns (new)**
- `GET /reviews?projectId=&source=&rating>=`  
- `POST /review-campaigns` `{projectId, channel('email'|'sms'), templateId, audienceQuery}`  
- `POST /review-campaigns/:id/run`  
- `GET /review-campaigns/:id/stats` → sent, delivered, responded, timeline  
- Webhooks: `/webhooks/review-campaigns/events` (delivered, clicked, replied)

### 6.7 Reporting & **Outcome Calculator (upgraded)**
- `POST /reports` `{projectId, type, range, includeOutcomeCalc:boolean}`  
- `GET /reports/:id` → status + download url  
- `POST /share-links` `{entityType, entityId, expireAt}` → URL  
- `GET /outcomes?projectId&from&to` → `visibility_delta, est_calls, est_visits, confidence`

### 6.8 **Predictive Modelling (new)**
- `POST /predict/visibility` `{projectId, changes: [{type:'citation_fix'|'category_add'|'review_rate', params…}]}`  
  - Returns `{visibility_uplift_pct, confidence, drivers[]}`  
- `GET /predict/models/:projectId` → versions, metrics

---

## 7) Background Jobs & Schedules

| Job | Cadence | Notes |
|-----|---------|-------|
| `RunRankChecks` | daily | Batch by workspace budget, distribute off-peak AEST |
| `FetchSerpSnapshot` | on demand | Capture SERP HTML/PNG for evidence |
| `GenerateInsights` | daily | Rank deltas, competitor overtakes, GBP changes |
| `GenerateSmartTasks` | weekly | Based on insights + COS hits |
| `RunCitationAudit` | weekly | Crawl AU directories; dedupe; mismatch detection |
| `ComputeCitationOpportunities` | weekly | Calculate **COS** per directory/opportunity |
| `SyncGbpReviewsDaily` | daily | New reviews pull; sentiment classification |
| `ReviewCampaignSend` | weekly/daily | Send batch review requests; observe limits |
| `ComputeOutcomes` | weekly | Outcome Calculator from rank + GA4/GSC |
| `TrainPredictiveModel` | monthly | PME recalibration; store metrics in `ml.models` |
| `SendScheduledReports` | daily | Generate/dispatch PDF/links |
| `PurgeExpiredShareLinks` | hourly | Cleanup tokens/exports |

---

## 8) Predictive Modelling Engine (PME)

**Objective:** Estimate visibility uplift (%) and downstream calls/visits from proposed actions.

**Features (v1):**
- Gradient-boosted tree or linear model using features: current visibility, avg/best rank, grid variance, citation consistency score, review velocity, GBP categories, competition intensity.  
- **What-if API** (`POST /predict/visibility`) that ingests planned changes and outputs uplift + confidence.  
- **Calibration** against hold-out periods; target **≥85%** R²/MAE threshold per BRD.

**Data pipeline:**
- Feature extraction daily (`ml.features`) → model training monthly (`ml.models`) → model run metadata (`ml.model_runs`) with metrics.

**Safeguards:**
- Confidence floor; show conservative ranges.  
- Never recommend changes without evidence links (SERP/GBP/citation).

---

## 9) Citation Opportunity Score (COS)

**Formula (v1 suggestion):**
```
score = w1 * competitor_coverage_norm
      + w2 * est_visibility_gain_norm
      + w3 * (1 - effort_norm)
      + w4 * authority_metric_norm (if available)
```
Defaults: `w1=0.35, w2=0.35, w3=0.2, w4=0.1`.  
Outputs: `score ∈ [0,1]`, with thresholds (High ≥0.7, Med 0.4–0.7).

**Inputs:** competitor citations diff, directory authority, historical uplift correlations, task effort (manual/auto).  
**Surfaced in UI:** sortable table; **“Add to Smart Tasks”** bulk action.

---

## 10) Review Campaign Engine (RCE)

- **Channels:** Email + SMS with branded templates (white-label).  
- **Audience:** CSV upload, GSheets range, or API endpoint; dedupe + consent flags.  
- **Cadence:** One-shot or drip (N, N+3, N+7).  
- **Tracking:** sent, delivered, clicked (review link), posted review (GBP webhook polling).  
- **Compliance:** opt-out link; stop list persisted per workspace.

**Templates:** subject/body tokens – `{business_name}`, `{review_link}`, `{first_name}`; localisation for AU spelling/time.

---

## 11) Reporting & Outcome Calculator

**Outcome Calculator (v1):**
- Maps `visibility_delta` → estimated incremental **calls/visits** using:  
  - GSC CTR curves per rank bucket  
  - GA4 conversion rates for local/organic  
  - Historical elasticity per industry (priors; learn per account over time)

**Report stack:**
- HTML templates (Handlebars/React SSR) → PDF via Playwright.  
- **White-label**: logos, brand color tokens; host share links with expiring JWT.  
- Evidence appendix: SERP PNGs, citation diffs, review timelines.

---

## 12) Frontend (Polaris) Components

- Shell: `Frame`, `TopBar`, `Navigation`, `Page`  
- KPI: `Card`, custom KPI tiles  
- GeoGrid: `Card` + Canvas/SVG; controls via `Select`, `RangeSlider`, `Popover`, `ButtonGroup`  
- Insights/Tasks: `IndexTable`/`ResourceList`, `Badge`, `Banner`, `Toast`  
- Citations: `IndexTable` with `Filters` and COS column  
- Reports: `FormLayout`, `DatePicker`, `TextField`, `Button`, `Modal` (preview)  
- Settings: `Tabs`, `TextField`, `Select`, `Toast`, `Modal`

**Accessibility:** Polaris a11y, keyboard nav, ARIA for charts/tables; color contrast ≥ 4.5:1.

---

## 13) Security & Compliance

- **Secrets:** KMS/SM managed (GOOGLE_CLIENT_ID, DATAFORSEO creds, OPENAI, JWT_SECRET).  
- **Encryption:** TLS in transit; at-rest via managed storage; token encryption.  
- **PII:** Only SMB owner contact fields; no end-customer PII unless uploaded for RCE (then encrypted, hashed phone/email for suppression).  
- **Audit:** Access logs for share links, report downloads, campaign sends.  
- **Backups:** Daily Postgres snapshots; 30-day retention; object versioning.

---

## 14) Observability

- **Metrics:** API latency, error rate, queue depth, job duration, provider call counts, model accuracy.  
- **Tracing:** OpenTelemetry spans around outbound API calls.  
- **Logging:** JSON logs with correlation IDs, PII redaction.  
- **Alerts:** quota breach, job failure, model drift, grid SLA breach.

---

## 15) Performance & Cost Controls

- Redis caches for latest dashboard aggregates.  
- Batch rank pulls; compress SERP artifacts; delta-only updates.  
- Rate limits per workspace + global.  
- **Budget Guards:** per-workspace ceiling for DataForSEO; soft-fail to stale data with banner.  
- Lazy render heavy charts; simplify large grids (heat raster).

---

## 16) Testing Strategy

- **Unit:** adapters (GBP/GSC/GA4/DataForSEO), mappers, scorers (COS), PME utilities.  
- **Contract:** Pact tests for provider stubs; webhook verification.  
- **Integration:** pipeline tests (rank→insight→task; audit→COS→task).  
- **E2E:** Playwright flows (connect integrations → run grid → generate report).  
- **Load:** 49×49 grid render; 500 locations; 100k keyword runs/day.  
- **Security:** authz on every route; RLS tests; share-link expiry tests.

---

## 17) Example Data Contracts

**Geogrid Run**
```json
{
  "id": "gg_20251105_001",
  "projectId": "p_001",
  "keywordId": "k_123",
  "date": "2025-11-05",
  "gridSize": 25,
  "radiusKm": 10,
  "avgRank": 12.4,
  "bestRank": 5,
  "visibilityPct": 0.68,
  "competitors": ["FastFlow", "PipePro"],
  "serpSnapshotUrl": "s3://evidence/serp/2025-11-05/k_123.html"
}
```

**Citation Opportunity (COS)**
```json
{
  "directory": "Yellow Pages AU",
  "effort": "Low",
  "est_visibility_gain": 0.07,
  "competitor_coverage": 0.8,
  "score": 0.76,
  "recommendation": "Claim and complete listing; add hours & categories"
}
```

**Predictive “What-If” Response**
```json
{
  "visibility_uplift_pct": 0.08,
  "confidence": 0.82,
  "drivers": ["Fix NAP mismatch on TrueLocal", "Add GBP secondary category"],
  "notes": "Based on last 90d correlations for similar locations"
}
```

**Outcome Calculator Summary**
```json
{
  "period_from": "2025-10-01",
  "period_to": "2025-10-31",
  "visibility_delta": 0.06,
  "est_calls": 23,
  "est_visits": 110,
  "confidence": 0.78
}
```

---

## 18) Rollout & Migration

**Phase 1 (MVP)**  
- Sheets backend; single workspace; daily ranks; basic audit; Insights + Smart Tasks (manual review).  
- Minimal RCE (email only, single send).  
- Reports without white-label.

**Phase 2 (Automation + White-Label)**  
- Migrate to Postgres + RLS; introduce Redis.  
- White-label dashboards & reports; COS scoring; PME v1; Outcome Calculator; RCE (email+SMS, drip).  
- Budget guards for DataForSEO; evidence snapshots by default.

**Phase 3 (Multi-location & Predictive Intelligence)**  
- Workspaces/roles at scale; agency analytics; public API; PME v2 (lead forecasts), cross-location learning.

---

## 19) Open Decisions

- **Directory authority source** (Moz, Majestic, internal heuristic) for COS `authority_metric`.  
- **Model family** for PME v1 (GBDT vs linear with monotonic constraints).  
- **Report templating**: Handlebars vs React SSR (leaning React SSR + Playwright).  
- **Eventing**: consider lightweight event bus (e.g., NATS) for job fan-out later.

---

## 20) Summary

LocalRankAI v2 couples **modern UX (Polaris)** with **automation, predictive analytics, and AU-specific directory intelligence**.  
The new PME, COS, RCE, and Outcome Calculator elevate the product from a reporting tool to an **action-driving optimisation platform** that can outperform BrightLocal/Localo for Australian SMBs and agencies.

**Prepared by:** Digital Marketing Genius  
**Date:** November 2025  
**Version:** 2