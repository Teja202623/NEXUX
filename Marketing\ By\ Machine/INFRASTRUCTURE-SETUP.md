# INFRASTRUCTURE SETUP GUIDE
**Complete system architecture for Phase 2 implementation**

**Document created:** November 15, 2025
**Status:** Ready to implement

---

## EXECUTIVE SUMMARY

To execute Phase 2 (Weeks 1-12), you need infrastructure across 4 layers:

1. **Database Layer** (Prospect, Content, Posts, Analytics)
2. **CRM Layer** (Customer tracking, outreach activities)
3. **Content Generation** (CLI commands, templates, AI integration)
4. **Social Media & Posting** (Platform integrations, scheduler)
5. **Analytics** (Engagement tracking, performance metrics)

**Good news:** You already have 80% of what you need. Your `localrankai` project has:
- ✅ PostgreSQL database (Supabase)
- ✅ Prisma ORM
- ✅ Express.js backend
- ✅ CLI command structure
- ✅ API integrations (OpenAI, DataForSEO, Perplexity)

**What you need to ADD:**
- Database tables (5 new Prisma models)
- Content generator service
- CLI commands (4-5 new commands)
- Social media platform integrations
- Scheduling system (cron jobs)

---

## 1. DATABASE LAYER

### Current State (localrankai)
```
✅ PostgreSQL on Supabase
✅ Prisma ORM
✅ Models: RankingSnapshot, Insight, Task, BusinessProfile, Citation, Review, etc.
```

### What to ADD (5 new Prisma models)

**Model 1: Prospect**
```typescript
model Prospect {
  id              String    @id @default(cuid())
  name            String
  trade           String    // "plumber", "electrician", "locksmith", "hvac"
  email           String?
  phone           String?
  gridHealth      Int       // 0-100 percentage
  criticalGaps    Int       // Number of gaps
  topCompetitor   String?
  revenueImpact   Int?      // dollars/week
  primarySuburb   String?
  suburbs         Json?     // Array of service suburbs
  status          String    @default("active")

  createdAt       DateTime  @default(now())
  generatedPosts  GeneratedPost[]
}
```

**Model 2: GeneratedPost**
```typescript
model GeneratedPost {
  id            String    @id @default(cuid())
  prospectId    String
  prospect      Prospect  @relation(fields: [prospectId], references: [id])

  contentType   String    // "text", "canva", "video"
  platform      String    // "facebook", "instagram", "tiktok", "youtube", "linkedin"

  caption       String    @db.Text
  hashtags      String
  cta           String
  imageUrl      String?
  videoUrl      String?
  videoScript   String?   @db.Text

  status        String    @default("draft") // draft, scheduled, published
  scheduledAt   DateTime?
  publishedAt   DateTime?

  impressions   Int       @default(0)
  engagements   Int       @default(0)

  createdAt     DateTime  @default(now())
  analytics     PostAnalytics[]
}
```

**Model 3: PostAnalytics**
```typescript
model PostAnalytics {
  id          String    @id @default(cuid())
  postId      String
  post        GeneratedPost @relation(fields: [postId], references: [id])

  date        DateTime
  impressions Int
  engagements Int
  clicks      Int
  conversions Int

  createdAt   DateTime  @default(now())

  @@unique([postId, date])
}
```

**Model 4: ContentTheme**
```typescript
model ContentTheme {
  id            String   @id @default(cuid())
  trade         String
  theme         String   // "service_area_gap", "competitor_threat", "local_trend"
  description   String   @db.Text
  postTemplates Json

  @@unique([trade, theme])
}
```

**Model 5: OutreachActivity**
```typescript
model OutreachActivity {
  id            String    @id @default(cuid())
  prospectId    String
  prospect      Prospect  @relation(fields: [prospectId], references: [id])

  type          String    // "email_sent", "call_made", "meeting_scheduled"
  status        String    // "completed", "pending", "failed"
  details       Json?

  createdAt     DateTime  @default(now())
}
```

### Implementation Steps

1. **Update schema.prisma** (5 models added)
   ```bash
   # In backend/prisma/schema.prisma
   # Add the 5 models above
   ```

2. **Create and run migration**
   ```bash
   npx prisma migrate dev --name add_phase2_content_models
   ```

3. **Verify in Prisma Studio**
   ```bash
   npx prisma studio
   ```

---

## 2. CRM LAYER (CUSTOMER TRACKING)

### Customer Management

The existing `BusinessProfile` model in localrankai can serve as your customer record:

