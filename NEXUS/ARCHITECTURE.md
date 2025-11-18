# NEXUS Architecture Guide

**Version:** 1.0
**Last Updated:** November 16, 2024
**Status:** Phase 2 - Scraper Core

---

## System Architecture Overview

NEXUS is a standalone competitor intelligence system that scrapes, analyzes, and extracts insights from competitor advertising strategies. It feeds these insights into the main DMG platform to power data-driven content creation.

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                  NEXUS System Architecture                   │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                    External APIs                              │
├──────────────────────────────────────────────────────────────┤
│  Scrape Creators API  │  Main Platform API  │  Logging APIs   │
└──────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────┐
│                   API Client Layer                            │
├──────────────────────────────────────────────────────────────┤
│  - Axios wrapper with automatic retry logic                  │
│  - Request/response logging                                  │
│  - Error handling and rate limit management                  │
└──────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────┐
│                  Service Layer (Business Logic)              │
├──────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   Scraper    │  │   Analyzer   │  │   Insights   │       │
│  │  Service     │  │   Service    │  │   Service    │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                               │
│  Responsibilities:                                           │
│  - Scraper: Fetch ads, deduplicate, store                   │
│  - Analyzer: Pattern detection, sentiment analysis          │
│  - Insights: Generate daily intelligence summaries          │
└──────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────┐
│                  Database Layer (Persistence)               │
├──────────────────────────────────────────────────────────────┤
│  - PostgreSQL with Prisma ORM                               │
│  - 13 interconnected models                                 │
│  - Full audit trail with logging tables                     │
└──────────────────────────────────────────────────────────────┘
```

---

## Layer-by-Layer Breakdown

### 1. API Client Layer (`src/utils/apiClient.ts`)

**Purpose:** Unified HTTP client for all external API calls

**Features:**
- Axios-based HTTP client
- Automatic retry logic with exponential backoff
- Smart error handling (retries on 5xx, 429; fails on 4xx)
- Request/response logging
- Type-safe generic responses
- Single instance pattern for consistency

**Used By:**
- Scraper Service (Scrape Creators API)
- Integration Service (Main platform API)

**Retry Strategy:**
- 3 total attempts
- Exponential backoff: 1s → 2s → 4s
- Automatic on network errors, 5xx, and 429
- No retry on 4xx (except 429)

---

### 2. Service Layer (Business Logic)

#### A. Scraper Service (`src/services/scraper.service.ts` - Phase 2)

**Responsibilities:**
- Fetch ads from Scrape Creators API for tracked competitors
- Parse and transform API responses
- Deduplicate ads (avoid storing the same ad twice)
- Store new ads in database
- Update existing ads with latest metadata
- Track scraping statistics

**Key Methods:**
```typescript
scrapeAllCompetitors()        // Main entry point
scrapeCompetitor(id)          // Single competitor
parseScrapedAds(rawData)      // Transform API response
deduplicateAds(ads)           // Remove duplicates
storeAds(ads)                 // Persist to database
```

**Data Flow:**
```
Scrape Creators API
        ↓
API Client (with retry)
        ↓
Scraper Service (parse + deduplicate)
        ↓
Database (CompetitorAd table)
        ↓
Logging (ScrapeLog table)
```

#### B. Analyzer Service (`src/services/analyzer.service.ts` - Phase 3)

**Responsibilities:**
- Analyze unanalyzed ads for patterns
- Extract copy hooks (question, controversial, story, statistic)
- Detect emotional triggers (fear, aspiration, FOMO, curiosity)
- Identify CTA types and urgency signals
- Calculate performance scores
- Find new patterns across ads
- Track analysis statistics

**Key Methods:**
```typescript
analyzeAllUnanalyzedAds()     // Main entry point
analyzeAd(ad)                 // Single ad analysis
findNewPatterns()             // Detect trends
extractHooks(copyText)        // Identify hooks
detectEmotions(text)          // Emotional triggers
calculateScore(analysis)      // Performance rating
```

**Data Flow:**
```
Unanalyzed Ads (from CompetitorAd table)
        ↓
Analyzer Service (NLP analysis)
        ↓
AdAnalysis table (parsed insights)
        ↓
ContentPattern table (aggregated trends)
        ↓
