# PHASE 2: COMPLETE IMPLEMENTATION GUIDE
**Option B: Meta Business Suite + Content Generator CLI**

**Status:** Ready to execute
**Created:** November 15, 2025
**Duration:** Weeks 1-12 (12 weeks, 80 hours total)

---

## EXECUTIVE SUMMARY

**Goal:** Build content automation system to generate 150+ posts while running Phase 1 cold email.

**Approach:**
1. Add 5 Prisma models to database (Weeks 1-2)
2. Build ContentGeneratorService + CLI commands (Weeks 3-6)
3. Connect to Canva API for graphics (Weeks 5-6)
4. Create video script generator (Weeks 7-8)
5. Generate 150+ posts (Weeks 9-10)
6. Use Meta Business Suite to bulk import + schedule (Weeks 11-12)

**Tech Stack:**
- PostgreSQL + Prisma (existing)
- ContentGeneratorService (custom)
- Canva API (graphics)
- Meta Business Suite (posting/scheduling)
- Node.js CLI commands (automation)

**Cost:** $20/month (SendGrid only, Canva API free)

---

## WEEK-BY-WEEK BREAKDOWN

### WEEKS 1-2: DATABASE + PROSPECT RESEARCH (12 hours)

#### Task 1.1: Add Prisma Models (2 hours)

**File:** `backend/prisma/schema.prisma`

Add these 5 models to the end of your schema:

```prisma
// PHASE 2: CONTENT AUTOMATION SYSTEM

model Prospect {
  id                String      @id @default(cuid())
  name              String
  trade             String      // "plumber", "electrician", "locksmith", "hvac"
  email             String?
  phone             String?
  website           String?
  googleRank        Int?
  reviewCount       Int         @default(0)
  rating            Float       @default(0)

  // Grid Analysis Data
  gridHealth        Int         // 0-100
  criticalGaps      Int         // gaps count
  highPriority      Int         // close to top 3
  defendingAreas    Int         // already strong
  topCompetitor     String?
  competitorHealth  Int?
  revenueImpact     Int?        // $/week they're losing

  // Location
  primarySuburb     String?
  suburbs           String?     // JSON array
  localTrends       String?     // JSON insights
  uniqueOpportunity String?

  status            String      @default("active")
  createdAt         DateTime    @default(now())
  updatedAt         DateTime    @updatedAt

  generatedPosts    GeneratedPost[]

  @@index([trade])
  @@index([gridHealth])
  @@unique([name, trade])
}

model GeneratedPost {
  id            String    @id @default(cuid())
  prospectId    String
  prospect      Prospect  @relation(fields: [prospectId], references: [id], onDelete: Cascade)

  contentType   String    // "text", "canva", "video"
  platform      String    // "facebook", "instagram"
  caption       String    @db.Text
  hashtags      String    // space-separated
  cta           String
  imageUrl      String?   // Canva graphics URL
  videoUrl      String?
  videoScript   String?   @db.Text

  status        String    @default("draft") // draft, scheduled, published
  scheduledAt   DateTime?
  publishedAt   DateTime?

  impressions   Int       @default(0)
  engagements   Int       @default(0)
  clicks        Int       @default(0)
  conversions   Int       @default(0)

  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  analytics     PostAnalytics[]

  @@index([status])
  @@index([platform])
  @@index([contentType])
  @@index([scheduledAt])
}

model PostAnalytics {
  id          String    @id @default(cuid())
  postId      String
  post        GeneratedPost @relation(fields: [postId], references: [id], onDelete: Cascade)

  date        DateTime
  impressions Int
  engagements Int
  clicks      Int
  conversions Int
  ctr         Float?
  cpc         Float?

  createdAt   DateTime  @default(now())

  @@unique([postId, date])
  @@index([postId])
}

model ContentTheme {
  id            String   @id @default(cuid())
  trade         String
  theme         String   // "service_area_gap", "competitor_threat", "local_trend"
  description   String   @db.Text
  exampleInsight String  @db.Text
  postTemplates Json     // Array of template structures

  createdAt     DateTime @default(now())

  @@unique([trade, theme])
}

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

#### Task 1.2: Run Prisma Migration (1 hour)

```bash
# From backend directory
cd backend

# Create and apply migration
npx prisma migrate dev --name add_phase2_content_models