```typescript
model BusinessProfile {
  id              String   @id @default(cuid())
  tenantId        String
  name            String
  address         String
  phone           String
  suburb          String?

  // Add new fields for sales tracking
  monthlyRevenue  Int?     // Their revenue (for pricing)
  gridHealth      Int?     // Our analysis
  contractValue   Int      @default(200)   // $200/month
  status          String   @default("prospect") // prospect, customer, churned
  signedDate      DateTime?
  churnedDate     DateTime?

  createdAt       DateTime @default(now())
}
```

### Outreach Tracking

The `OutreachActivity` model tracks all touchpoints:

```typescript
OutreachActivity:
- Email sent to Danzer's (Email: danielzerafa1990@gmail.com)
- Replied to email (11/15, 2pm)
- Call scheduled (11/16, 3pm)
- Call completed (11/16, 3:15pm)
- Proposal sent (11/17)
- Contract signed (11/18)
- Onboarded (11/19)
```

---

## 3. CONTENT GENERATION LAYER

### Overview

Transform prospect data → Content pieces (text, graphics, video)

```
Prospect Database (300-400)
    ↓
Content Generator Service
    ├─ Text Generator CLI
    ├─ Canva Graphics CLI
    ├─ Video Script CLI
    └─ Platform Optimizer
    ↓
GeneratedPost Table (150+ posts)
    ↓
Scheduler
    ↓
Social Media APIs
```

### What You Need

#### A. Content Generator Service
**File:** `backend/src/services/contentGenerator.service.ts`

**Methods:**
```typescript
async generateTextPosts(trade: string, quantity: number)
async generateCanvaGraphics(template: string, quantity: number)
async generateVideoScripts(type: string, quantity: number)
async optimizePostsForPlatform(platform: string, quantity: number)
```

**Input:** Prospect data (grid health, gaps, competitor, suburb)
**Output:** GeneratedPost records in database

#### B. CLI Commands
**Location:** `backend/src/cli/` (new directory)

```bash
# Text generation
npm run cli generate-posts --trade plumber --quantity 50

# Canva graphics
npm run cli generate-canva --template before-after --quantity 30

# Video scripts
npm run cli generate-video-scripts --type tip --quantity 20

# Platform optimization
npm run cli optimize-posts --platform instagram --quantity 50

# Schedule posts
npm run cli schedule-posts --daily 2 --weeks 12
```

#### C. Post Templates (Hard-coded in service)

**Pain post:**
```
"[Trade] in [Suburb]: Here's what you're missing

Out of [N] [trades] we analyzed, [%] weren't showing up
for searches in key service areas.

That means [revenue impact] in lost revenue.

If you're [trade] in [Suburb], are YOU showing up
in all your service suburbs?"
```

**Solution post:**
```
"[Trade] Opportunity in [Suburb]

Your customers ARE searching for '[service] [suburb]'
...they're just finding someone else.

Here's what winning [trades] do:
1. List all service areas on Google
2. Get location-specific reviews
3. Optimize for local search

Result: Show up for ALL service area searches"
```

**Proof/Competitor post:**
```
"How [Competitor] Dominates

We analyzed [N] [trades] in [area].
Here's what the #1 is doing:

[Competitor]:
- Listed in [X] suburbs ✓
- [Y] location-specific reviews ✓
- Grid visibility: [Z]%

Average [trade]:
- Limited suburb coverage
- Generic reviews
- Grid visibility: [Grid Health]%

That's [revenue impact] per month in opportunity."
```

---

## 4. SOCIAL MEDIA INTEGRATION LAYER

### Platform APIs Needed

```
Facebook/Instagram:
  - Facebook Business Account
  - App (create in Meta Developer)
  - Access token
  - Can post to Pages + Instagram via Graph API

TikTok:
  - Business account
  - API access (limited, may need Zapier)
  - Or manual + scheduling tool

YouTube:
  - Creator account
  - API access
  - Post via YouTube Data API

LinkedIn:
  - Creator account
  - API access (limited for organic)
  - Or use Zapier/Buffer

Twitter/X:
  - Developer account
  - API v2 access
  - Post via API
```

### Implementation Options

**Option A: DIY with Platform APIs (Most Control)**
```typescript
// facebook.service.ts
async postToFacebook(post: GeneratedPost)

// instagram.service.ts
async postToInstagram(post: GeneratedPost)

// youtube.service.ts
async scheduleYoutubeShort(post: GeneratedPost)

// tiktok.service.ts (limited API)
async scheduleTikTok(post: GeneratedPost) // Via Zapier webhook
```

**Option B: Use Meta Business Suite** (Recommended for Facebook + Instagram)
```
1. Connect Facebook + Instagram accounts
2. Use Creator Studio or Content Library
3. Export 150 posts to CSV
4. Bulk import all at once
5. Posts schedule automatically
```

