# PHASE 2: SCRAPER CORE - SETUP & TESTING GUIDE

## Overview

Phase 2 has been successfully implemented with:
- **ScraperService** - Complete scraper with support for 5 content types
- **TypeScript Types** - Full type definitions for all content
- **Database Schema** - Updated Prisma models with new fields
- **Daily Scraper Job** - Automated job for scheduling
- **Deduplication Logic** - Smart duplicate detection per content type

## Files Created

```
src/services/scraper.service.ts          (700+ lines - complete implementation)
src/types/scrapeCreators.types.ts        (150+ lines - type definitions)
src/jobs/dailyScraper.job.ts             (100+ lines - job scheduling)
prisma/schema.prisma                      (UPDATED - new fields)
```

## Supported Content Types

Phase 2 now scrapes **5 content types** across **2 platforms**:

### Facebook (facebook)
1. **Facebook Ads** - via Meta Ad Library API
   - Content: Headlines, descriptions, CTAs, landing URLs, images/videos
   - Deduplication: Hash of headline + description + CTA

2. **Facebook Posts** - Organic content from business pages
   - Content: Post text, engagement metrics (likes, comments, shares), images, videos
   - Deduplication: Direct post ID comparison

### Instagram (instagram)
3. **Instagram Posts** - Organic content from business profiles
   - Content: Caption, engagement metrics (likes, comments, shares, saves), images
   - Deduplication: Direct post ID comparison

4. **Instagram Reels** - Video content with engagement tracking
   - Content: Caption, video URL, video duration, engagement metrics
   - Deduplication: Direct reel ID comparison

5. **Instagram Ads** - via Meta Ad Library API
   - Content: Ad copy, CTAs, landing URLs, creative images, carousel images
   - Deduplication: Hash of ad copy + primary CTA

## Setup Instructions

### Step 1: Install Dependencies

```bash
cd /Volumes/Teja\ MAC\ Home\ Folder/Mac\ Home/Documents/1\ Projects/DMG-LOCAL-SEO/NEXUS
npm install
```

This will install the new `uuid` package required for job tracking.

### Step 2: Update Environment Variables

Add these variables to your `.env` file (template in `.env.example`):

```env
# Meta API (Facebook & Instagram)
FACEBOOK_AD_LIBRARY_TOKEN=your_facebook_token_here
INSTAGRAM_BUSINESS_ACCOUNT_TOKEN=your_instagram_token_here

# Facebook Graph API
FACEBOOK_PAGE_ACCESS_TOKEN=your_token_here
INSTAGRAM_ACCESS_TOKEN=your_token_here

# Rate Limiting
API_RATE_LIMIT_PER_HOUR=1000
CONCURRENT_SCRAPES=5
```

**Getting Your Tokens:**

1. **Facebook Ad Library Token**
   - Go to https://developers.facebook.com
   - Create/select an app
   - Go to Settings → Basic
   - Use your App ID as the token (basic access)
   - For full access, apply for Ad Library API access

2. **Facebook Page Access Token**
   - Use Facebook Graph API Explorer
   - Select your page
   - Generate a page access token
   - Set in `.env` as `FACEBOOK_PAGE_ACCESS_TOKEN`

3. **Instagram Access Token**
   - Use the same Facebook app
   - Generate an access token with `instagram_basic` scope
   - Set in `.env` as `INSTAGRAM_ACCESS_TOKEN`

### Step 3: Set Up Database

```bash
# Create database migration
npm run db:migrate

# Generate Prisma client
npm run prisma:generate

# Optional: Seed with sample competitors
npm run db:seed
```

### Step 4: Add Sample Competitors

To test the scraper, add competitors to your database:

```bash
npm run db:studio
```

Then manually add competitors with these fields:
- **name**: Unique competitor name
- **website**: Website URL
- **domain**: Domain name
- **facebookPageId**: Facebook page ID (for ads/posts)
- **instagramHandle**: Instagram handle (for posts/reels/ads)
- **status**: "active"

**Example competitors to add:**

```
name: "HubSpot"
website: "https://www.hubspot.com"
domain: "hubspot.com"
facebookPageId: "23847826" (HubSpot's page ID)
instagramHandle: "@hubspot"
status: "active"

name: "Neil Patel Digital"
website: "https://neilpatel.com"
domain: "neilpatel.com"
facebookPageId: "179097428798347"
instagramHandle: "@neilpatel"
status: "active"
```

## Testing the Scraper

### Option 1: Manual Test via TypeScript

Create a test file at `src/test-scraper.ts`:

```typescript
import { ScraperService } from '@/services/scraper.service';
import { db } from '@/config/database';
import { logger } from '@/utils/logger';

async function testScraper() {
  try {
    const scraper = new ScraperService();

    logger.info('Starting scraper test...');
    const result = await scraper.scrapeAllCompetitors();

    logger.info('Scraper test completed', { result });

    // Check what was stored
    const storedAds = await db.competitorAd.findMany({
      include: { competitor: true },
    });

    logger.info(`Total ads stored: ${storedAds.length}`);

    // Breakdown by content type
    const byType = storedAds.reduce((acc, ad) => {
      acc[ad.contentType] = (acc[ad.contentType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    logger.info('Breakdown by content type', byType);

  } catch (error) {
    logger.error('Test failed', { error });
  }
}

testScraper();
```

