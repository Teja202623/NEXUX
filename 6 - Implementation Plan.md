# 🧩 LocalRankAI – Modular Implementation Plan (Phased & Incremental)

A modular, low-risk implementation roadmap for building **LocalRankAI** in small, testable phases.  
Each phase delivers a *vertical slice* — UI → API → Storage → Deployment — ensuring continuous value and validation.

---

# ⚙️ Tech Stack Overview (Prototype-Aligned v3)

LocalRankAI’s prototype stack focuses on **speed, testability, and modular validation** — optimised for quick iteration rather than full production scale.  
**Supabase** replaces Google Sheets from Phase 1 for real-time testing, while lightweight automation and early observability ensure every feature can be built, tested, and rolled back safely.

---

## 🧩 Core Application Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| **Frontend** | **React + Vite + Shopify Polaris + Tailwind** | Fast, responsive UI aligned with Shopify design principles. |
| **Backend** | **Node.js + Express** | Lightweight REST API for integrations, AI workflows, and automation. |
| **Data Layer** | **Supabase (PostgreSQL) + Prisma ORM** | Real-time relational DB with type-safe models and migrations. |
| **Auth & Access Control** | **Supabase Auth (JWT)** + **Row-Level Security (RLS)** | Tenant-safe prototype authentication with policy-based isolation. |
| **APIs** | **Google Business Profile**, **Google Search Console**, **DataForSEO (Sandbox)** | Visibility, review, and keyword data sources for testing. |
| **Infrastructure** | **Vercel (Frontend)** + **Railway / Render (Backend)** | CI/CD-ready cloud platforms for fast deploys and rollbacks. |
| **Caching & Queues** | **Redis + BullMQ** | Cache expensive API calls and manage async background jobs. |
| **Logging Utility** | **`logger.ts` (Winston → Logtail)** | Shared structured JSON logging utility for all services. |
| **Seed & Demo Data** | **`npm run seed:demo`** | Populates sample SMBs, keywords, and reviews for demos. |

---

## 🧠 Automated Testing & QA Stack

| Layer | Tools | Purpose |
|-------|-------|----------|
| **Unit Testing (Frontend)** | **Jest + React Testing Library** | Validate UI logic and components. |
| **Unit Testing (Backend)** | **Jest + Supertest** | Verify Express routes and controllers. |
| **Integration Testing** | **Nock / WireMock + Pact** | Contract-test external APIs (DataForSEO, Google). |
| **Accessibility Testing** | **jest-axe** | Run WCAG 2.1 snapshot tests from Phase 1 onward. |
| **AI Guardrails (Phase 2)** | **Zod Schemas + Prompt Fixture Tests** | Validate deterministic `temperature`, `max_tokens`, `model_seed`, `version_hash`. |
| **E2E Testing** | **Playwright** | Verify complete user flows (login → dashboard → report). |
| **Visual Regression** | **Percy** | Detect and block unintended layout shifts. |
| **Database Testing** | **pgTAP + TestContainers** | Validate schema migrations and isolated Supabase instances in CI. |
| **Security & Performance** | **Snyk**, **OWASP ZAP**, **k6 / Artillery** | Automated scans and load benchmarking. |
| **OpenAPI Autogen** | **express-oas-generator** | Auto-generate `/api/v1/*` Swagger docs per build. |
| **CI/CD** | **GitHub Actions** | Full automation: lint → test → build → coverage → deploy. |
| **Monitoring & Observability** | **Logtail + UptimeRobot (Free Tier)** | Basic logging + synthetic health checks. |

---

## 🧱 Development Utilities

| Category | Tools | Purpose |
|-----------|-------|----------|
| **Code Quality** | **ESLint**, **Prettier**, **SonarQube (Local)** | Consistent linting and static analysis. |
| **Schema Validation** | **Prisma + `prisma migrate diff` CI Gate** | Detect schema drift before deployment. |
| **Migration Audit** | **`supabase-migrations.json`** | Record migration hashes for reproducibility. |
| **Environment Management** | **dotenv + Cross-Env** | Unified variable handling for dev and CI. |
| **Secrets Management** | **GitHub Secrets / Doppler (optional)** | Secure key storage + rotation. |
| **Version Control** | **Git + GitHub** | Branch workflow (`feature/*`, `staging`, `main`). |
| **Documentation** | **Markdown + ADRs in `/docs/decisions` + Docusaurus** | Capture architectural decisions and rationale. |

---

## 🧩 Testing Frequency Matrix

| Layer | Type | Frequency | CI/CD Stage |
|-------|------|------------|-------------|
| **Unit / Component** | Jest / React Testing Library | Every commit | ✅ PR check |
| **Integration / Contract** | Jest + Nock / Pact | Every build | ✅ Build stage |
| **Accessibility (a11y)** | jest-axe | Nightly | ✅ Scheduled job |
| **E2E / Flow** | Playwright | Nightly | ✅ Pre-staging |
| **Visual Regression** | Percy | On PR | ✅ UI gate |
| **Schema Drift** | Prisma migrate diff | Every deploy | ✅ Deploy gate |
| **Security / Dependency** | Snyk / OWASP ZAP | Weekly | ✅ Security job |
| **Performance / Load** | k6 / Artillery | On release candidate | ✅ Staging validation |
| **Uptime Monitoring** | UptimeRobot / Logtail | Continuous | ✅ Prod stage |

---

## 🚀 CI/CD Pipeline Example (GitHub Actions)

