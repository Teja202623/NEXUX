/**
 * Real Data Scraper Test
 *
 * Tests the scraper against real Facebook and Instagram data.
 * Run after setting up API credentials in .env
 *
 * Usage: ts-node src/test-real-data.ts
 */

import { ScraperService } from '@/services/scraper.service';
import { db } from '@/config/database';
import { logger } from '@/utils/logger';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function testRealDataScraping() {
  console.log('\n' + '='.repeat(60));
  console.log('🚀 NEXUS SCRAPER - REAL DATA TEST');
  console.log('='.repeat(60) + '\n');

  // Check for required API credentials
  const requiredEnvVars = [
    'DATABASE_URL',
    'FACEBOOK_AD_LIBRARY_TOKEN',
    'INSTAGRAM_ACCESS_TOKEN',
  ];

  const missingVars = requiredEnvVars.filter((v) => !process.env[v]);
  if (missingVars.length > 0) {
    console.error('❌ Missing environment variables:');
    for (const v of missingVars) {
      console.error(`   • ${v}`);
    }
    console.error('\n📖 See API-SETUP-GUIDE.md for setup instructions\n');
    process.exit(1);
  }

  try {
    const scraper = new ScraperService();

    // Check database connection
    console.log('📍 Checking database connection...');
    const competitorCount = await db.competitor.count();
    console.log(`✅ Database connected. Found ${competitorCount} competitors\n`);

    if (competitorCount === 0) {
      console.error(
        '❌ No competitors found in database!\n' +
        '📖 Add competitors using: npm run db:studio\n' +
        'See API-SETUP-GUIDE.md Step 6 for example competitors\n'
      );
      process.exit(1);
    }

    // Show competitors to be scraped
    const competitors = await db.competitor.findMany({
      where: { status: 'active' },
    });

    console.log('🎯 COMPETITORS TO SCRAPE:');
    for (const competitor of competitors) {
      console.log(`   • ${competitor.name}`);
      console.log(`     Domain: ${competitor.domain}`);
      if (competitor.facebookPageId)
        console.log(`     Facebook: ${competitor.facebookPageId}`);
      if (competitor.instagramHandle)
        console.log(`     Instagram: ${competitor.instagramHandle}`);
    }
    console.log();

    // Run scraper
    console.log('⏳ Starting scraper...');
    const startTime = Date.now();

    const result = await scraper.scrapeAllCompetitors();

    const duration = Date.now() - startTime;
    const durationSeconds = (duration / 1000).toFixed(2);

    console.log(`✅ Scraping completed in ${durationSeconds}s\n`);

    // Display results
    console.log('📊 SCRAPE RESULTS:');
    console.log('─'.repeat(40));
    console.log(`Competitors Processed:   ${result.competitorsProcessed}`);
    console.log(`Total Content Found:     ${result.totalAdsFound}`);
    console.log(`Content Stored:          ${result.totalAdsStored}`);
    console.log(`New Content:             ${result.newAdsCount}`);
    console.log(`Updated Content:         ${result.updatedAdsCount}`);
    console.log(`API Calls Used:          ${result.apiCallsUsed}`);
    console.log(`Success:                 ${result.success ? '✅ Yes' : '❌ No'}`);

    if (result.errors.length > 0) {
      console.log(`Errors:                  ${result.errors.length}`);
    }
    console.log();

    // Breakdown by content type
    console.log('📈 BREAKDOWN BY CONTENT TYPE:');
    console.log('─'.repeat(40));
    console.log(`Facebook Ads:            ${result.breakdown.facebookAds}`);
    console.log(`Facebook Posts:          ${result.breakdown.facebookPosts}`);
    console.log(`Instagram Ads:           ${result.breakdown.instagramAds}`);
    console.log(`Instagram Posts:         ${result.breakdown.instagramPosts}`);
    console.log(`Instagram Reels:         ${result.breakdown.instagramReels}`);
    console.log();

    // Show latest stored content
    const latestContent = await db.competitorAd.findMany({
      include: { competitor: true },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    if (latestContent.length > 0) {
      console.log('📦 LATEST STORED CONTENT (10 most recent):');
      console.log('─'.repeat(40));

      for (let i = 0; i < latestContent.length; i++) {
        const item = latestContent[i];
        const title =
          item.headline || item.primaryText || '(No title)';
        const displayTitle =
          title.length > 50 ? title.substring(0, 47) + '...' : title;

        console.log(`\n${i + 1}. [${item.contentType}] ${displayTitle}`);
        console.log(
          `   Competitor: ${item.competitor.name} | Platform: ${item.platform}`
        );
        console.log(`   Source: ${item.contentSource}`);

        if (item.engagementMetrics) {
          const metrics = item.engagementMetrics as any;
          const engagementParts = [];
          if (metrics.likes !== undefined) engagementParts.push(`${metrics.likes} likes`);
          if (metrics.comments !== undefined)
            engagementParts.push(`${metrics.comments} comments`);
          if (metrics.shares !== undefined)
            engagementParts.push(`${metrics.shares} shares`);
          if (metrics.plays !== undefined)
            engagementParts.push(`${metrics.plays} plays`);
          if (engagementParts.length > 0) {
            console.log(`   Engagement: ${engagementParts.join(', ')}`);
          }
        }

        if (item.videoDuration) {
          console.log(`   Duration: ${item.videoDuration}s`);
        }
      }
      console.log();
    }

    // Database statistics
    const totalStored = await db.competitorAd.count();
    const byContentType = await db.competitorAd.groupBy({
      by: ['contentType'],
      _count: true,
    });

    console.log('💾 DATABASE STATISTICS:');
    console.log('─'.repeat(40));
    console.log(`Total Content in DB:     ${totalStored}`);
    console.log('By Content Type:');
    for (const group of byContentType) {
      const label = group.contentType.padEnd(18);
      console.log(`   ${label} ${group._count}`);
    }
    console.log();

    // Platform breakdown
    const byPlatform = await db.competitorAd.groupBy({
      by: ['platform'],
      _count: true,
    });

    console.log('By Platform:');
    for (const group of byPlatform) {
      const label = group.platform.padEnd(18);
      console.log(`   ${label} ${group._count}`);
    }
    console.log();

    // Show errors if any
    if (result.errors.length > 0) {
      console.log('⚠️  ERRORS ENCOUNTERED:');
      console.log('─'.repeat(40));
      for (const error of result.errors) {
        console.log(`   • ${error}`);
      }
      console.log();
    }

    // Check scrape log
    const scrapeLog = await db.scrapeLog.findMany({
      orderBy: { createdAt: 'desc' },
      take: 1,
    });

    if (scrapeLog.length > 0) {
      const log = scrapeLog[0];
      console.log('📋 SCRAPE LOG:');
      console.log('─'.repeat(40));
      console.log(`Job ID:                  ${log.jobId}`);
      console.log(`Status:                  ${log.status}`);
      console.log(`Duration:                ${log.duration}ms`);
      console.log(`API Calls:               ${log.apiCallsUsed}`);
      if (log.errors.length > 0) {
        console.log(`Errors:                  ${log.errors.length}`);
      }
      console.log();
    }

    // Success summary
    console.log('✨ TEST COMPLETED SUCCESSFULLY!\n');

    // Next steps
    console.log('🎯 NEXT STEPS:');
    console.log('─'.repeat(40));
    console.log('1. Run scraper again to test deduplication:');
    console.log('   ts-node src/test-real-data.ts');
    console.log('   → Should show newAdsCount = 0, updatedAdsCount > 0');
    console.log();
    console.log('2. View data in Prisma Studio:');
    console.log('   npm run db:studio');
    console.log('   → Check CompetitorAd table for stored content');
    console.log();
    console.log('3. Next phase - Analyzer Service:');
    console.log('   Start Phase 3 to process and analyze patterns');
    console.log();
    console.log('='.repeat(60) + '\n');

  } catch (error) {
    console.error('\n❌ TEST FAILED\n');
    console.error('Error:', error);

    if (error instanceof Error) {
      if (error.message.includes('connect ECONNREFUSED')) {
        console.error(
          '\n💡 Hint: Database connection failed. Ensure PostgreSQL is running:\n' +
          '   brew services start postgresql  (macOS with Homebrew)\n' +
          '   or verify DATABASE_URL in .env\n'
        );
      } else if (error.message.includes('Invalid OAuth')) {
        console.error(
          '\n💡 Hint: Invalid API token. Check:\n' +
          '   1. API credentials in .env\n' +
          '   2. Token hasn\'t expired\n' +
          '   3. See API-SETUP-GUIDE.md for token setup\n'
        );
      }
    }

    console.error('\n' + '='.repeat(60) + '\n');
    process.exit(1);
  }
}

// Run test
testRealDataScraping();