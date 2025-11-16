# Facebook & Instagram API Setup Guide

Complete guide to get real API credentials and test against live data.

## Overview

This guide covers:
1. Creating a Meta/Facebook App
2. Getting API tokens for Facebook Ads Library
3. Getting API tokens for Instagram Graph API
4. Testing with real competitors
5. Validating data collection

**Estimated Time:** 20-30 minutes

## Step 1: Create a Meta App

### 1.1 Go to Meta for Developers

```
https://developers.facebook.com/
```

### 1.2 Create App

- Click **My Apps** (top right)
- Click **Create App**
- Choose app type: **Business**
- Fill in:
  - **App Name:** "NEXUS Competitor Intelligence"
  - **App Purpose:** "Competitor Intelligence & Ad Research"
  - **App Contact Email:** Your email
  - **App Roles:** Your role in company
- Click **Create App**

### 1.3 Add Products

Once app is created:
- Click **Add Product**
- Search for **"Marketing API"**
- Click **Set Up** (or **Get Started**)
- Confirm and add to app

### 1.4 Get App Credentials

In your app dashboard:
- Go to **Settings** → **Basic**
- Note down:
  - **App ID** (e.g., `1234567890`)
  - **App Secret** (keep this secret!)

## Step 2: Get Facebook Ad Library API Access

The Facebook Ad Library is public, but requires authentication to access programmatically.

### 2.1 Request Ad Library API Access

- In your app, go to **Roles** → **Roles**
- Under your admin account, note your **Admin ID**
- Go to **Settings** → **Basic**
- Save your **App Token** (auto-generated)

### 2.2 Get Your App Token

In API requests, you'll use:
```
access_token = {APP_ID}|{APP_SECRET}
```

Or better, get a longer-lived token:

```bash
# In your terminal or API tool:
curl -X GET "https://graph.facebook.com/oauth/access_token?client_id={APP_ID}&client_secret={APP_SECRET}&grant_type=client_credentials"
```

This returns:
```json
{
  "access_token": "your_app_token_here",
  "token_type": "bearer"
}
```

**Save this token** - you'll need it for `.env`

## Step 3: Get Facebook Page Access Token

To scrape Facebook page posts, you need access to specific pages.

### 3.1 Add Instagram Basic Display Product

- Go to your app dashboard
- Click **+ Add Product**
- Search for **"Instagram Basic Display"**
- Click **Set Up**

### 3.2 Create a Test User (if needed)

For testing without your own page:
- Go to **Roles** → **Test Users**
- Click **Add Test User**
- Choose role: **Admin**
- Create and confirm

### 3.3 Get Long-Lived Page Access Token

```bash
# First, get user access token
curl -X POST "https://graph.instagram.com/oauth/access_token" \
  -F "client_id={APP_ID}" \
  -F "client_secret={APP_SECRET}" \
  -F "grant_type=authorization_code" \
  -F "redirect_uri=https://localhost/callback" \
  -F "code={AUTH_CODE}"
```

Better approach - use Graph API Explorer:

1. Go to https://developers.facebook.com/tools/explorer/
2. Select your app from dropdown
3. Change "Get" to "Get User Access Token"
4. Choose permissions:
   - `pages_read_user_content`
   - `pages_manage_metadata`
5. Click **Generate Access Token**
6. Copy the token

**Long-lived token:** Add `instagram_basic` and `instagram_manage_insight` scopes

## Step 4: Configure Environment Variables

Create or update `.env` file with your credentials:

```env
# Meta App Credentials
FACEBOOK_APP_ID=your_app_id_here
FACEBOOK_APP_SECRET=your_app_secret_here_KEEP_SECRET

# API Tokens (from Step 2 & 3)
FACEBOOK_AD_LIBRARY_TOKEN=your_app_token|your_app_secret
FACEBOOK_PAGE_ACCESS_TOKEN=your_long_lived_page_token_here
INSTAGRAM_BUSINESS_ACCOUNT_TOKEN=your_instagram_token_here
INSTAGRAM_ACCESS_TOKEN=your_long_lived_instagram_token_here

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/nexus_db

# Other Settings
NODE_ENV=development
PORT=3001
LOG_LEVEL=info
```

## Step 5: Test API Credentials

### 5.1 Test Facebook Ad Library Token

```bash
curl -X GET "https://graph.facebook.com/ads/library/search?access_token=YOUR_TOKEN&search_type=PAGE&search_terms=example.com&limit=10&fields=id,name,created_time"
```

**Success Response:**
```json
{
  "data": [
    {
      "id": "ad_id_123",
      "name": "Ad Name",
      "created_time": "2024-01-15T10:30:00+0000"
    }
  ],
  "paging": { ... }
}
```