```yaml
name: LocalRankAI Prototype CI Pipeline

on: [push, pull_request]

jobs:
  build-test-deploy:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        ports: ['5432:5432']
        env:
          POSTGRES_USER: test
          POSTGRES_PASSWORD: test
      redis:
        image: redis:latest
        ports: ['6379:6379']

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci

       --- Quality Gates ---
      - run: npm run lint
      - run: npm run typecheck

       --- Tests ---
      - run: npm run test:unit
      - run: npm run test:integration
      - run: npm run test:a11y
      - run: npm run test:e2e

       --- Schema Drift Guard ---
      - run: npx prisma migrate diff --exit-code || exit 1

       --- Build & Coverage ---
      - run: npm run build
      - name: Upload coverage
        uses: codecov/codecov-action@v4

       --- Optional Deploy (Staging) ---
      - name: Deploy to Staging
        if: github.ref == 'refs/heads/staging'
        run: npm run deploy:staging

---

# Phase 1 – Core Data Pipeline (v2, Gap-Fixed)

**Goal:**  
Integrate live keyword and ranking data from **DataForSEO** into the backend and dynamically display it in the **Dashboard** and **Keywords** tabs.  
This phase delivers the first complete backend → data → UI pipeline, tested end-to-end with full observability, Supabase persistence, and accessibility validation.

---

## 🧩 Scope
- Build `/api/rankings` backend route using **DataForSEO API**.  
- Normalize, cache, and store ranking data in **Supabase (PostgreSQL)** via Prisma.  
- Display live metrics in Dashboard KPIs and Keywords table.  
- Implement retry, logging, and error-handling middleware.  
- Add OpenAPI autogen, a11y snapshot tests, and structured logs.  
- Run unit → integration → E2E tests automatically in CI.

---

## 🧱 Tasks

| # | Task | Description | Output |
|---|------|--------------|--------|
| 1 | **DataForSEO API Setup** | Store API credentials in `.env` → validate with Zod schema. Create `/api/rankings` Express endpoint using Axios + retry middleware. | Secure API integration |
| 2 | **Data Normalization** | Transform payload → schema (`keyword`, `rank`, `url`, `search_location`, `date`, `device`). | Clean JSON dataset |
| 3 | **Persistence (Supabase + Prisma)** | Insert records via Prisma ORM; include `raw_api_json` column for auditing. | Transactional storage |
| 4 | **Caching & Scheduler** | Add `node-cache` + 24 h TTL; daily refresh via Railway scheduler or BullMQ cron job. | Efficient refresh |
| 5 | **Error Handling & Logging** | Wrap API calls with retry + circuit breaker. Use `logger.ts` (Winston → Logtail) for structured errors. | Fault-tolerant pipeline |
| 6 | **Frontend Integration** | Use React Query hooks to fetch `/api/rankings`. Render Dashboard KPIs and Keywords table with live data. | Dynamic UI |
| 7 | **Loading & Empty States** | Add Polaris Skeletons + empty state components for UX consistency. | Polished experience |
| 8 | **Accessibility Baseline** | Run `jest-axe` on Dashboard snapshot to catch WCAG issues early. | a11y guard |
| 9 | **OpenAPI Autogen** | Integrate `express-oas-generator` → publish Swagger docs for `/api/v1/rankings`. | Auto API docs |
| 10 | **Backend Unit Tests** | `Jest + Supertest` → verify response schema + status codes. | Reliable API layer |
| 11 | **Mocked Integration Tests** | `Nock` → simulate DataForSEO responses + timeout scenarios. | Deterministic tests |
| 12 | **DB Validation Tests** | `TestContainers + pgTAP` → validate Supabase inserts + rollbacks. | Verified persistence |
| 13 | **Frontend Tests** | `React Testing Library` → assert KPI render and table values with mock API. | UI verified |
| 14 | **E2E Flow Test** | `Playwright` → fetch → store → render → verify Supabase row. | End-to-end validated |
| 15 | **CI/CD Integration** | GitHub Actions → lint → unit → integration → E2E → Codecov. Include `prisma migrate diff` gate for schema drift. | Automated quality gate |

---

## 🧪 Testing Deliverables

| Layer | Tool | Validation |
|--------|------|-------------|
| **Unit (Backend)** | Jest + Supertest | Valid JSON schema & error handling |
| **Integration** | Nock + Jest | Retry + timeout logic verified |
| **Database** | pgTAP + TestContainers | Supabase CRUD + RLS policies tested |
| **Frontend Unit** | React Testing Library | KPI + table values render correctly |
| **Accessibility** | jest-axe | Dashboard meets WCAG 2.1 AA |
| **E2E** | Playwright | Fetch → store → render flow passes |
| **Performance** | k6 / Artillery | API latency < 1 s @ 100 req/s |
| **Monitoring** | UptimeRobot / Logtail | Uptime & error alerts visible |

---

## ✅ Deliverables / Exit Criteria
- `/api/rankings` operational with sandboxed DataForSEO data.  
- Normalized & cached results persisted in Supabase (Postgres).  
- Dashboard + Keywords tabs display live metrics with loading states.  
- OpenAPI docs auto-generated & published.  
- Accessibility baseline passing ( jest-axe ).  
- All tests pass in CI with Codecov ≥ 80 % coverage.  
- Schema diff check (`prisma migrate diff`) passes before deploy.

---

## 🧭 Test Validation

**Manual Checks**  
- Trigger `/api/rankings` → confirm records appear in Supabase.  
- View Dashboard → verify data matches latest API snapshot.  
- Inspect Logtail → confirm retry + error logs structured properly.  

**Automated Checks**  
- `npm run test` → unit + integration suites.  
- `npm run test:e2e` → Playwright data-flow validation.  
- GitHub Actions → all jobs green + Codecov report uploaded.  
- UptimeRobot → `/api/health` 200 OK.

---

✅ **Outcome:**  
Phase 1 delivers a secure, observable **Core Data Pipeline** connecting DataForSEO → Supabase → React UI, complete with caching, logging, a11y checks, and automated tests.  
This forms a trusted, reproducible foundation for future AI insights and automation modules.

# 📈 Phase 2 – Insights Engine (v2.1, Gap-Fixed)

**Goal**  
Turn ranking deltas into weekly, actionable **Insights** and **Smart Tasks** using OpenAI—guarded by strict schemas, deterministic settings, caching, and full CI coverage. Persist all outputs in Supabase with auditability.

---

## 🧩 Scope
- `/api/insights` computes deltas from Supabase and calls OpenAI with guardrails
- `/api/tasks/generate` converts insights → 3–5 scored actions
- Persist insights/tasks with versioning (`prompt_version`, `model_seed`, `version_hash`)
- Weekly regeneration via scheduler; cache latest results
- Mock LLM in CI for deterministic tests; a11y checks continue

---

## 🧱 Tasks

| # | Task | Description | Output |
|---|------|--------------|--------|
| 1 | **Insights API** | Build `GET /api/v1/insights` (Express). Load last N days of ranks from Supabase → compute deltas (moving averages, WoW %). Call OpenAI (stream or standard) with **temperature=0**, **max_tokens cap**, and **seeded** params. | `[{id, title, body, impact, evidenceRefs, createdAt, prompt_version, model_seed, version_hash}]` |
| 2 | **Prompt Catalog** | Store prompts in `/backend/prompts/` with metadata: `{id, purpose, temperature, max_tokens, top_p, prompt_version}`. Include `trend`, `anomaly`, `opportunity` variants. | Versioned prompt set |
| 3 | **Smart Task Engine** | `POST /api/v1/tasks/generate` → transform each insight to 3–5 tasks scored `{impact, effort, priority}`, include `action_url` when possible. | `SmartTask[]` |
| 4 | **AI Output Validation** | Validate LLM JSON with **Zod**. Reject/repair malformed outputs, log violations. Include `model_seed` and `version_hash` (hash of prompt + params) in every record. | Guarded, auditable outputs |
| 5 | **Scheduler & Cache** | Weekly cron (BullMQ or Railway Scheduler). Cache latest results in Redis (`insights:latest:{tenant}` TTL 7d). Backoff retries (exponential; jitter). | Reliable refresh |
| 6 | **Persistence** | Supabase tables `insights`, `tasks`. Retain `raw_model_json` for audit; store `source_window` (date range used) + `data_sample_hash`. | Full history & audit trail |
| 7 | **Frontend Bindings** | React Query → `insights` & `tasks`. Polaris Cards, Badges, Progress, Banner, Toast. Filters: date range, priority, status. | Interactive UI |
| 8 | **Cost & Privacy Guards** | Token caps per request; redact PII from prompts; per-tenant daily token budget; structured refusal handling. | Safe & predictable costs |
| 9 | **Mocks for CI** | **MSW/Nock** fixtures for OpenAI; no live calls in CI. Deterministic outputs keyed by `version_hash`. | Stable tests |
| 10 | **Unit & Integration Tests** | Jest + Supertest + Nock: schema, retries, cache, prompt params, error pathways. Contract tests for response shapes. | Passing API tests |
| 11 | **Frontend Tests** | React Testing Library: list renders, filters, empty/loading/skeleton states, a11y snapshot (jest-axe). | UI verified |
| 12 | **E2E** | Playwright: login → load insights → generate tasks → mark complete → persistence verified. | End-to-end flow |
| 13 | **Observability** | `logger.ts` logs fields: `tenantId`, `prompt_version`, `model_seed`, `version_hash`, `tokens_in/out`, `latency_ms`. Alerts on error rate, latency, budget. | Actionable telemetry |

---

## 🗃️ Supabase Schema (MVP)

```sql
-- insights
create table if not exists insights (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  title text not null,
  body text not null,
  impact integer check (impact between 1 and 5),
  evidence_refs jsonb default '[]',
  source_window daterange not null,
  prompt_version text not null,
  model_seed integer not null,
  version_hash text not null,
  raw_model_json jsonb,
  created_at timestamptz default now()
);