Logging (AnalysisLog table)
```

#### C. Insights Service (`src/services/insights.service.ts` - Phase 4)

**Responsibilities:**
- Generate daily intelligence summaries
- Identify top performing patterns
- Extract actionable recommendations
- Track trending topics and themes
- Calculate confidence scores
- Push insights to main platform

**Key Methods:**
```typescript
generateDailyInsight()        // Create today's intelligence
getTodayInsight()             // Retrieve cached insight
getInsights(dateRange)        // Query historical data
pushToMainPlatform()          // Integrate with main system
```

**Data Flow:**
```
Analyzed Ads + ContentPatterns
        ↓
Insights Service (summarization)
        ↓
DailyInsight table (daily intelligence)
        ↓
Main Platform API (integration)
        ↓
Content Generation System
```

---

### 3. Database Layer (Persistence)

**ORM:** Prisma Client
**Database:** PostgreSQL
**Models:** 13 interconnected tables

#### Core Data Models

**Competitor Model**
- Represents tracked digital agencies
- Stores profile info, platform IDs, status
- Relations: ads, analyses, activities

**CompetitorAd Model**
- Raw scraped ad data from Scrape Creators API
- Stores copy, creative, metadata
- Tracks first/last seen timestamps
- Relations: competitor (parent), analysis

**AdAnalysis Model**
- Extracted insights from analyzed ads
- Stores hooks, emotions, CTAs, scores
- Performance metrics
- Relations: ad, competitor

**ContentPattern Model**
- Aggregated patterns found across ads
- Tracks occurrences and performance
- Recommendations for content creation

**DailyInsight Model**
- Daily intelligence summaries
- Top patterns, new discoveries, trends
- Actionable recommendations

**Activity & Logging Models**
- CompetitorActivity: Track competitor actions
- ScrapeLog: Audit trail of scraping jobs
- AnalysisLog: Audit trail of analysis jobs
- InsightLog: Audit trail of insight generation

---

## Data Flow Through the System

### End-to-End Example: Daily Competitor Analysis

```
1. SCHEDULED TRIGGER (2 AM Daily)
   ↓
2. SCRAPER JOB RUNS
   - Load all active competitors from database
   - For each competitor:
     - Call Scrape Creators API
     - Get new/updated ads
     - Parse response
     - Deduplicate against existing
     - Store new ads in CompetitorAd table
   - Log results in ScrapeLog
   ↓
3. ANALYZER JOB RUNS (Every 4 hours)
   - Load all unanalyzed ads (isAnalyzed = false)
   - For each ad:
     - Extract copy hooks
     - Detect emotional triggers
     - Identify CTA type
     - Calculate performance score
     - Store in AdAnalysis
   - Detect new patterns across all ads
   - Store patterns in ContentPattern
   - Log results in AnalysisLog
   ↓
4. INSIGHTS JOB RUNS (8 AM Daily)
   - Query top performing patterns (last 24h)
   - Get new patterns found
   - Extract trending topics
   - Generate recommendations
   - Calculate confidence score
   - Store in DailyInsight
   - Push to main platform API
   - Log results in InsightLog
   ↓
5. MAIN PLATFORM RECEIVES INSIGHTS
   - Content generation system processes insights
   - Creates 3-5 new posts for today
   - Posts automatically published
```

---

## Technology Stack Decisions

| Layer | Technology | Why |
|-------|-----------|-----|
| **Language** | TypeScript | Type safety, catches bugs at compile time |
| **Runtime** | Node.js 18+ | Same as main platform, consistent ecosystem |
| **Framework** | Express.js | Lightweight, proven, minimal overhead |
| **HTTP Client** | Axios | Built-in retries, interceptors, timeouts |
| **Database** | PostgreSQL | Relational, scalable, ACID compliance |
| **ORM** | Prisma | Type-safe, excellent migrations, modern DX |
| **Validation** | Zod | Type-safe runtime validation |
| **Logging** | Winston | Structured logging, multiple transports |
| **Scheduling** | node-cron | Lightweight, no external dependencies |
| **API Documentation** | TypeScript JSDoc | Built-in code documentation |

---

## Deployment Architecture

### Local Development
```bash
┌─────────────────────────┐
│   Your Development Mac   │
├─────────────────────────┤
│  - NEXUS Node.js Server │
│  - PostgreSQL Container │
│  - Hot reload (ts-node) │
│  - Console logging      │
└─────────────────────────┘
```

### Production
```bash
┌────────────────────────────────────────────────┐
│           Production Environment                │
├────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────┐  │
│  │   Docker Container (NEXUS App)           │  │
│  │   - Compiled TypeScript                  │  │
│  │   - Node.js runtime                      │  │
│  │   - Minimal dependencies                 │  │
│  └──────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────┐  │
│  │   PostgreSQL (Managed Service)           │  │
│  │   - Cloud-hosted or on-prem              │  │
│  │   - Automatic backups                    │  │
│  │   - SSL connections                      │  │
│  └──────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────┐  │
│  │   Monitoring & Logging                   │  │
│  │   - Application logs to file              │  │
│  │   - Error alerts                         │  │
│  │   - Health checks                        │  │
│  └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
```

---

## Error Handling Strategy

### Network Errors
```
Network Failure
    ↓