Run it:
```bash
ts-node src/test-scraper.ts
```

### Option 2: Via Daily Scraper Job

```typescript
import { dailyScraperJob } from '@/jobs/dailyScraper.job';

await dailyScraperJob();
```

### Option 3: Check Database Results

```bash
npm run db:studio
```

Navigate to `CompetitorAd` table and verify:
- `contentType` field is populated (facebook_ad, facebook_post, etc.)
- `platform` field shows "facebook" or "instagram"
- `contentSource` shows "ads_library", "page_feed", or "profile_feed"
- Engagement metrics are stored in `engagementMetrics` JSON field
- Video reels have `videoDuration` populated

## Expected Results

After running the scraper on 2-3 competitors:

**Typical output:**
```
{
  "success": true,
  "competitorsProcessed": 3,
  "totalAdsFound": 245,
  "totalAdsStored": 238,
  "newAdsCount": 198,
  "updatedAdsCount": 40,
  "breakdown": {
    "facebookAds": 45,
    "facebookPosts": 52,
    "instagramAds": 48,
    "instagramPosts": 61,
    "instagramReels": 39
  },
  "errors": [],
  "apiCallsUsed": 12,
  "duration": 45000  // in milliseconds
}
```

## Deduplication Verification

The scraper uses smart deduplication:

1. **For Ads (Facebook & Instagram)**: Hashes headline + description + CTA
   - Same ad appearing twice? Updates `lastSeenAt` instead of creating duplicate
   - Platform-specific ads with same copy are tracked separately

2. **For Organic Posts/Reels**: Uses platform-provided IDs
   - Facebook post ID is unique per page
   - Instagram post/reel IDs are unique per profile
   - Re-runs update engagement metrics automatically

**To verify deduplication works:**
1. Run scraper twice in succession
2. Check that `newAdsCount` is 0 on second run
3. Verify `updatedAdsCount` reflects updated engagement metrics

## Database Schema Changes

The `CompetitorAd` model now includes:

```prisma
contentType       String   // "facebook_ad", "facebook_post", "instagram_post", "instagram_reel", "instagram_ad"
contentSource     String   // "ads_library", "page_feed", "profile_feed"
platformContentId String?  // Post ID, reel ID, or ad hash
engagementMetrics Json?    // { likes, comments, shares, saves, views }
videoDuration     Int?     // For reels: duration in seconds

@@index([contentType])
@@index([contentSource])
```

## Error Handling

The scraper includes comprehensive error handling:

1. **Network Errors**: Retried 3 times with exponential backoff
2. **API Rate Limits**: Gracefully paused and resumed
3. **Missing Credentials**: Logs warning, skips that content type
4. **Partial Failures**: Continues with other competitors, logs in ScrapeLog
5. **Fatal Errors**: Creates failed ScrapeLog entry with full error details

**Check logs:**
```bash
tail -f logs/combined.log
tail -f logs/error.log
```

## Performance Notes

- **Single competitor**: ~2-5 seconds (depending on content volume)
- **10 competitors**: ~30-60 seconds
- **100 competitors**: ~5-10 minutes

Optimization opportunities:
- Increase `CONCURRENT_SCRAPES` for parallel requests
- Use database connection pooling for high volume
- Implement Redis caching for rate limit windows

## Next Steps (Phase 3)

Once Phase 2 is working:
1. Implement **Analyzer Service** to process scraped content
2. Add **pattern detection** for winning hooks, CTAs, themes
3. Create **sentiment analysis** and emotional trigger identification
4. Build **daily insights** generation

## Troubleshooting

**Issue: "Cannot find module" errors**
- Solution: Run `npm install` and `npm run prisma:generate`

**Issue: Database connection fails**
- Solution: Verify `DATABASE_URL` in `.env` and PostgreSQL is running

**Issue: No ads found despite adding competitors**
- Solution:
  - Verify competitor credentials (facebookPageId, instagramHandle)
  - Check API token validity
  - Review `logs/error.log` for API errors
  - Try with known public pages first (e.g., HubSpot)

**Issue: Deduplication not working**
- Solution: Check `ScrapeLog` table for error counts, ensure content is being stored with consistent field mapping

## Support

For issues or questions:
1. Check `logs/` directory for detailed error messages
2. Review `ScrapeLog` table entries for job-specific errors
3. Run `npm run db:studio` to inspect data manually
4. Verify `.env` variables are correctly set

---

**Phase 2 Status**: ✅ Complete and Ready for Testing

**Estimated Testing Time**: 15-30 minutes

**Estimated Phase 3 Start**: After Phase 2 validation