# Verify it worked
npx prisma studio
# You should see 5 new models: Prospect, GeneratedPost, PostAnalytics, ContentTheme, OutreachActivity
```

#### Task 1.3: Expand Prospect Research (9 hours)

**Current state:** 25 Tier-1 plumbers

**Expand to 300-400 across 4 trades:**
- Plumbers: 25 → 120 total (add 95)
- Electricians: 0 → 100
- Locksmiths: 0 → 60
- HVAC: 0 → 60
- **Total: 340 prospects**

**Research process (same as before):**
```
For each trade:
1. Google Maps search "[trade] [suburb]"
2. Filter: 30+ reviews, 4.5+ rating
3. Extract: name, owner, email, phone, Google rank
4. Run grid analysis through your tool
5. Record: grid health %, gaps, competitors, suburbs
```

**Estimated time per trade:**
- Plumbers (95 new): 2-3 hours
- Electricians (100): 2-3 hours
- Locksmiths (60): 1.5 hours
- HVAC (60): 1.5 hours
- **Total: 8-9 hours**

**Output:** CSV or JSON file with 340 prospects:
```
name, trade, email, phone, gridHealth, criticalGaps, topCompetitor, competitorHealth, primarySuburb, revenueImpact
```

**Then seed database:**
```bash
# You'll create a seed script to load all 340 into Prospect table
node backend/prisma/seed.ts
```

---

### WEEKS 3-4: TEXT CONTENT GENERATOR (20 hours)

#### Task 3.1: Create ContentGeneratorService (12 hours)

**File:** `backend/src/services/contentGenerator.service.ts`

This service converts prospect data → text posts

**Key methods:**
```typescript
export class ContentGeneratorService {
  // Generate pain/solution/proof posts from prospect
  async generateTextPosts(trade: string, quantity: number)

  // Optimize captions + hashtags for each platform
  async optimizePostsForPlatform(platform: string, quantity: number)

  // Create Canva graphics (Week 5)
  async generateCanvaGraphics(template: string, quantity: number)

  // Create video scripts (Week 7)
  async generateVideoScripts(type: string, quantity: number)

  // Private helpers
  private generatePainPost(prospect)      // "You're missing suburbs"
  private generateSolutionPost(prospect)  // "Here's how to fix it"
  private generateProofPost(prospect)     // "Here's who's winning"
}
```

**Post template examples:**

**Pain Post:**
```
"[TRADE] in [SUBURB]: Here's what you're missing

Out of [N] [trades] we analyzed in [area],
[%] weren't showing up for searches in [gap suburbs].

That means they're losing [revenue impact] per week.
That's [annual impact] in revenue walking out the door.

Why? Simple:
- Not listed in those suburbs on Google
- No location-specific reviews
- Competitors ARE showing up

If you're a [trade] in [area]:
Are YOU showing up in all your service suburbs?"
```

**Solution Post:**
```
"[TRADE] Opportunity in [GAP SUBURB]

Your customers ARE searching for '[service] [suburb]'
...they're just finding someone else.

Here's what winning [trades] do:
1. List all service areas on Google (not just main location)
2. Get location-specific reviews ('[service] in [suburb]')
3. Optimize for local search (takes 30 days)

Result: Show up for ALL service area searches

The best time to start? 30 days ago.
The second best time? Today."
```

**Proof Post:**
```
"How [COMPETITOR] Dominates in [AREA]

We analyzed [N] [trades] in [area].
Here's what the #1 is doing differently:

[COMPETITOR]:
- Listed in [X] suburbs ✓
- [Y] location-specific reviews ✓
- Google visibility: [Z]%

Average [trade] in area:
- Listed in [A] suburbs
- [B] location-specific reviews
- Google visibility: [grid health]%

The gap? [C] suburbs worth of lost leads.
That's $[revenue impact] per month in opportunity.

How many suburbs are YOU missing?"
```

#### Task 3.2: Create CLI Commands (8 hours)

**File:** `backend/src/cli/contentGenerator.cli.ts`

```bash
# Command 1: Generate text posts
npm run cli generate-posts --trade plumber --quantity 50

# Command 2: Optimize for platform
npm run cli optimize-posts --platform facebook --quantity 50
npm run cli optimize-posts --platform instagram --quantity 50

# Command 3: Generate Canva graphics (Week 5)
npm run cli generate-canva --template before-after --quantity 15

# Command 4: Generate video scripts (Week 7)
npm run cli generate-video-scripts --type tip --quantity 20

# Command 5: Schedule posts (Week 11)
npm run cli schedule-posts --daily 2-3 --weeks 12
```

**Implementation:**
```typescript
// Example: generate-posts command
program
  .command('generate-posts')
  .option('--trade <trade>', 'plumber, electrician, locksmith, hvac')
  .option('--quantity <qty>', 'number of posts to generate')
  .action(async (options) => {
    const service = new ContentGeneratorService();
    await service.generateTextPosts(options.trade, options.quantity);
    console.log(`Generated ${options.quantity} posts for ${options.trade}`);
  });