Retry with exponential backoff (1s, 2s, 4s)
    ↓
Log each retry attempt
    ↓
If all retries fail → Alert + fail gracefully
```

### Rate Limiting (429)
```
Rate Limit Hit
    ↓
Retry automatically (included in retry logic)
    ↓
Backend delays 1-4 seconds
    ↓
Resume scraping
```

### Validation Errors
```
Invalid API Response
    ↓
Parse error caught
    ↓
Log detailed error with response data
    ↓
Skip ad, continue processing others
```

### Database Errors
```
Database Connection Failed
    ↓
Log error
    ↓
Retry connection (Prisma auto-retry)
    ↓
If persistent → Alert and pause jobs
```

---

## Security Considerations

### API Keys
- Stored in `.env` (never committed)
- Passed to API client on initialization
- Included in authorization headers
- Rotated regularly (best practice)

### Database Access
- Connection string in `.env`
- PostgreSQL user with limited permissions
- SSL/TLS in production
- No sensitive data in logs

### Data Privacy
- No PII stored (only business data)
- Competitors are public agencies
- Ad data is publicly available
- Audit trail for compliance

---

## Scaling Considerations

### Current Capacity (Phase 2)
- Handle 50-100 competitors
- Process 1,000-5,000 ads/day
- Store months of historical data
- Real-time analysis

### Future Scaling
- Horizontal scaling with job queues (Bull, RabbitMQ)
- Separate read/write databases
- Caching layer (Redis) for frequent queries
- Microservices separation if needed

---

## Monitoring & Observability

### Key Metrics
- Ads scraped per day
- Analysis completion time
- Error rate
- API call latency
- Database query time

### Logging Points
- Service start/stop
- API requests (retries, failures)
- Database operations
- Job execution (start, end, errors)
- Insights generated

### Alerting
- Failed scraping jobs
- Database connection issues
- API rate limiting
- Unusual error patterns

---

## Integration Points

### Incoming (Scrape Creators API)
- HTTP REST API
- OAuth for authentication
- Rate limits: Track and respect

### Outgoing (Main Platform)
- HTTP REST API
- Authentication headers
- Push daily insights
- Update competitor data

---

## Next Phases

**Phase 2 (Current):** Scraper Core
- Implement API client ✅
- Build Scraper Service
- Create type definitions
- Database seed script

**Phase 3:** Analysis Engine
- Implement Analyzer Service
- Text analysis utilities
- Pattern detection
- Analysis job

**Phase 4:** API & Integration
- Build REST API endpoints
- Create Insights Service
- Insights job
- Main platform integration

**Phase 5:** Automation & Scheduling
- Configure cron jobs
- Setup logging
- Error handling
- Manual sync scripts

**Phase 6:** Launch & Optimization
- Testing & debugging
- Docker setup
- Production deployment
- Monitoring

---

## References

- **Strategy:** See `01-STRATEGY.md` for business rationale
- **Implementation:** See `02-IMPLEMENTATION-PLAN-EXTREME-DETAIL.md` for step-by-step
- **Code Examples:** See `03-DETAILED-CODE-REFERENCE.md` for sample implementations
- **Phase Status:** See `PHASE-1-COMPLETE.md` for what's done

---

**Document Owner:** Development Team
**Last Reviewed:** November 16, 2024
**Next Review:** After Phase 2 completion