-- tasks
create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  insight_id uuid references insights(id) on delete cascade,
  title text not null,
  description text,
  impact integer check (impact between 1 and 5),
  effort integer check (effort between 1 and 5),
  priority integer generated always as ((impact * 2 - effort)) stored,
  status text default 'open' check (status in ('open','in_progress','done')),
  action_url text,
  created_at timestamptz default now()
);

-- RLS (example)
alter table insights enable row level security;
create policy tenant_isolation_insights
  on insights using (tenant_id = auth.uid());

alter table tasks enable row level security;
create policy tenant_isolation_tasks
  on tasks using (tenant_id = auth.uid());

# 🧭 Phase 3 – Citations & Reviews (v2.2, Gap-Fixed, AU-Focused)

**Goal**  
Deliver robust **Citation Audit** and **Review Campaign** capabilities for Australian SMBs, with safe-by-default operations (sandboxed messaging, test doubles for directories), cached enrichment, and end-to-end QA. Persist all data in Supabase with auditable history.

---

## 🧩 Scope
- `/api/v1/citations/audit` → AU directories (TrueLocal, YellowPages AU, Hotfrog, WOMO, StartLocal, Yelp AU, LocalSearch, AussieWeb)
- Compute **NAP consistency** + **ROI-weighted Opportunity Score** (by suburb/category/DA)
- `/api/v1/reviews/fetch` → Google Business Profile (GBP)
- `/api/v1/reviews/campaign` → **Postmark (Email)** + **Twilio (SMS)** in **sandbox mode**
- Add Redis caching, rate limits, schema validation, and complete QA (unit → e2e)
- Update OpenAPI spec (autogen already enabled in Phase 1)

---

## 🧱 Tasks