```

---

### WEEKS 5-6: CANVA GRAPHICS INTEGRATION (20 hours)

#### Task 5.1: Get Canva API Access (1 hour)

1. Go to [https://www.canva.com/developers/](https://www.canva.com/developers/)
2. Log in with your Canva Pro account
3. Create app
4. Get API token
5. Add to `.env`:
```
CANVA_API_KEY=your_api_token_here
```

#### Task 5.2: Create 5 Canva Templates (5 hours)

In your Canva Pro account, create these templates:

**Template 1: Before/After**
- Size: 1080x1080 (Instagram square)
- Left side: Red/negative (before)
- Right side: Green/positive (after)
- Text placeholders: [BEFORE_VALUE], [AFTER_VALUE], [CTA]
- Example: "Before: 40% Grid Health | After: 68% Grid Health"

**Template 2: Stats Infographic**
- Size: 1080x1080
- Layout: 3-4 stats vertically
- Placeholders: [STAT1], [STAT2], [STAT3], [HEADLINE]
- Example: "63% of plumbers missing 5+ suburbs | $1,000+/week opportunity"

**Template 3: Competitor Comparison**
- Size: 1200x628 (Facebook)
- Layout: Side-by-side comparison
- Placeholders: [YOUR_NAME], [COMPETITOR], [METRIC1], [METRIC2]
- Example: "You vs Titan Plumbing | Grid Health Comparison"

**Template 4: Testimonial**
- Size: 1080x1080
- Quote + name + result
- Placeholders: [QUOTE], [NAME], [RESULT]
- Example: "Added 3 suburbs, got 8 extra calls/week"

**Template 5: Local Trend**
- Size: 1080x1920 (Instagram story)
- Chart + headline + insight
- Placeholders: [TREND], [DATA], [INSIGHT]
- Example: "Werribee population up 15%+ this year"

**Note these Canva template IDs** - you'll need them in code

#### Task 5.3: Add generateCanvaGraphics() to ContentGeneratorService (10 hours)

```typescript
async generateCanvaGraphics(template: string, quantity: number) {
  // 1. Get Canva API client
  // 2. Get prospects for this trade
  // 3. For each prospect:
  //    - Map prospect data to template variables
  //    - Call Canva API: createDesign()
  //    - Export design as PNG
  //    - Save URL to GeneratedPost table
  // 4. Return count of graphics created
}
```

**Canva API Flow:**
```
Prospect data (gridHealth: 40, competitor: "Titan", competitorHealth: 68)
    ↓
Template variables { beforeValue: "40%", afterValue: "68%", ... }
    ↓
Canva API: createDesign(templateId, variables)
    ↓
Download PNG from Canva
    ↓
Save to GeneratedPost table with imageUrl
```

#### Task 5.4: Create CLI for Canva Graphics (4 hours)

```bash
npm run cli generate-canva --template before-after --quantity 15
npm run cli generate-canva --template stats-infographic --quantity 10
npm run cli generate-canva --template competitor-compare --quantity 8
npm run cli generate-canva --template testimonial --quantity 3
npm run cli generate-canva --template local-trend --quantity 1
```

**Output:** 37 Canva graphics ready for posting

---

### WEEKS 7-8: VIDEO SCRIPT GENERATION (16 hours)

#### Task 7.1: Create Video Script Templates (4 hours)

**Video Type 1: Tip (15 seconds)**
```
[Hook - 3s] "Your [trade] is leaving money on the table."
[Problem - 5s] "You're only showing up in [suburb], but customers search in [X] other suburbs."
[Solution - 5s] "Add those suburbs to your Google profile."
[Result - 2s] "[Trades] doing this get 2-4 extra calls/week."
```

**Video Type 2: Transformation (20 seconds)**
```
[Before - 5s] "Grid Health: [40%] | Calls/week: [3-4]"
[Transformation - 10s] "Added suburbs + reviews + optimization"
[After - 5s] "Grid Health: [65%+] | Calls/week: [6-8]"
```

**Video Type 3: Competitor Analysis (20 seconds)**
```
[Setup - 5s] "We analyzed [trade]s in [area]."
[Analysis - 10s] "[Competitor]: [Grid Health]% | You: [Grid Health]%"
[Question - 5s] "The gap is [X] suburbs. That's $[Y]/month in opportunity."
```

#### Task 7.2: Add generateVideoScripts() to ContentGeneratorService (8 hours)

```typescript
async generateVideoScripts(type: string, quantity: number) {
  // 1. Get prospects
  // 2. For each prospect:
  //    - Generate script based on template
  //    - Add visual cues ([Hook - 3s], [Problem - 5s])
  //    - Save to GeneratedPost.videoScript field
  // 3. Return count of scripts created
}
```

#### Task 7.3: Create CLI for Video Scripts (4 hours)

```bash
npm run cli generate-video-scripts --type tip --quantity 12
npm run cli generate-video-scripts --type transformation --quantity 8
npm run cli generate-video-scripts --type competitor --quantity 3
```

**Output:** 23 video scripts ready for manual creation

**Note:** You won't auto-generate videos yet. Scripts are ready for you to:
- Use Synthesia free trial to generate 5-10 videos, OR
- Create video carousels in Canva from scripts

---

### WEEKS 9-10: GENERATE 150+ POSTS AT SCALE (12 hours)

#### Task 9.1: Run Content Generators (8 hours)

**Step 1: Generate Text Posts**
```bash
npm run cli generate-posts --trade plumber --quantity 30
npm run cli generate-posts --trade electrician --quantity 25
npm run cli generate-posts --trade locksmith --quantity 20
npm run cli generate-posts --trade hvac --quantity 15