**Option C: Use Buffer/Later** (Easiest, Paid)
```
Cost: $15-30/month
Supports: Facebook, Instagram, TikTok, LinkedIn, Twitter
Benefits: Beautiful UI, analytics built-in, queue management
```

### Architecture

```typescript
// backend/src/services/socialMedia.service.ts

export class SocialMediaService {
  async publishPost(post: GeneratedPost, platform: string) {
    switch(platform) {
      case 'facebook':
        return await facebookService.post(post);
      case 'instagram':
        return await instagramService.post(post);
      case 'tiktok':
        return await tiktokService.schedule(post);
      case 'youtube':
        return await youtubeService.schedule(post);
      case 'linkedin':
        return await linkedinService.post(post);
    }
  }

  async syncAnalytics(post: GeneratedPost) {
    // Fetch impressions, engagements, clicks from platform
    // Save to PostAnalytics table
  }
}
```

---

## 5. SCHEDULING SYSTEM

### Cron Jobs Needed

```bash
# Every hour: Publish scheduled posts
0 * * * * npm run schedule:publish

# Daily at 6pm: Fetch analytics from platforms
0 18 * * * npm run analytics:sync

# Weekly: Generate optimization report
0 9 * * 1 npm run analytics:weekly-report
```

### Implementation

**File:** `backend/src/jobs/scheduledPostPublishing.job.ts`

```typescript
import cron from 'node-cron';
import { prisma } from '../lib/prisma';
import { socialMediaService } from '../services/socialMedia.service';

export function setupScheduledPostJobs() {
  // Publish posts every hour
  cron.schedule('0 * * * *', async () => {
    const postsToPublish = await prisma.generatedPost.findMany({
      where: {
        status: 'scheduled',
        scheduledAt: { lte: new Date() }
      }
    });

    for (const post of postsToPublish) {
      try {
        await socialMediaService.publishPost(post, post.platform);
        await prisma.generatedPost.update({
          where: { id: post.id },
          data: {
            status: 'published',
            publishedAt: new Date()
          }
        });
      } catch (error) {
        logger.error(`Failed to publish post ${post.id}:`, error);
      }
    }
  });

  // Sync analytics daily
  cron.schedule('0 18 * * *', async () => {
    const publishedPosts = await prisma.generatedPost.findMany({
      where: { status: 'published' }
    });

    for (const post of publishedPosts) {
      const metrics = await socialMediaService.fetchMetrics(post);
      await prisma.postAnalytics.create({
        data: {
          postId: post.id,
          date: new Date(),
          impressions: metrics.impressions,
          engagements: metrics.engagements,
          clicks: metrics.clicks,
          conversions: metrics.conversions
        }
      });
    }
  });
}
```

---

## 6. ANALYTICS LAYER

### Metrics to Track

**Per Post:**
- Impressions (reach)
- Engagements (likes + comments + shares)
- Clicks (to landing page)
- Conversions (email captures, meetings booked)
- Engagement rate = engagements / impressions
- Cost per engagement = ad spend / engagements

**Aggregated:**
- By platform (which platform performs best?)
- By content type (text vs graphics vs video?)
- By trade (plumber vs electrician?)
- By theme (competitor analysis vs tips?)
- Weekly trends

### Dashboard

Simple dashboard showing:
```
Posts Published: 150
Average Engagement: 5.2%
Best Performer: [Post title] (12% engagement)
Platform Breakdown:
  - Facebook: 45 posts, 4.8% engagement
  - Instagram: 50 posts, 6.2% engagement
  - TikTok: 30 posts, 7.1% engagement
  - YouTube: 25 posts, 3.4% engagement
```

---

## IMPLEMENTATION TIMELINE

### Phase 2 Weeks 1-2 (This week)

**To Start Immediately:**
1. ✅ Add 5 Prisma models to schema
2. ✅ Run migration (`prisma migrate dev`)
3. ⚠️ Create ContentGeneratorService class
4. ⚠️ Build 4-5 CLI commands

**What I've Already Done:**
- ✅ Added Prospect, GeneratedPost, PostAnalytics, ContentTheme models to schema.prisma
- 📝 Ready to create ContentGeneratorService

**What You Need to Do:**
- Run the Prisma migration
- Verify migration worked (npx prisma studio)
- Confirm the 4 models exist in your database

### Phase 2 Weeks 3-4

**Build:**
- CLI commands (generate-posts, optimize-posts, etc.)
- Content generator logic
- Test with 50 prospects

### Phase 2 Weeks 5-6