| # | Task | Description | Output |
|---|------|--------------|--------|
| 1 | **Citation Audit API** | Implement `GET /api/v1/citations/audit?tenantId=…`. For each AU directory, call public API or **lightweight scraper** via rotator (test doubles first). Normalize to `{source, url, name, address, phone, status}`. | Normalised dataset |
| 2 | **NAP Validation Engine** | Compare directory values vs Supabase `business_profiles` using fuzzy match (name), strict match (phone), and geocode distance (address). Produce `consistency_pct` with reasons. | Accuracy metric |
| 3 | **Opportunity Score** | Score per (suburb, directory): `score = w1*DA + w2*traffic + w3*category_fit + w4*gap(NAP)`; expose weights in config. Persist to `citations_audit`. | ROI-weighted score |
| 4 | **Data Enrichment Cache** | Cache each directory response per tenant in Redis (TTL 48h). Add checksum of request payload; bypass cache on checksum change. | Faster re-audits |
| 5 | **GBP Review Fetch** | `GET /api/v1/reviews/fetch` using OAuth’d GBP. Return `{rating_avg, review_count, reviews[]}` with pagination cursors. | Review dataset |
| 6 | **Review Campaign Engine** | `POST /api/v1/reviews/campaign` to queue invites (Twilio/Postmark). **Default sandbox=true**; whitelist recipients; send follow-ups (T+3d, T+7d). | Campaign workflow |
| 7 | **Persistence Layer** | Supabase tables `citations`, `citations_audit`, `reviews`, `campaigns`, `campaign_logs`. Keep `raw_json` columns for audits. | Unified data model |
| 8 | **Frontend Integration** | “Citations” tab: DataTable, filters (suburb, source, status), badges. “Reviews” tab: list, rating trend sparkline, **Send campaign** action. | Interactive UI |
| 9 | **Mock & Test Doubles** | **WireMock/Nock/MSW** stubs for all AU directories + Twilio/Postmark/GBP. Default to stubs in CI and dev unless `LIVE_MODE=true`. | Deterministic tests |
| 10 | **Safety Rails** | Express-rate-limit per IP/tenant; validator.js for inputs; retry with exponential backoff + jitter; circuit breaker on directory failures; structured error map. | Hardened endpoints |
| 11 | **Compliance Hooks (AU)** | Add consent flags + unsubscribe link for email/SMS; log consent source/time (Spam Act 2003 / ACMA). Mask PII in logs; store only hashes for phone/email in campaign logs. | Prototype-level compliance |
| 12 | **Observability** | `logger.ts` fields: `tenantId`, `endpoint`, `dir_source`, `cache_hit`, `latency_ms`, `retry_count`, `sandbox`. UptimeRobot pings: audit, reviews. | Actionable telemetry |
| 13 | **Docs & ADRs** | Add `/docs/decisions/003-citations-architecture.md` and `/004-review-campaign-sandbox.md` describing sandbox defaults, stubs, and AU compliance assumptions. | Traceable decisions |

---

## 🔒 Operational Safety (Prototype)
- **Sandbox by default:** `SMS_SANDBOX=true`, `EMAIL_SANDBOX=true`; allow only whitelisted recipients.
- **Directory stubs first:** Use test double accounts or recorded fixtures; enable LIVE only per-directory toggle.
- **Rate limits:** 60 req/min per tenant; burst 10.
- **Privacy:** Redact phone/email in logs; persist salted hashes for dedupe.
- **OpenAPI:** All endpoints published under `/api/v1/*` (from Phase 1 autogen).

---

## 🗃️ Supabase (minimal schema)