# Total: 90 text posts
```

**Step 2: Optimize for Platforms**
```bash
npm run cli optimize-posts --platform facebook --quantity 50
npm run cli optimize-posts --platform instagram --quantity 40

# Total: 90 text posts, each optimized for platform
```

**Step 3: Generate Canva Graphics**
```bash
npm run cli generate-canva --template before-after --quantity 15
npm run cli generate-canva --template stats-infographic --quantity 10
npm run cli generate-canva --template competitor-compare --quantity 8
npm run cli generate-canva --template testimonial --quantity 3
npm run cli generate-canva --template local-trend --quantity 1

# Total: 37 Canva graphics
```

**Step 4: Generate Video Scripts**
```bash
npm run cli generate-video-scripts --type tip --quantity 12
npm run cli generate-video-scripts --type transformation --quantity 8
npm run cli generate-video-scripts --type competitor --quantity 3

# Total: 23 video scripts
```

**Grand Total: 150+ posts**
- 90 text posts
- 37 Canva graphics
- 23 video scripts

#### Task 9.2: Export for Meta Business Suite (4 hours)

Create CSV export from GeneratedPost table:

```csv
caption,image_url,platform,hashtags,cta,status
"[TRADE] in [SUBURB]...",https://canva.com/...,facebook,"#LocalSEO #Plumber #Werribee",Learn how →,draft
...
```

**File:** `posts_for_meta.csv` (150 rows)

---

### WEEKS 11-12: META BUSINESS SUITE + LAUNCH (10 hours)

#### Task 11.1: Set Up Meta Business Suite (2 hours)

1. Go to [https://business.facebook.com/](https://business.facebook.com/)
2. Log in with your Facebook account
3. Select/Create business account
4. Add your Facebook Page and Instagram account
5. Verify ownership

#### Task 11.2: Prepare Posts in Meta (3 hours)

**Option A: Bulk Import CSV (Recommended)**
1. Open Meta Business Suite
2. Go to Content Library or Creator Studio
3. Select "Bulk Upload" or "Import Posts"
4. Upload `posts_for_meta.csv`
5. Meta will create drafts for all 150 posts
6. Review and schedule

**Option B: Manual Scheduling (If bulk doesn't work)**
1. Create spreadsheet with all 150 posts
2. Manually add to Meta Business Suite
3. Schedule each post

#### Task 11.3: Schedule Posts (3 hours)

**Scheduling strategy:**
- Daily posts: 2-3 per day
- Posting times:
  - 9:00 AM (morning audience)
  - 1:00 PM (lunch scroll)
  - 6:00 PM (evening, optional)
- Mix content types:
  - Day 1: Text post (Facebook) + Canva graphic (Instagram)
  - Day 2: Canva graphic (Facebook) + Video script promo (Instagram)
  - Day 3: Text post (TikTok) + Canva (Instagram)
  - Repeat pattern

**Timeline:** 60 days of scheduled posts
- 150 posts ÷ 2-3 per day = 50-75 days
- Covers Weeks 11-12 + extends into Month 4

**Result by Week 12:**
- ✅ 150+ posts scheduled
- ✅ 2-3 posts/day going live
- ✅ Consistent social media presence
- ✅ Audience building
- ✅ Authority establishing

#### Task 11.4: Monitor Engagement (2 hours/week)

Each week, check:
- Impressions per post
- Engagement rate (%)
- Top performing content
- Which platforms work best
- Which content types win

**Document in spreadsheet:**
```
Date | Post | Platform | Impressions | Engagements | % Engagement | Notes
```

---

## COMPLETE IMPLEMENTATION CHECKLIST

### Weeks 1-2 (Database + Research)
- [ ] Add 5 Prisma models to schema.prisma
- [ ] Run `npx prisma migrate dev --name add_phase2_content_models`
- [ ] Verify in Prisma Studio (5 new models visible)
- [ ] Research 300-400 prospects (120 plumbers, 100 electricians, 60 locksmiths, 60 HVAC)
- [ ] Create CSV with prospect data
- [ ] Seed database: `node backend/prisma/seed.ts`
- [ ] Verify 340+ prospects in Prospect table

### Weeks 3-4 (Text Generator)
- [ ] Create ContentGeneratorService
- [ ] Implement generateTextPosts() method
- [ ] Create CLI command: generate-posts
- [ ] Test with 10 plumbers (30 posts)
- [ ] Implement optimizePostsForPlatform() method
- [ ] Create CLI command: optimize-posts
- [ ] Test platform optimization (90 text posts total)

### Weeks 5-6 (Canva Integration)
- [ ] Get Canva API token, add to .env
- [ ] Create 5 Canva templates in Canva Pro account
- [ ] Note template IDs
- [ ] Implement generateCanvaGraphics() method
- [ ] Create CLI command: generate-canva
- [ ] Test with 5 prospects (15 graphics)
- [ ] Generate 37 graphics from all trades

### Weeks 7-8 (Video Scripts)
- [ ] Create 3 video script templates
- [ ] Implement generateVideoScripts() method
- [ ] Create CLI command: generate-video-scripts
- [ ] Test with 5 prospects (15 scripts)
- [ ] Generate 23 video scripts total

### Weeks 9-10 (Generate at Scale)
- [ ] Generate 90 text posts (all trades)
- [ ] Optimize 90 posts for Facebook + Instagram
- [ ] Generate 37 Canva graphics
- [ ] Generate 23 video scripts
- [ ] Export to CSV: posts_for_meta.csv
- [ ] Verify 150+ posts in database
- [ ] Review quality of generated content

### Weeks 11-12 (Meta Business Suite + Launch)
- [ ] Set up Meta Business Suite account
- [ ] Connect Facebook Page and Instagram
- [ ] Bulk import posts to Meta (or manual upload)
- [ ] Schedule all 150+ posts (60 days of content)
- [ ] Verify posts are scheduled to go live
- [ ] Set up weekly monitoring routine
- [ ] Track engagement metrics
- [ ] Document best-performing content types

---

## OUTPUT BY WEEK 12

**Database:**
- ✅ 340 prospects in Prospect table
- ✅ 150+ posts in GeneratedPost table
- ✅ Analytics framework ready (PostAnalytics table)

**Code:**
- ✅ ContentGeneratorService (complete)
- ✅ 5 CLI commands working
- ✅ Canva API integration
- ✅ Video script generation

**Social Media:**
- ✅ 150+ posts scheduled in Meta Business Suite
- ✅ 60 days of content ready to publish
- ✅ 2-3 posts/day going live
- ✅ Audience building (100-200+ followers expected)
- ✅ Engagement tracking in place

**Combined with Phase 1:**
- ✅ 10-15 customers from cold email (Phase 1)
- ✅ 150+ posts building authority (Phase 2)
- ✅ $2,000-3,000 MRR from sales
- ✅ Foundation ready for Phase 3 paid ads (30-50% lower CPM)

---

## NEXT STEPS - START NOW

**Immediate action (This week):**

1. **Add Prisma models** (2 hours)
   - Copy 5 models into schema.prisma
   - Run migration

2. **Start prospect research** (8-9 hours)
   - Expand from 25 to 340
   - Gather grid data for each
   - Prepare CSV

3. **Create seed script** (1 hour)
   - Load 340 prospects into database

By end of Weeks 1-2, you should have:
- ✅ 5 new database tables
- ✅ 340 prospects loaded
- ✅ Ready to start building ContentGeneratorService

Ready to start?

---

**Status:** READY TO IMPLEMENT
**Approach:** Option B (Meta Business Suite)
**Timeline:** 12 weeks (80 hours total, 6-7 hours/week)
**Cost:** $20/month (SendGrid only)
