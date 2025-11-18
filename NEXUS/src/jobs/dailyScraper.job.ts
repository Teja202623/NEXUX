import { ScraperService } from '@/services/scraper.service';
import { db } from '@/config/database';
import { logger } from '@/utils/logger';
import { v4 as uuidv4 } from 'uuid';

/**
 * Daily Scraper Job
 * Runs daily to scrape all active competitors across all platforms
 * Scheduled to run at 2:00 AM (primary) and 2:00 PM (backup)
 */
export async function dailyScraperJob(): Promise<void> {
  const jobId = uuidv4();
  const startTime = new Date();

  logger.info('Starting daily scraper job', { jobId });

  try {
    const scrapeService = new ScraperService();
    const result = await scrapeService.scrapeAllCompetitors();

    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();

    // Log the results to database
    await db.scrapeLog.create({
      data: {
        jobId,
        startTime,
        endTime,
        duration,
        competitorsProcessed: result.competitorsProcessed,
        adsFound: result.totalAdsFound,
        adsStored: result.totalAdsStored,
        newAdsInserted: result.newAdsCount,
        adsUpdated: result.updatedAdsCount,
        status: result.success ? 'success' : 'partial',
        errorCount: result.errors.length,
        errors: result.errors,
        apiCallsUsed: result.apiCallsUsed,
      },
    });

    logger.info('Daily scraper job completed successfully', {
      jobId,
      duration,
      result,
    });

    // Log breakdown
    logger.info('Scrape breakdown', {
      facebookAds: result.breakdown.facebookAds,
      facebookPosts: result.breakdown.facebookPosts,
      instagramAds: result.breakdown.instagramAds,
      instagramPosts: result.breakdown.instagramPosts,
      instagramReels: result.breakdown.instagramReels,
    });
  } catch (error) {
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();

    logger.error('Daily scraper job failed', {
      jobId,
      error,
      duration,
    });

    // Log failure to database
    await db.scrapeLog.create({
      data: {
        jobId,
        startTime,
        endTime,
        duration,
        competitorsProcessed: 0,
        adsFound: 0,
        adsStored: 0,
        newAdsInserted: 0,
        adsUpdated: 0,
        status: 'failed',
        errorCount: 1,
        errors: [
          error instanceof Error ? error.message : 'Unknown error occurred',
        ],
        apiCallsUsed: 0,
      },
    });

    // Re-throw to trigger alerting system if configured
    throw error;
  }
}

/**
 * Optional: Manual trigger endpoint
 * Can be called via API to manually run the scraper
 */
export async function triggerScraperJob(): Promise<{
  success: boolean;
  jobId: string;
  message: string;
}> {
  const jobId = uuidv4();

  try {
    logger.info('Manual scraper job triggered', { jobId });

    // Run in background without awaiting
    dailyScraperJob().catch((error) => {
      logger.error('Background scraper job error', { jobId, error });
    });

    return {
      success: true,
      jobId,
      message: 'Scraper job started. Check logs for progress.',
    };
  } catch (error) {
    logger.error('Failed to trigger scraper job', { jobId, error });
    return {
      success: false,
      jobId,
      message: `Failed to start scraper job: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`,
    };
  }
}