```sql
create table if not exists citations (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  source text not null, -- 'YellowPagesAU', 'TrueLocal', ...
  listing_url text,
  name text,
  address text,
  phone text,
  status text check (status in ('present','missing','mismatch')) default 'present',
  raw_json jsonb,
  created_at timestamptz default now()
);

create table if not exists citations_audit (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  source text not null,
  suburb text,
  consistency_pct numeric check (consistency_pct between 0 and 100),
  opportunity_score numeric,
  weights jsonb, -- {DA, traffic, category_fit, gap}
  created_at timestamptz default now()
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  source text not null, -- 'GBP'
  rating_avg numeric,
  review_count integer,
  reviews jsonb,         -- truncated/redacted content
  fetched_at timestamptz default now()
);

create table if not exists campaigns (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  channel text check (channel in ('sms','email')) not null,
  sandbox boolean default true,
  template_id text,
  status text check (status in ('draft','queued','sent','failed')) default 'draft',
  created_at timestamptz default now()
);

create table if not exists campaign_logs (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid references campaigns(id) on delete cascade,
  recipient_hash text not null,  -- sha256 of phone/email
  event text check (event in ('queued','sent','delivered','failed','unsubscribed')),
  provider_id text,
  meta jsonb,
  created_at timestamptz default now()
);

-- RLS examples
alter table citations enable row level security;
create policy p_citations on citations using (tenant_id = auth.uid());
alter table citations_audit enable row level security;
create policy p_citations_audit on citations_audit using (tenant_id = auth.uid());

---

# 🔮 Phase 4 – Predictive Modelling Engine (v2.2, Gap-Fixed)

**Goal**  
Develop the **Predictive Visibility Modelling Engine** to forecast the impact of SEO actions on keyword rankings and overall visibility.  
Modular, testable ML pipeline with automated training, accuracy tracking, “What-If” UI, Supabase persistence, and **synthetic mocks** for fast/cheap CI.

---

## 🧩 Scope
- Train regression model using rank + citation history from **Supabase**
- `/api/v1/model/data` for clean training datasets; `/api/v1/predict` for inference
- “What-If” panel on Dashboard (forecast & confidence)
- Weekly retraining with accuracy gating + drift detection
- Heavy compute **mocked in CI** using synthetic fixtures

---

## 🧱 Tasks

| # | Task | Description | Output |
|---|------|--------------|--------|
| 1 | **Data Preparation Service** | `GET /api/v1/model/data` aggregates ranks, citations, and completed tasks from Supabase. Normalize, impute missing values, compute deltas (WoW, MoM) and visibility index. | Clean structured dataset (JSON/CSV) |
| 2 | **Model Training Engine** | Node microservice using **TensorFlow.js** _or_ spawn **Python (scikit-learn)** via `child_process`. Train regression predicting visibility uplift from (rank deltas, citations, tasks). | Trained artifact (JSON/PKL) |
| 3 | **Prediction Endpoint** | `POST /api/v1/predict` → returns **% visibility uplift** with `ci_low/ci_high`. Accepts scenario payload (e.g., +5 citations, +X tasks done). | Predictive API |
| 4 | **Model Schema Validation** | Validate artifact metadata with **Zod**: `{name, version, created_at, r2, features, hyperparams, seed}`. Reject malformed/drifted models. | Integrity-checked models |
| 5 | **What-If Analysis Panel** | Dashboard section using **Polaris Card**, **RangeSlider**, **LineChart**. Live recompute on slider change; show CI band and assumptions. | Interactive forecasting UI |
| 6 | **Versioning & Registry** | Supabase tables `models` & `model_metrics` store artifacts (URL), `r2`, feature list, hyperparams, seed, data hash. | Central model registry |
| 7 | **Accuracy Tracker** | Job compares predicted vs actual outcomes (T+7/T+14). Writes `r2`, MAE, p95 error; flags drift. | Accuracy metrics & drift flags |
| 8 | **Retraining Scheduler** | Weekly cron (Railway/Node-cron). Train with latest data; **promote only if R² improves** by threshold. | Continuous improvement |
| 9 | **Mock Model Tests** | Synthetic datasets + deterministic predictions for CI; bypass TF/py in CI to keep runs fast. | Stable, cheap CI |
| 10 | **Backend Unit Tests** | Jest + Supertest for `/model/data` + `/predict`. Validate bounds, schema, error mapping. | Verified API behavior |
| 11 | **Integration Tests** | Orchestrate ingest → train → predict → accuracy update with mocked TF/py + Supabase TestContainers. | Pipeline validation |
| 12 | **Frontend Tests** | React Testing Library for What-If Panel (sliders, chart, state). Include **jest-axe** a11y checks. | UI correctness & a11y |
| 13 | **Perf & Load** | k6/Artillery to ensure **<1s inference** @ 100 conc; cap training wall-time; queue long jobs. | Proven performance |
| 14 | **Monitoring & Alerts** | Logtail fields: `model_version`, `seed`, `r2`, `latency_ms`, `ci_width`. UptimeRobot check `/predict`. Alert on r2 drop or latency >2s. | Observability baseline |

---

## 🔒 Guardrails & Determinism

- **Deterministic seeds:** `MODEL_SEED` env; fix random_state in TF/sklearn
- **Version hash:** `version_hash = sha256(features + hyperparams + seed + data_hash)`
- **OpenAPI**: endpoints autogenned (Phase 1) under `/api/v1/*`
- **Resource caps:** timeouts for training; memory limits; queue large jobs
- **Privacy:** only derived metrics to model; redact PII before feature build

---

## 🗃️ Supabase Tables (MVP)

```sql
create table if not exists models (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  version text not null,
  artifact_url text not null,
  r2 numeric not null,
  features jsonb not null,
  hyperparams jsonb not null,
  seed integer not null,
  data_hash text not null,
  version_hash text not null,
  created_at timestamptz default now()
);

create table if not exists model_metrics (
  id uuid primary key default gen_random_uuid(),
  model_id uuid references models(id) on delete cascade,
  window text not null,            -- 'T+7','T+14'
  r2 numeric,
  mae numeric,
  p95_error numeric,
  created_at timestamptz default now()
);

-- RLS examples
alter table models enable row level security;
create policy p_models on models using (tenant_id = auth.uid());
alter table model_metrics enable row level security;
create policy p_model_metrics on model_metrics using (
  model_id in (select id from models where tenant_id = auth.uid())
);

---


# 📊 Phase 5 – Reports & White-Labeling (v2.2)

**Goal**  
Automate performance-insight report generation and enable agency-grade **white-label dashboards**, with deterministic rendering, sandboxed delivery, and CI-enforced visual regression.

---

## 🧩 Scope
- Generate live **HTML → PDF** reports (KPIs, charts, trends) from Supabase
- Brand theming (logo, palette, typography, footer)
- **Postmark (sandbox)** weekly scheduling + delivery
- Redis snapshot cache for point-in-time consistency
- CI: unit + integration + E2E + **visual regression** + performance checks
- OpenAPI autogen (from Phase 1) for `/api/v1/reports/*`
- ADRs documenting branding, caching, and sandbox decisions

---

## 🧱 Tasks

| # | Task | Description | Output |
|---|------|-------------|--------|
| 1 | **Reporting Service** | `POST /api/v1/reports/generate` renders HTML (Polaris-styled Tailwind) → PDF via **Playwright/Puppeteer**. Accepts `tenantId`, `range`, `sections[]`. | PDF blob + metadata |
| 2 | **Templates** | Modular **EJS/Handlebars** partials: Overview, Keywords, Insights, Citations, Reviews, Tasks. Shared chart partials (Chart.js) and KPI cards. | Reusable template set |
| 3 | **Data Layer** | Resolver aggregates KPIs from Supabase (`rankings`, `insights`, `citations`, `reviews`, `tasks`). **Redis snapshot** ensures consistent dataset per run. | Stable data snapshot |
| 4 | **White-Label Engine** | `themes` table (Supabase): `logo_url`, `primary_color`, `font_family`, `footer_text`. Server injects CSS variables for theme. | Per-agency branding |
| 5 | **Scheduler** | `POST /api/v1/reports/schedule` to create weekly jobs. **Postmark sandbox** with whitelisted recipients; signed download URL. | Automated delivery |
| 6 | **Front-End UI** | Reports tab: preview iframe, theme editor, schedule controls. Polaris **Card, DataTable, Form, Toast**. | Report management UX |
| 7 | **Visual Regression** | **Percy/Chromatic** snap of HTML report (pre-PDF) per theme + range. Block merge on diff > 2%. | CI visual gate |
| 8 | **Unit Tests (API)** | Jest + Supertest: validate payload schema (Zod), section toggles, theme injection, PDF presence. | API test coverage |
| 9 | **Integration Tests** | Jest + Nock: Supabase + Postmark mocked → data→template→PDF→email chain validated. | End-to-end pipeline |
| 10 | **E2E Tests** | Playwright: user edits theme → previews → downloads → receives email (sandbox). | Realistic flow |
| 11 | **Performance** | k6/Artillery: p95 generation < **2s**, PDF < **1MB** @ 100 parallel jobs. | Perf SLO verified |
| 12 | **Observability** | `logger.ts` (Winston→Logtail): `tenantId`, `range`, `sections`, `pdf_bytes`, `render_ms`, `sandbox`. UptimeRobot pings `/reports/generate`. | Actionable telemetry |
| 13 | **Docs (ADR)** | `/docs/decisions/008-reporting-theming.md`, `/009-reporting-snapshots.md`, `/010-reporting-sandbox.md`. | Traceable decisions |
| 14 | **Seed & Demos** | `npm run seed:demo` creates demo tenant, theme, and example KPIs for previews; CI uses seeded fixtures. | Deterministic previews |

---

## 🗃️ Supabase (minimal schema)

```sql
create table if not exists themes (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  logo_url text,
  primary_color text default '#1B4DFF',
  font_family text default 'Inter, system-ui, sans-serif',
  footer_text text,
  updated_at timestamptz default now()
);

create table if not exists report_jobs (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null,
  range text not null,         -- 'last_7d' | 'last_30d' | custom
  sections jsonb not null,     -- ['overview','keywords',...]
  theme_id uuid references themes(id),
  status text check (status in ('queued','rendered','emailed','failed')) default 'queued',
  pdf_url text,
  sandbox boolean default true,
  meta jsonb,
  created_at timestamptz default now()
);

-- RLS examples
alter table themes enable row level security;
create policy p_themes on themes using (tenant_id = auth.uid());
alter table report_jobs enable row level security;
create policy p_report_jobs on report_jobs using (tenant_id = auth.uid());

# 🧱 Phase 6 – Infrastructure & Scale (v2.2, Gap-Fixed)

**Goal**  
Transform LocalRankAI from a prototype into a **scalable, observable, production-grade system**.  
This phase hardens the Supabase (PostgreSQL) core, introduces job queues, enforces schema governance, and adds full observability + CI/CD quality gates.

---

## 🧩 Scope
- Optimise Supabase/PostgreSQL (schema, indexes, RLS)
- Standardise APIs under `/api/v1/*` + auto-generated OpenAPI docs
- Add **BullMQ (Redis)** for scheduled & async jobs
- Implement structured logging (Logtail), metrics, synthetics
- Enforce CI/CD for migrations, drift checks, load & security gates
- Document all key infra decisions → `/docs/decisions` (ADR style)

---

## 🧱 Tasks

| # | Task | Description | Output |
|---|------|--------------|--------|
| 1 | **DB Hardening** | Optimise schemas (`rankings`, `insights`, `citations`, `reviews`, `tasks`, `reports`). Add indexes & materialized views (e.g. 30-day rank delta). Enable **RLS** per tenant & write policies. | Secure, indexed DB |
| 2 | **Data Backfill / ETL** | If legacy CSV/Sheets exist, run Node ETL → Supabase. Log row counts + checksum to `etl_audit`. | Clean historical dataset |
| 3 | **ORM & Repository Layer** | Adopt **Prisma ORM** with repository pattern. Add `prisma migrate` + rollback scripts; enforce `prisma migrate diff` gate in CI. | Type-safe data access |
| 4 | **Schema Drift Audit** | Generate `supabase-migrations.json` after each migration; commit for drift detection in PR checks. | Schema change traceability |
| 5 | **API Gateway v1** | Refactor all routes → `/api/v1/*`; auto-publish OpenAPI via `express-oas-generator`. Expose `/api/docs`. | Versioned public API |
| 6 | **Queues & Schedulers** | Introduce **BullMQ + Redis** for jobs (refresh, insights, tasks, reports). Add idempotency keys + **Redlock** (distributed lock). | Reliable async engine |
| 7 | **Rate Limit & Caching** | Apply **Express-rate-limit**, Redis cache, circuit breaker for external APIs (DataForSEO, GBP). | Stable API performance |
| 8 | **Containerisation** | Add Dockerfiles (frontend, backend, worker). Compose for local parity (Postgres + Redis + API). | Portable environments |
| 9 | **CI/CD Expansion** | GitHub Actions: run lint, test, build, `prisma migrate diff`, start Postgres + Redis, execute integration tests, build containers, push → staging. | Automated pipeline |
| 10 | **Observability Stack** | Use **Winston → Logtail** for JSON logs; add `/metrics` (Express Prom-client). Synthetics via UptimeRobot for `/api/health`, `/api/v1/rankings`. | Full visibility |
| 11 | **Load & Stress Tests** | **k6/Artillery** simulate 100–1 000 users. Measure p95/p99 latency & queue throughput. Gate deploy if p95 > 1 s. | Performance certified |
| 12 | **Security & Backups** | TLS everywhere, key rotation, **Snyk scan** in CI, **OWASP ZAP** pipeline. Daily DB backups + monthly restore drill with checksum verification. | Resilient and secure |

---

## 🧪 Testing Deliverables

| Layer | Tool | Validation |
|-------|------|-------------|
| Schema | pgTAP / Prisma Test | Migrations apply/rollback cleanly; RLS policies valid |
| Integration | Jest + Supertest | `/api/v1/*` endpoints pass with live Postgres + Redis |
| E2E | Playwright | Rankings → Insights → Reports flow passes |
| Load | k6 / Artillery | p95 < 1 s @ 100 req/s; no duplicate jobs |
| Security | OWASP ZAP / Snyk | Zero high/critical issues |
| Backup | Custom Script | Nightly backup restores + checksum match |
| Monitoring | Synthetics | Health endpoints 200 OK; alerts trigger below SLA |

---

## ✅ Exit Criteria
- Supabase hardened (RLS, indexes, backups verified)  
- All APIs under `/api/v1/*` + OpenAPI docs published  
- BullMQ queues with locks + idempotency operational  
- CI/CD runs lint → test → migrate → build → deploy gated by perf/security  
- Load test: p95 < 1 s @ 100 concurrent users  
- Observability + alerting live (Logtail + UptimeRobot + /metrics)  
- ADRs created: `011-schema-governance.md`, `012-job-queues.md`, `013-observability.md`

---

## 🧭 Test Validation

**Manual**
- Apply migration → check indexes/materialized views exist  
- Trigger BullMQ cycle → verify Redlock ensures single execution  
- Review Logtail metrics dashboard (p95 latency, queue depth)

**Automated**
- `npm run test:integration` → Postgres + Redis containers  
- `npm run test:load` → load/stress benchmark with threshold gate  
- CI blocks deploy if schema diff detected or SLA breached

---

✅ **Outcome**  
Phase 6 elevates LocalRankAI to an **enterprise-ready foundation**:  
secure Supabase data layer, versioned API gateway, reliable BullMQ automation, observable metrics, and a self-auditing CI/CD pipeline — ready for public beta and long-term scale.

---

# 🚀 Phase 7 – Final Polish & Beta Launch (v2.2, Gap-Fixed) — 2–3 Weeks

**Goal**  
Ship a stable **public beta** of LocalRankAI with polished Polaris-compliant UI, guided onboarding, subscription billing, feature flags, and full regression/performance/accessibility coverage. Adds lightweight guardrails (ADRs, sandbox billing, synthetics) to de-risk launch.

---

## 🧩 Scope
- Finalize UI/UX (Polaris compliance, accessibility)
- Onboarding wizard for Google/GBP/DataForSEO setup
- Stripe/Paddle billing (test mode) with webhooks + audit logs
- Feature toggles for staged rollout (Predictive, Automation)
- Beta cohort launch, in-app feedback + usage analytics
- CI-enforced regression, performance, security, and a11y gates

---

## 🧱 Tasks

| # | Task | Description | Output |
|---|------|-------------|--------|
| 1 | **Onboarding Wizard** | Multi-step flow with **React Hook Form + Polaris** (connect Google OAuth, GBP, DataForSEO). Persist progress in Supabase; resume support. | Seamless onboarding |
| 2 | **Feature Toggles** | Use **LaunchDarkly** or config JSON stored in Supabase for module flags (Insights+, Predictive, Automation). Include per-tenant overrides. | Safe progressive delivery |
| 3 | **Billing (Sandbox)** | `/api/billing` with **Stripe/Paddle** test keys; plan matrix (Free / Pro / Agency). Log all webhook events to Supabase `billing_events` with signature verification. | Operational billing |
| 4 | **UI Polish & Theming** | Normalize typography/spacing/states with Polaris tokens; verify contrast and focus states. Remove visual drift across tabs. | Pixel-perfect UI |
| 5 | **Accessibility & A11y Tests** | Run **axe-core** and **Lighthouse**; fix WCAG 2.1 AA issues. Add **jest-axe** snapshots for critical screens. | A11y compliance |
| 6 | **Feedback & Telemetry** | In-app feedback widget (custom or Userback/Hotjar). Track usage with **PostHog/Supabase Analytics** (tabs, reports). | Continuous insight loop |
| 7 | **Regression & Visual Suite** | Full **Jest + Playwright** flows; **Percy** visual diffs (block merge on >2%). Freeze critical snapshots before beta. | Release safety net |
| 8 | **Security Hardening** | **OWASP ZAP** scan, **Snyk** in CI, HTTPS-only cookies, JWT expiry/rotation, CSRF protections on billing/webhooks. | Hardened app surface |
| 9 | **Pipelines & Rollback** | GitHub Actions: staging→prod promote, smoke tests, automatic rollback on failed health or diff thresholds. | Reliable release flow |
| 10 | **Synthetics & Alerts** | **UptimeRobot + Logtail** checks for `/api/health`, `/api/billing`, `/api/insights`; Slack alerts for SLA breaches. | Live observability |
| 11 | **Beta Cohort** | Invite 5–10 AU SMB/agency testers, seed demo data, capture NPS + qualitative feedback; weekly AI summaries. | Real-world validation |
| 12 | **ADRs & Docs** | Add `/docs/decisions`: `020-onboarding-and-billing.md`, `021-feature-flags.md`, `022-a11y-baseline.md`. | Decision history |

---

## 🧪 Testing Deliverables

| Layer | Tool | Validation |
|------|------|------------|
| Regression | Jest + Playwright | Auth → onboarding → insights → billing → reports pass |
| Accessibility | axe-core, jest-axe, Lighthouse | WCAG 2.1 AA; Lighthouse ≥ 90 (accessibility) |
| Visual | Percy | No unintended diffs (>2% blocks merge) |
| Billing | Cypress + Stripe test keys | Subscriptions + webhook signatures verified, events logged |
| Security | OWASP ZAP / Snyk | No high/critical issues; deps clean |
| Performance | k6 / Artillery | < 2s p95 @ 200 concurrent users |
| Monitoring | UptimeRobot / Logtail | Health + latency tracked with alerts |

---

## ✅ Deliverables / Exit Criteria
- Polaris-compliant, accessible, responsive UI across all tabs
- Onboarding wizard completes and persists state; integrations verified
- Billing live in **sandbox** (plans, invoices, webhooks, audit logs)
- Feature flags controlling advanced modules per tenant
- Feedback widget + usage analytics dashboards running
- CI green on regression, visual, a11y, performance, and security gates
- Beta cohort onboarded; weekly feedback/NPS summaries captured
- Synthetics confirm ≥ 99.9% uptime during beta window

---

## 🧭 Test Validation

**Manual**
- Complete a clean onboarding on staging (new tenant), verify API keys stored with RLS.
- Subscribe to Pro (test card), confirm webhooks, plan entitlements change.
- Submit feedback; verify it appears in Supabase and ClickUp/Jira.

**Automated**
- `npm run test:e2e` runs full flows with mocked billing.
- Lighthouse CI ≥ 90 (Perf, A11y, Best Practices, SEO).
- UptimeRobot + Slack alerts verified by induced failure drill.

---

## 🔐 Prototype-Safety Add-Ons (Phase-Wide)
- Sandbox modes: Stripe/Paddle, Postmark/Twilio on by default in beta.
- ADRs required for any toggle default change or billing rule updates.
- Model/prompt versioning (seed + hash) logged when Insights/Predictive are enabled.

---

## ✅ Outcome
Phase 7 moves LocalRankAI from MVP to a **market-ready beta** with polished UX, guarded rollout, and end-to-end quality gates. You’ll have real users, real telemetry, and fast rollback paths—de-risking public launch while validating pricing and value.

---

# 🧠 Development Principles (v2.3 – Prototype-Safe)

**Purpose:**  
Ensure every feature in LocalRankAI is delivered as a **self-contained, testable, observable, and secure vertical slice** — with automation, auditability, and fast iteration built into the core development process.

---

## 1. 🧩 Vertical Slices  
Deliver complete features **end-to-end** — UI → API → Database → Tests.  
Each slice must be deployable independently and testable without other modules.  
Every slice includes:
- Unit + integration + E2E test coverage  
- Observability hooks (logs + metrics)  
- Documentation & ADR update in `/docs/decisions`

---

## 2. ⚙️ Micro Phases (≤ 3 Weeks)  
Each phase must deliver measurable, production-ready value:  
- A new endpoint, UI flow, or automated background process  
- Passing CI/CD pipeline and verified test coverage  
- Clean rollback path  
All phases end with a **demo**, a **PRD update**, and a **phase tag** (e.g. `v4.2-phase3`).

---

## 3. 🚀 Continuous Integration / Continuous Deployment (CI/CD)  
- **GitHub Actions** runs build → lint → test → deploy on every PR.  
- **Environments:**  
  - Frontend → **Vercel**  
  - Backend → **Railway / Render**  
  - Database → **Supabase (PostgreSQL)**  
- **Quality gates:**  
  - Code coverage ≥ 85% (Codecov enforced)  
  - Schema diff blocked unless approved (`prisma migrate diff`)  
  - Drift logged via `supabase-migrations.json`  
  - Container builds validated with health checks before deploy  
- Every successful deploy tagged with phase + version (`v6.3-phase4`).

---

## 4. 🧪 Automated Testing at Every Layer  
Each commit triggers the full test pyramid:
| Layer | Tooling | Purpose |
|-------|----------|----------|
| **Unit** | Jest, React Testing Library, Supertest | Validate isolated functions & components |
| **Integration** | Nock, WireMock, TestContainers (Postgres/Redis) | Test module boundaries & API mocks |
| **E2E** | Playwright, Cypress | Validate complete user journeys |
| **Visual** | Percy, Chromatic | Detect UI layout regressions |
| **Accessibility** | jest-axe, axe-core, Lighthouse | Enforce WCAG 2.1 AA |
| **Performance** | k6, Artillery | Benchmark response & render times |

All stages execute in CI; failures block merge.

---

## 5. 🧱 Feature Toggles & Progressive Delivery  
Use **LaunchDarkly** or **Supabase Config Flags** to manage beta rollouts.  
- Toggle high-risk modules (Predictive Engine, Review Automation).  
- Enable A/B testing and dark launches.  
- Log every toggle change in `/docs/decisions/feature-flags.md`.

---

## 6. 🔍 Observability & Monitoring  
Embed observability from the start:
- Structured logging via **Winston → Logtail** (`logger.ts` shared util).  
- Metrics via `/metrics` endpoint (Prom-client): API latency, job success rate, queue depth.  
- **Synthetic monitoring** (UptimeRobot) for `/api/health`, `/api/v1/rankings`, `/api/v1/insights`.  
- Alert thresholds:  
  - ⚠️ Response > 2s  
  - ⚠️ Uptime < 99.9%  
  - ⚠️ Job failure > 5%  
All surfaced in **Datadog dashboards** and auto-notified to Slack.

---

## 7. 🔐 Security & Compliance  
- Follow **OWASP Top 10** + **CWE/SANS** guidelines.  
- Enforce **HTTPS-only cookies**, **JWT expiry**, and **.env encryption**.  
- Scan dependencies with **Snyk** in CI.  
- **RLS (Row Level Security)** per tenant in Supabase.  
- IAM principles: least privilege for all keys and services.  
- Schedule quarterly penetration tests + dependency reviews.  

---

## 8. ⚡ Scalability by Design  
Prepare for load before scale:
- API + DB schemas optimised for high concurrency.  
- Use **Redis** for cache & **BullMQ** for background jobs.  
- Employ **idempotency keys** for async tasks.  
- Introduce **region-based scaling** beyond 1K daily active users.  
- Monitor scaling metrics via Supabase/Redis dashboards.

---

## 9. 🧾 Documentation & Knowledge Transfer  
- Keep all technical docs (architecture, API, schemas, tests) under `/docs`.  
- Record major design choices in `/docs/decisions` (ADR format).  
- Sync docs with **Docusaurus** or **Confluence** for visibility.  
- Every PR must include:  
  - Updated documentation or ADR reference  
  - Test summary (unit/integration/E2E)  
  - Linked issue or ticket (ClickUp/Jira)  

---

## 10. 🔁 Feedback-Driven Iteration  
- Capture telemetry (usage stats, logs, feedback) via **PostHog + Supabase Analytics**.  
- Summarise user feedback weekly using **AI-assisted synthesis** (OpenAI).  
- Feed insights into sprint retrospectives and roadmap updates.  
- Prioritise UX improvements based on telemetry & qualitative feedback.

---

## 🧰 Prototype-Safety Additions (Cross-Phase)
- **Supabase Auth (JWT)** with RLS for tenant isolation.  
- **`npm run seed:demo`** populates safe test data.  
- **sandbox flags** for Twilio/Postmark/Stripe integrations.  
- **prompt-schema validation** + `model_seed` and `version_hash` for deterministic AI runs.  
- ADRs for any feature toggle, model change, or schema migration.

---

✅ **Summary**  
LocalRankAI follows a **modular, test-first, observable, and feedback-driven** engineering discipline.  
Every feature must be:  
1. Independently deployable  
2. Fully test-covered  
3. Observable in production  
4. Secure and scalable by default  
5. Documented with an ADR trail for full traceability  

**Author:** Digital Marketing Genius  
**Date:** November 2025  
**Version:** 1.0 (Gap-Fixed)