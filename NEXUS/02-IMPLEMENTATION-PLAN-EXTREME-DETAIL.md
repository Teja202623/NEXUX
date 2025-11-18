# NEXUS IMPLEMENTATION PLAN
## Extreme Detail Technical Implementation Guide

**Project Name:** NEXUS (Competitor Intelligence System)
**Status:** Ready for Implementation
**Version:** 1.0
**Date:** November 16, 2024

---

## TABLE OF CONTENTS

1. [Project Overview](#project-overview)
2. [System Architecture](#system-architecture)
3. [Database Schema](#database-schema)
4. [Phase 1: Foundation](#phase-1-foundation)
5. [Phase 2: Scraper Core](#phase-2-scraper-core)
6. [Phase 3: Analysis Engine](#phase-3-analysis-engine)
7. [Phase 4: API & Integration](#phase-4-api--integration)
8. [Phase 5: Automation & Scheduling](#phase-5-automation--scheduling)
9. [Phase 6: Launch & Optimization](#phase-6-launch--optimization)
10. [Deployment Guide](#deployment-guide)

---

# PROJECT OVERVIEW

## What is NEXUS?

NEXUS is a standalone competitive intelligence system that:
1. **Scrapes competitor ads** from Facebook, Instagram, LinkedIn (via Scrape Creators API)
2. **Analyzes patterns** in successful competitor content
3. **Feeds insights** to content generation system
4. **Tracks performance** of competitor strategies over time
5. **Provides intelligence** to drive your own content strategy

## Why Standalone?

- **Independent scaling:** Can handle 1M+ data points without affecting main platform
- **Reusable asset:** Can license/sell to other agencies in future
- **Team ownership:** Someone can own NEXUS while others own content generation
- **Deployment simplicity:** Deploy independently from main platform
- **Technology flexibility:** Can evolve tech stack independently

## Expected Output

By month 3:
- 10,000+ competitor ads analyzed
- 50+ proven content patterns identified
- Daily insights feeding content generation
- 2-3 viral content angles discovered per week

---

# SYSTEM ARCHITECTURE

## Technology Stack

| Layer | Technology | Reasoning |
|-------|-----------|-----------|
| **Runtime** | Node.js 18+ | Same as main platform |
| **Language** | TypeScript | Type safety, consistency |
| **Framework** | Express.js | Lightweight, proven |
| **Database** | PostgreSQL | Relational, scalable |
| **ORM** | Prisma | Type-safe, excellent migrations |
| **HTTP Client** | Axios | Retry logic, timeouts |
| **Scheduling** | node-cron | Lightweight local scheduling |
| **Logging** | Winston | Structured logging |
| **Validation** | Zod | Type-safe validation |

## Project Structure

```
nexus/
├── src/
│   ├── config/
│   │   ├── env.ts
│   │   ├── database.ts
│   │   └── scrapeCreators.ts
│   ├── services/
│   │   ├── scraper.service.ts
│   │   ├── analyzer.service.ts
│   │   ├── insights.service.ts
│   │   └── integration.service.ts
│   ├── jobs/
│   │   ├── dailyScraper.job.ts
│   │   ├── analyzeAds.job.ts
│   │   └── generateInsights.job.ts
│   ├── routes/
│   │   └── api.routes.ts
│   ├── types/
│   │   ├── scrapeCreators.types.ts
│   │   ├── analysis.types.ts
│   │   └── insights.types.ts
│   ├── utils/
│   │   ├── logger.ts
│   │   ├── apiClient.ts
│   │   └── textAnalysis.ts
│   ├── app.ts
│   └── server.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── tests/
│   ├── services/
│   └── integration/
├── scripts/
│   ├── seed.ts
│   └── sync.ts
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
└── package.json
```

## Core Data Models

1. **Competitor** - Agency being tracked
2. **CompetitorAd** - Raw scraped ad data
3. **AdAnalysis** - Extracted insights from each ad
4. **ContentPattern** - Aggregated winning patterns
5. **DailyInsight** - Daily actionable intelligence
6. **ScrapeLog** - Audit trail of scraping jobs
7. **AnalysisLog** - Audit trail of analysis jobs
8. **InsightLog** - Audit trail of insight generation

---

# PHASE 1: FOUNDATION (Week 1)

## Step 1.1: Initialize Project

```bash
mkdir nexus && cd nexus
npm init -y
npm install express axios typescript ts-node prisma @prisma/client dotenv winston zod cors helmet
npm install -D @types/express @types/node ts-jest jest @types/jest nodemon
```

## Step 1.2: Environment Setup

Create `.env.example`:

```env
NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://nexus_user:nexus_password@localhost:5432/nexus_db
SCRAPE_CREATORS_API_KEY=your_api_key_here
SCRAPE_CREATORS_BASE_URL=https://api.scrapecreators.com
JWT_SECRET=your_secret_here
LOG_LEVEL=info
MAIN_PLATFORM_API_URL=http://localhost:3000
MAIN_PLATFORM_API_KEY=your_key_here
```

## Step 1.3: Database Setup

```bash
npx prisma init
```

Then implement full schema (see DATABASE SCHEMA section below).

## Step 1.4: TypeScript Config

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "baseUrl": "./src",
    "paths": { "@/*": ["./*"] }
  }
}
```

---

# COMPLETE DATABASE SCHEMA

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// Competitor Model
model Competitor {
  id              String   @id @default(cuid())
  name            String   @unique
  website         String
  domain          String   @unique
  linkedinUrl     String?
  facebookPageId  String?
  instagramHandle String?
  industry        String   @default("digital-marketing")
  trades          String[]
  status          String   @default("active")
  lastScrapedAt   DateTime?

  ads             CompetitorAd[]
  analyses        AdAnalysis[]
  activities      CompetitorActivity[]

  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@index([status])
  @@index([lastScrapedAt])
}

// Scraped Ad Model
model CompetitorAd {
  id                  String   @id @default(cuid())
  competitorId        String
  competitor          Competitor @relation(fields: [competitorId], references: [id], onDelete: Cascade)

  scrapeCreatorsId    String
  platform            String   // "facebook", "instagram", "linkedin"

  headline            String?
  description         String?
  primaryText         String?
  callToAction        String?
  destinationUrl      String?

  imageUrl            String?
  videoUrl            String?
  creativeType        String   // "image", "video", "carousel"

  firstSeenAt         DateTime
  lastSeenAt          DateTime

  rawData             Json
  isAnalyzed          Boolean  @default(false)

  analysis            AdAnalysis?

  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt

  @@unique([scrapeCreatorsId, platform, competitorId])
  @@index([competitorId])
  @@index([isAnalyzed])
}

// Analysis Results
model AdAnalysis {
  id                    String   @id @default(cuid())
  adId                  String   @unique
  ad                    CompetitorAd @relation(fields: [adId], references: [id], onDelete: Cascade)
  competitorId          String
  competitor            Competitor @relation(fields: [competitorId], references: [id], onDelete: Cascade)

  copyLength            Int
  copyHooks             String[]
  copySentiment         String
  emotionalTriggers     String[]
  keywords              String[]

  creativeType          String
  visualThemes          String[]

  ctaType               String
  ctaUrgency            String

  contentThemes         String[]
  industryTopics        String[]

  performanceScore      Int
  estimatedEngagement   String

  keyTakeaways          String[]
  reusableAngle         String?

  confidence            Int

  createdAt             DateTime @default(now())
  updatedAt             DateTime @updatedAt

  @@index([competitorId])
}

// Identified Patterns
model ContentPattern {
  id                    String   @id @default(cuid())
  patternType           String   // "hook", "cta", "visual", "theme"
  patternName           String
  description           String
  examples              String[]
  occurrences           Int
  lastSeen              DateTime
  avgPerformanceScore   Int
  recommendation        String
  category              String
  applicableIndustries  String[]

  discoveredAt          DateTime @default(now())
  lastUpdatedAt         DateTime @updatedAt

  @@index([patternType])
}

// Daily Insights
model DailyInsight {
  id                    String   @id @default(cuid())
  date                  DateTime @unique
  topPatterns           Json
  newPatternsFound      Int
  recommendedAngles     String[]
  urgentTrends          String[]
  newAdsDiscovered      Int
  competitorsActive     Int
  mostActiveCompetitors String[]
  trendSummary          String
  hotTopics             String[]
  confidenceScore       Int
  actionability         String
  detailedAnalysis      Json

  createdAt             DateTime @default(now())
}

// Activity Tracking
model CompetitorActivity {
  id              String   @id @default(cuid())
  competitorId    String
  competitor      Competitor @relation(fields: [competitorId], references: [id], onDelete: Cascade)
  activityType    String
  description     String
  details         Json?
  activityDate    DateTime

  createdAt       DateTime @default(now())

  @@index([competitorId])
}

// Job Logs
model ScrapeLog {
  id                  String   @id @default(cuid())
  jobId               String
  startTime           DateTime
  endTime             DateTime
  duration            Int
  competitorsProcessed Int
  adsFound            Int
  adsStored           Int
  newAdsInserted      Int
  adsUpdated          Int
  errorCount          Int @default(0)
  errors              String[]
  status              String
  apiCallsUsed        Int

  createdAt           DateTime @default(now())
  @@index([jobId])
}

model AnalysisLog {
  id              String   @id @default(cuid())
  jobId           String
  startTime       DateTime
  endTime         DateTime
  duration        Int
  adsProcessed    Int
  adsAnalyzed     Int
  newPatternsFound Int
  status          String
  errors          String[]

  createdAt       DateTime @default(now())
}

model InsightLog {
  id              String   @id @default(cuid())
  jobId           String
  startTime       DateTime
  endTime         DateTime
  insightGenerated Boolean
  topPatterns     Int
  newAds          Int
  status          String

  createdAt       DateTime @default(now())
}
```

---

# PHASE 2: SCRAPER CORE (Week 2)

## Overview

Phase 2 focuses on building the complete scraping infrastructure to collect competitor content from multiple platforms:
- **Facebook Ads** (via Ad Library API)
- **Facebook Posts** (organic content from business pages)
- **Instagram Posts** (organic content from business profiles)
- **Instagram Reels** (video content)
- **Instagram Ads** (paid promotions)

This phase includes deduplication logic, error handling, and the ability to track the same competitor across multiple platforms.

## Step 2.1: Scraper Service Implementation

Create `src/services/scraper.service.ts` with the following methods:

### Main Entry Point
```typescript
async scrapeAllCompetitors(): Promise<ScrapeResult>
  - Iterates through all active competitors
  - Calls platform-specific scrapers
  - Returns aggregated results with stats
```

### Competitor-Level Scraping
```typescript
async scrapeCompetitor(competitorId: string): Promise<CompetitorScrapeResult>
  - Scrapes all platforms for single competitor
  - Handles all content types simultaneously
  - Deduplicates content
  - Returns content counts by type
```

### Facebook Content Scrapers

**Facebook Ads:**
```typescript
async scrapeFacebookAds(competitor: Competitor): Promise<FacebookAdContent[]>
  - Uses Meta Ad Library API (public, no auth required for basic access)
  - Searches by page ID or domain
  - Extracts: headline, description, CTA, landing URL, creative assets
  - Deduplicates by checksum of headline + description + CTA
  - Stores raw API response for forensics
```

**Facebook Posts (Organic):**
```typescript
async scrapeFacebookPosts(competitor: Competitor): Promise<FacebookPostContent[]>
  - Fetches posts from competitor's Facebook page
  - Extracts: post text, engagement metrics, images, video URLs
  - Identifies post types: text, link, video, image carousel
  - Deduplicates by post ID from API
  - Note: Organic reach insights require page access token
```

### Instagram Content Scrapers

**Instagram Posts (Organic):**
```typescript
async scrapeInstagramPosts(competitor: Competitor): Promise<InstagramPostContent[]>
  - Fetches posts from competitor's Instagram profile
  - Extracts: caption, like/comment counts, image URLs, carousel images
  - Identifies content themes: lifestyle, product, testimonial, educational
  - Deduplicates by post ID from Instagram API
  - Note: Business account required for API access
```

**Instagram Reels (Organic Video):**
```typescript
async scrapeInstagramReels(competitor: Competitor): Promise<InstagramReelContent[]>
  - Fetches video reels from competitor profile
  - Extracts: caption, video URL, view counts, shares
  - Tags video characteristics: length, topics, hook style
  - Deduplicates by reel ID
  - Returns play duration for analysis
```

**Instagram Ads:**
```typescript
async scrapeInstagramAds(competitor: Competitor): Promise<InstagramAdContent[]>
  - Uses Meta Ad Library API (same as Facebook)
  - Searches by Instagram business account ID
  - Extracts: ad copy, CTA, landing URL, creative assets, carousel images
  - Deduplicates similar to Facebook ads
  - Stores complete raw response
```

### Deduplication Logic

```typescript
async deduplicateContent(content: CompetitorContent[]): Promise<CompetitorContent[]>
  - Facebook Ads: Hash of headline + description + CTA
  - Facebook Posts: Direct post ID comparison
  - Instagram Posts: Direct post ID comparison
  - Instagram Reels: Direct reel ID comparison
  - Instagram Ads: Hash of ad copy + primary CTA
  - Checks against existing content in database
  - Updates lastSeenAt timestamps for existing content
  - Returns only new content for insertion
```

### Error Handling

```typescript
  - Retry logic: 3 attempts with exponential backoff
  - Network errors: Log and continue with next competitor
  - API rate limits: Pause and resume after rate limit window
  - Invalid credentials: Mark competitor as needing auth update
  - Log all errors to ScrapeLog for audit trail
```

## Step 2.2: Scraper Job

Create `src/jobs/dailyScraper.job.ts`:

```typescript
export async function dailyScraperJob() {
  const startTime = new Date();

  try {
    const scrapeService = new ScraperService();
    const result = await scrapeService.scrapeAllCompetitors();

    // Log the results
    await db.scrapeLog.create({
      data: {
        jobId: generateId(),
        startTime,
        endTime: new Date(),
        duration: Date.now() - startTime.getTime(),
        competitorsProcessed: result.competitorsProcessed,
        adsFound: result.totalAdsFound,
        adsStored: result.totalAdsStored,
        newAdsInserted: result.newAdsCount,
        adsUpdated: result.updatedAdsCount,
        status: result.success ? 'success' : 'partial',
        errorCount: result.errors.length,
        errors: result.errors,
        apiCallsUsed: result.apiCallsUsed,
      }
    });

    logger.info('Daily scraper completed', { result });
  } catch (error) {
    logger.error('Daily scraper failed', { error });
    throw error;
  }
}
```

### Schedule Configuration (Phase 5)
- Primary run: 2:00 AM daily (low traffic time)
- Backup run: 2:00 PM daily (catch any missed content)
- On-demand: Via `/api/nexus/scraper/run` endpoint

## Step 2.3: Data Models Update

Update `prisma/schema.prisma` to add content_type field to CompetitorAd:

```prisma
model CompetitorAd {
  // ... existing fields ...

  contentType       String   // "facebook_ad", "facebook_post", "instagram_post", "instagram_reel", "instagram_ad"
  platform          String   // "facebook" or "instagram"
  contentSource     String   // "ads_library", "page_feed", "profile_feed"

  // Platform-specific IDs for deduplication
  platformContentId String?  // post ID, reel ID, or ad ID from API

  // Engagement metrics (populated for organic content)
  engagementMetrics Json?    // { likes, comments, shares, saves, views }

  // For reels specifically
  videoDuration     Int?     // in seconds

  @@unique([platformContentId, platform, competitorId])
  @@index([contentType])
}
```

## Step 2.4: Types Definition

Create `src/types/scrapeCreators.types.ts`:

```typescript
export interface FacebookAdContent {
  adId: string;
  headline?: string;
  description?: string;
  primaryText?: string;
  callToAction?: string;
  landingUrl?: string;
  imageUrls: string[];
  videoUrl?: string;
  startDate: Date;
  endDate?: Date;
  updatedAt: Date;
  platforms: ('facebook' | 'instagram')[];
}

export interface FacebookPostContent {
  postId: string;
  pageId: string;
  text: string;
  imageUrls: string[];
  videoUrl?: string;
  createdTime: Date;
  engagementMetrics: {
    likes: number;
    comments: number;
    shares: number;
  };
  type: 'status' | 'photo' | 'video' | 'link';
}

export interface InstagramPostContent {
  postId: string;
  profileId: string;
  caption: string;
  imageUrls: string[];
  carouselImageUrls?: string[];
  createdTime: Date;
  engagementMetrics: {
    likes: number;
    comments: number;
    shares: number;
    saves: number;
  };
  contentTheme: string;
}

export interface InstagramReelContent {
  reelId: string;
  profileId: string;
  caption: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: number; // in seconds
  createdTime: Date;
  engagementMetrics: {
    plays: number;
    likes: number;
    comments: number;
    shares: number;
    saves: number;
  };
}

export interface InstagramAdContent {
  adId: string;
  accountId: string;
  headline?: string;
  adCopy: string;
  callToAction?: string;
  landingUrl?: string;
  creativeUrls: string[];
  startDate: Date;
  endDate?: Date;
  platforms: ('facebook' | 'instagram')[];
}

export interface ScrapeResult {
  success: boolean;
  competitorsProcessed: number;
  totalAdsFound: number;
  totalAdsStored: number;
  newAdsCount: number;
  updatedAdsCount: number;
  breakdown: {
    facebookAds: number;
    facebookPosts: number;
    instagramAds: number;
    instagramPosts: number;
    instagramReels: number;
  };
  errors: string[];
  apiCallsUsed: number;
  duration: number;
}
```

## Step 2.5: Environment Variables

Update `.env.example` with new API credentials:

```env
# Scraping APIs
FACEBOOK_AD_LIBRARY_TOKEN=your_token_here
INSTAGRAM_BUSINESS_ACCOUNT_TOKEN=your_token_here
SCRAPE_CREATORS_API_KEY=your_key_here

# Platform credentials
FACEBOOK_PAGE_ACCESS_TOKEN=your_token_here
INSTAGRAM_ACCESS_TOKEN=your_token_here

# Optional: For proxy rotation (high-volume scraping)
PROXY_LIST=proxy1.com:8080,proxy2.com:8080

# Rate limiting
API_RATE_LIMIT_PER_HOUR=1000
CONCURRENT_SCRAPES=5
```

## Implementation Checklist

- [ ] Create ScraperService with all platform-specific methods
- [ ] Implement deduplication logic for each content type
- [ ] Add error handling and retry logic
- [ ] Create ScrapeLog data model
- [ ] Implement daily scraper job
- [ ] Add comprehensive logging
- [ ] Create utility functions for API calls
- [ ] Test with sample competitors
- [ ] Document API authentication setup
- [ ] Set up environment variables

---

# PHASE 3-6: SERVICE IMPLEMENTATIONS

Due to length constraints, here are the key service implementations you'll need to build:

## Services Overview

### Scraper Service (COMPLETE - See Phase 2 above)
- `scrapeAllCompetitors()` - Main entry point
- `scrapeCompetitor()` - Single competitor
- `scrapeFacebookAds()` - Meta Ad Library API
- `scrapeFacebookPosts()` - Facebook page feed
- `scrapeInstagramPosts()` - Instagram profile feed
- `scrapeInstagramReels()` - Instagram reels (videos)
- `scrapeInstagramAds()` - Meta Ad Library for Instagram
- Error handling & deduplication for all content types

### Analyzer Service
- `analyzeAllUnanalyzedAds()` - Batch analysis
- `analyzeAd()` - Single ad analysis
- `findNewPatterns()` - Pattern detection
- Text analysis: hooks, sentiment, emotions
- Visual analysis: types, themes
- CTA analysis: types, urgency

### Insights Service
- `generateDailyInsight()` - Generate today's intelligence
- `getTodayInsight()` - Retrieve cached insight
- `getInsights()` - Date range queries
- `pushInsightsToMainPlatform()` - Integration

### Jobs
- `dailyScraper` - 2 AM daily
- `analyzeAds` - Every 4 hours
- `generateInsights` - 8 AM daily

### API Endpoints
```
POST /api/nexus/scraper/run
GET  /api/nexus/scraper/stats
POST /api/nexus/analysis/run
POST /api/nexus/insights/generate
GET  /api/nexus/insights/today
GET  /api/nexus/insights/range
GET  /api/nexus/competitors
POST /api/nexus/competitors
GET  /api/nexus/patterns
GET  /api/nexus/patterns/top
GET  /api/nexus/analytics/overview
POST /api/nexus/sync
```

---

# DEPLOYMENT

## Local Development
```bash
docker-compose up -d postgres
npm run db:migrate
npm run db:seed
npm run dev
```

## Production
```bash
docker build -t nexus:latest .
docker run -d -p 3001:3001 --env-file .env nexus:latest
```

---

**Implementation Timeline:** 8 weeks
**Total Cost:** $200-500/month
**Ready to start Phase 1 now**