**Error Response (Check Token):**
```json
{
  "error": {
    "message": "Invalid OAuth access token",
    "type": "OAuthException"
  }
}
```

### 5.2 Test Instagram Token

```bash
curl -X GET "https://graph.instagram.com/me?fields=id,username&access_token=YOUR_TOKEN"
```

**Success Response:**
```json
{
  "id": "17841234567890",
  "username": "yourusername"
}
```

## Step 6: Add Real Competitors to Database

Once you have API tokens working, add real competitors to test against.

### 6.1 Get Competitor IDs

**Facebook:**
- Go to competitor website
- Look for their Facebook page
- Click page → Copy page ID from URL (e.g., `https://facebook.com/{PAGE_ID}`)
- Or search in Facebook Ad Library for their domain

**Instagram:**
- Go to their Instagram profile
- Get their handle (e.g., `@hubspot`)

### 6.2 Add to Database

```bash
npm run db:studio
```

Navigate to **Competitor** table and create entries:

**Competitor 1: HubSpot**
```
name: "HubSpot"
website: "https://www.hubspot.com"
domain: "hubspot.com"
facebookPageId: "23847826"
instagramHandle: "@hubspot"
status: "active"
```

**Competitor 2: Neil Patel Digital**
```
name: "Neil Patel Digital"
website: "https://neilpatel.com"
domain: "neilpatel.com"
facebookPageId: "179097428798347"
instagramHandle: "@neilpatel"
status: "active"
```

**Competitor 3: Semrush**
```
name: "Semrush"
website: "https://www.semrush.com"
domain: "semrush.com"
facebookPageId: "128957763809847"
instagramHandle: "@semrush"
status: "active"
```

## Step 7: Run Real Data Scraper Test

### 7.1 Create Test Script

Create `src/test-real-data.ts`:

```typescript
import { ScraperService } from '@/services/scraper.service';
import { db } from '@/config/database';
import { logger } from '@/utils/logger';

async function testRealDataScraping() {
  console.log('🚀 Starting real data scraper test...\n');

  try {
    const scraper = new ScraperService();
    const startTime = Date.now();

    // Scrape all competitors
    console.log('⏳ Scraping all competitors...');
    const result = await scraper.scrapeAllCompetitors();

    const duration = Date.now() - startTime;
    console.log(`✅ Scraping completed in ${(duration / 1000).toFixed(2)}s\n`);

    // Display results
    console.log('📊 SCRAPE RESULTS:');
    console.log(`   Competitors Processed: ${result.competitorsProcessed}`);
    console.log(`   Total Content Found: ${result.totalAdsFound}`);
    console.log(`   Content Stored: ${result.totalAdsStored}`);
    console.log(`   New Content: ${result.newAdsCount}`);
    console.log(`   Updated Content: ${result.updatedAdsCount}`);
    console.log(`   API Calls Used: ${result.apiCallsUsed}\n`);

    // Breakdown
    console.log('📈 BREAKDOWN BY CONTENT TYPE:');
    console.log(`   Facebook Ads: ${result.breakdown.facebookAds}`);
    console.log(`   Facebook Posts: ${result.breakdown.facebookPosts}`);
    console.log(`   Instagram Ads: ${result.breakdown.instagramAds}`);
    console.log(`   Instagram Posts: ${result.breakdown.instagramPosts}`);
    console.log(`   Instagram Reels: ${result.breakdown.instagramReels}\n`);

    // Show stored data
    const allContent = await db.competitorAd.findMany({
      include: { competitor: true },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    console.log('📦 LATEST STORED CONTENT (10 most recent):');
    for (const item of allContent) {
      console.log(`   • [${item.contentType}] ${item.headline || item.primaryText || 'No title'}`);
      console.log(`     Platform: ${item.platform} | Source: ${item.contentSource}`);
      if (item.engagementMetrics) {
        const metrics = item.engagementMetrics as any;
        console.log(`     Engagement: ${metrics.likes || 0} likes, ${metrics.comments || 0} comments`);
      }
    }

    // Check for errors
    if (result.errors.length > 0) {
      console.log('\n⚠️  ERRORS ENCOUNTERED:');
      for (const error of result.errors) {
        console.log(`   • ${error}`);
      }
    }

    // Database stats
    const totalStored = await db.competitorAd.count();
    const byContentType = await db.competitorAd.groupBy({
      by: ['contentType'],
      _count: true,
    });

    console.log('\n💾 DATABASE STATISTICS:');
    console.log(`   Total Content in DB: ${totalStored}`);
    console.log(`   By Content Type:`);
    for (const group of byContentType) {
      console.log(`     - ${group.contentType}: ${group._count}`);
    }

    console.log('\n✨ Test completed successfully!');

  } catch (error) {
    console.error('❌ Test failed:', error);
    process.exit(1);
  }
}

testRealDataScraping();
```