**Build:**
- Canva API integration
- Graphics generation
- Database storage

### Phase 2 Weeks 7-8

**Build:**
- Video script generation
- Video outline templates

### Phase 2 Weeks 9-10

**Build:**
- Social media platform integrations
- Scheduling system (cron jobs)
- Analytics sync

### Phase 2 Weeks 11-12

**Execute:**
- Generate 150+ posts
- Schedule them
- Launch posting
- Monitor engagement

---

## TECHNOLOGY STACK

```
Frontend: N/A (CLI-based, no UI needed yet)

Backend: Node.js / Express.js (already have)

Database:
  - PostgreSQL (Supabase) ✅
  - Prisma ORM ✅
  - 5 new tables ➕

APIs:
  - OpenAI / Perplexity (text generation) ✅
  - Canva API (graphics) ➕
  - Facebook Graph API (posting) ➕
  - Instagram API (posting) ➕
  - TikTok API (limited, Zapier fallback) ➕
  - YouTube API (scheduling) ➕
  - LinkedIn API (posting) ➕

Scheduling:
  - node-cron (job scheduling) ➕
  - Bull Queue (optional, for reliability) ➕

Analytics:
  - PostAnalytics table (custom) ✅

CLI:
  - Commander.js or yargs (CLI parsing) ➕
  - Already have CLI structure in localrankai ✅
```

---

## COST BREAKDOWN

| Component | Cost | Notes |
|-----------|------|-------|
| Database | $0 | Already included in localrankai |
| SendGrid | $20/mo | For email |
| Canva Pro | $0 | You already have |
| Canva API | $0 | Included with Pro |
| API costs | $0-100/mo | OpenAI, video gen (optional) |
| Hosting | $0 | Vercel/Railway already hosting |
| Platform APIs | $0 | Facebook, Instagram, YouTube free |
| **Total** | **$20-120/mo** | |

---

## QUICK START CHECKLIST

### Phase 2 Weeks 1-2 (Starting Now)

- [ ] Add 5 Prisma models to `backend/prisma/schema.prisma`
- [ ] Run `npx prisma migrate dev --name add_phase2_models`
- [ ] Verify in `npx prisma studio` (4 new models visible)
- [ ] Create `backend/src/services/contentGenerator.service.ts`
- [ ] Build 4 CLI commands:
  - [ ] `generate-posts`
  - [ ] `generate-canva`
  - [ ] `generate-video-scripts`
  - [ ] `optimize-posts`
- [ ] Test with 10 prospects
- [ ] Generate first 30 posts

### Phase 2 Weeks 3-4

- [ ] Finalize text generation
- [ ] Test content on 50 prospects
- [ ] Document best post templates
- [ ] Get Canva API token

### Phase 2 Weeks 5-6

- [ ] Integrate Canva API
- [ ] Create 5 graphic templates
- [ ] Generate 30-40 Canva posts
- [ ] Test graphics display

### Phase 2 Weeks 7-8

- [ ] Build video script generator
- [ ] Generate 20-30 video outlines
- [ ] Document video templates

### Phase 2 Weeks 9-10

- [ ] Connect to Meta/Facebook API
- [ ] Test posting to Facebook
- [ ] Connect Instagram API
- [ ] Build scheduling system (cron)
- [ ] Test scheduled posts

### Phase 2 Weeks 11-12

- [ ] Generate 150+ posts total
- [ ] Schedule all posts
- [ ] Launch posting automation
- [ ] Set up analytics tracking
- [ ] Monitor engagement

---

## NEXT STEPS

**Immediate Action:**

1. **Confirm you want to use Option B (Meta Business Suite)** for Facebook/Instagram posting
   - Easier than building custom integrations
   - Can bulk import 150 posts
   - Built-in analytics

2. **Or Confirm Option C (Buffer)** if you want a third-party tool
   - $15-30/month
   - Beautiful UI
   - Multi-platform support

3. **Get Canva API token**
   - Log into Canva Pro account
   - Go to Developer settings
   - Generate API token (in .env)

4. **Create Prospect data**
   - Expand from 25 to 300-400
   - Run grid analysis on each
   - Load into Prospect table

5. **Start building ContentGeneratorService**
   - I can create the full service
   - You integrate it
   - Test with 10 prospects

Which option should we go with for social posting?
- **Option A:** DIY with platform APIs (most control, more work)
- **Option B:** Meta Business Suite (easiest, Facebook + Instagram only)
- **Option C:** Buffer (paid, all platforms, easiest UI)

---

**Status:** READY TO IMPLEMENT
**Created:** November 15, 2025
**Version:** 1.0