### 7.2 Run the Test

```bash
# First, ensure database is set up
npm run db:migrate

# Add competitors using db:studio
npm run db:studio

# Then run the test
ts-node src/test-real-data.ts
```

**Expected Output:**
```
🚀 Starting real data scraper test...

⏳ Scraping all competitors...
✅ Scraping completed in 2.34s

📊 SCRAPE RESULTS:
   Competitors Processed: 2
   Total Content Found: 245
   Content Stored: 238
   New Content: 198
   Updated Content: 40
   API Calls Used: 12

📈 BREAKDOWN BY CONTENT TYPE:
   Facebook Ads: 45
   Facebook Posts: 52
   Instagram Ads: 48
   Instagram Posts: 61
   Instagram Reels: 39

📦 LATEST STORED CONTENT (10 most recent):
   • [instagram_reel] The #1 mistake marketers make
     Platform: instagram | Source: profile_feed
     Engagement: 8200 likes, 520 comments
   ...
```

## Step 8: Verify Data in Database

### 8.1 Using Prisma Studio

```bash
npm run db:studio
```

Navigate to:
- **CompetitorAd** - View all scraped content
- **Competitor** - View tracked competitors
- **ScrapeLog** - View scraping job history

### 8.2 Query Specific Content Types

```bash
# Open database shell
npx prisma db execute --stdin

# Then query:
SELECT contentType, COUNT(*) as count
FROM "CompetitorAd"
GROUP BY contentType;

SELECT platform, contentSource, COUNT(*)
FROM "CompetitorAd"
GROUP BY platform, contentSource;
```

## Step 9: Test Deduplication

Run the scraper twice to verify deduplication works:

```bash
# First run
ts-node src/test-real-data.ts
# Result: newAdsCount = 198, updatedAdsCount = 0

# Wait a few seconds, then run again
ts-node src/test-real-data.ts
# Result: newAdsCount = 0, updatedAdsCount = 198 (or higher if new content)
```

**Expected behavior:**
- First run: All new content
- Second run: No new content, but engagement metrics updated
- Third run: Same as second (deduplication working)

## Troubleshooting

### Error: "Invalid OAuth access token"

**Solution:**
1. Verify token in `.env` is correct
2. Check token hasn't expired
3. For test users, tokens expire after 60 days - refresh in Graph API Explorer
4. Try getting a new token

### Error: "User doesn't have permission"

**Solution:**
1. Ensure your app has required permissions
2. Add permissions in app settings
3. Reauthorize app with user

### Error: "Rate limit exceeded"

**Solution:**
1. Wait 1 hour before retrying
2. Implement batching (scrape fewer competitors per run)
3. Stagger scraper jobs (run at different times)

### No data returned

**Solution:**
1. Verify competitor IDs are correct
   - Facebook page ID should be numeric
   - Instagram handle should include @ symbol
2. Check competitor account is public
3. Ensure account has public posts/ads

### Instagram Graph API returns 400 error

**Solution:**
- Instagram API requires business accounts
- Convert personal Instagram account to business account:
  1. Go to Instagram settings
  2. Account → Switch to Professional Account → Select Business
  3. Re-authorize with business account token

## API Rate Limits

**Facebook Ad Library API:**
- 200 calls per hour (development)
- 1000+ per hour (production with increased limits)

**Instagram Graph API:**
- 200 calls per hour (development)
- Varies by endpoint

**Strategy:**
- Stagger competitor scraping
- Cache results when possible
- Monitor API call counts in logs

## Security Best Practices

1. **Never commit `.env`** - Keep credentials secret
2. **Rotate tokens regularly** - Get new tokens every 30 days
3. **Use app tokens for ads library** - More secure than user tokens
4. **Monitor API usage** - Check Meta dashboard for unusual activity
5. **Use secure environment** - Store `.env` securely

## Next Steps

1. ✅ Create Meta app
2. ✅ Get API credentials
3. ✅ Update `.env`
4. ✅ Add competitors to database
5. ✅ Run real data test
6. ✅ Verify deduplication
7. 📊 Analyze patterns (Phase 3)

## Resources

- [Meta Developers](https://developers.facebook.com/)
- [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
- [Ad Library API Docs](https://developers.facebook.com/docs/ads/ad-library)
- [Instagram Graph API](https://developers.instagram.com/docs/instagram-api)

---

**Status: Ready to test with real data**

Once you have API tokens, you can:
- Scrape real competitor content
- Test deduplication with live data
- Build patterns database
- Move to Phase 3 (Analyzer Service)