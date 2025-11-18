import { ScraperService } from '@/services/scraper.service';
import { db } from '@/config/database';
import { Competitor } from '@prisma/client';

/**
 * Integration Tests for Scraper Service
 *
 * These tests require:
 * 1. A test PostgreSQL database running
 * 2. DATABASE_URL env var pointing to test database
 * 3. Prisma migrations applied
 * 4. Valid API tokens for Meta/Facebook APIs (optional for mocked tests)
 *
 * Run with: npm run test:integration
 */

describe('ScraperService Integration Tests', () => {
  let scraperService: ScraperService;
  let testCompetitor: Competitor;

  beforeAll(async () => {
    scraperService = new ScraperService();

    // Create test competitor
    testCompetitor = await db.competitor.create({
      data: {
        name: 'Test Company ' + Date.now(),
        website: 'https://test-company.com',
        domain: 'test-company.com',
        facebookPageId: '123456789',
        instagramHandle: '@testcompany',
        industry: 'digital-marketing',
        trades: ['marketing'],
        status: 'active',
      },
    });
  });

  afterAll(async () => {
    // Cleanup: Delete test competitor and related data
    if (testCompetitor) {
      await db.competitorAd.deleteMany({
        where: { competitorId: testCompetitor.id },
      });
      await db.competitor.delete({
        where: { id: testCompetitor.id },
      });
    }
  });

  describe('Database Operations', () => {
    it('should store competitor ads in database', async () => {
      const ad = await db.competitorAd.create({
        data: {
          competitorId: testCompetitor.id,
          scrapeCreatorsId: 'test-ad-1',
          platform: 'facebook',
          contentType: 'facebook_ad',
          contentSource: 'ads_library',
          headline: 'Test Ad',
          description: 'Test ad description',
          callToAction: 'LEARN_MORE',
          destinationUrl: 'https://example.com',
          imageUrl: 'https://example.com/image.jpg',
          creativeType: 'image',
          firstSeenAt: new Date(),
          lastSeenAt: new Date(),
          rawData: { test: true },
        },
      });

      expect(ad).toBeDefined();
      expect(ad.competitorId).toBe(testCompetitor.id);
      expect(ad.contentType).toBe('facebook_ad');

      // Verify it can be retrieved
      const retrieved = await db.competitorAd.findUnique({
        where: { id: ad.id },
      });

      expect(retrieved).toBeDefined();
      expect(retrieved?.headline).toBe('Test Ad');
    });

    it('should store facebook posts with engagement metrics', async () => {
      const post = await db.competitorAd.create({
        data: {
          competitorId: testCompetitor.id,
          scrapeCreatorsId: 'test-post-1',
          platform: 'facebook',
          contentType: 'facebook_post',
          contentSource: 'page_feed',
          platformContentId: 'fb-post-12345',
          primaryText: 'Great content for our audience',
          engagementMetrics: {
            likes: 150,
            comments: 25,
            shares: 10,
          },
          imageUrl: 'https://example.com/post.jpg',
          creativeType: 'image',
          firstSeenAt: new Date(),
          lastSeenAt: new Date(),
          rawData: {},
        },
      });

      expect(post).toBeDefined();
      expect(post.contentType).toBe('facebook_post');
      expect(post.engagementMetrics).toEqual({
        likes: 150,
        comments: 25,
        shares: 10,
      });
    });

    it('should store instagram reels with video duration', async () => {
      const reel = await db.competitorAd.create({
        data: {
          competitorId: testCompetitor.id,
          scrapeCreatorsId: 'test-reel-1',
          platform: 'instagram',
          contentType: 'instagram_reel',
          contentSource: 'profile_feed',
          platformContentId: 'ig-reel-67890',
          primaryText: 'Check out this amazing video!',
          videoUrl: 'https://example.com/reel.mp4',
          videoDuration: 45,
          engagementMetrics: {
            plays: 5000,
            likes: 1200,
            comments: 200,
            shares: 150,
            saves: 300,
          },
          creativeType: 'video',
          firstSeenAt: new Date(),
          lastSeenAt: new Date(),
          rawData: {},
        },
      });

      expect(reel).toBeDefined();
      expect(reel.videoDuration).toBe(45);
      expect(reel.engagementMetrics.plays).toBe(5000);
    });

    it('should update engagement metrics on duplicate posts', async () => {
      // Create initial post
      const post1 = await db.competitorAd.create({
        data: {
          competitorId: testCompetitor.id,
          scrapeCreatorsId: 'test-post-update',
          platform: 'facebook',
          contentType: 'facebook_post',
          contentSource: 'page_feed',
          platformContentId: 'fb-post-update',
          primaryText: 'Updatable post',
          engagementMetrics: {
            likes: 100,
            comments: 10,
            shares: 5,
          },
          creativeType: 'image',
          firstSeenAt: new Date(),
          lastSeenAt: new Date(),
          rawData: {},
        },
      });

      // Update with new engagement metrics
      const updated = await db.competitorAd.update({
        where: { id: post1.id },
        data: {
          lastSeenAt: new Date(),
          engagementMetrics: {
            likes: 200,
            comments: 20,
            shares: 10,
          },
        },
      });

      expect(updated.engagementMetrics.likes).toBe(200);
      expect(updated.engagementMetrics.comments).toBe(20);
    });
  });

  describe('Content Type Indexing', () => {
    it('should retrieve ads by content type efficiently', async () => {
      // Create multiple content types
      await db.competitorAd.create({
        data: {
          competitorId: testCompetitor.id,
          scrapeCreatorsId: 'index-test-1',
          platform: 'facebook',
          contentType: 'facebook_ad',
          contentSource: 'ads_library',
          headline: 'Ad 1',
          creativeType: 'image',
          firstSeenAt: new Date(),
          lastSeenAt: new Date(),
          rawData: {},
        },
      });

      await db.competitorAd.create({
        data: {
          competitorId: testCompetitor.id,
          scrapeCreatorsId: 'index-test-2',
          platform: 'facebook',
          contentType: 'facebook_post',
          contentSource: 'page_feed',
          primaryText: 'Post 1',
          creativeType: 'image',
          firstSeenAt: new Date(),
          lastSeenAt: new Date(),
          rawData: {},
        },
      });

      // Query by content type
      const ads = await db.competitorAd.findMany({
        where: {
          competitorId: testCompetitor.id,
          contentType: 'facebook_ad',
        },
      });

      const posts = await db.competitorAd.findMany({
        where: {
          competitorId: testCompetitor.id,
          contentType: 'facebook_post',
        },
      });

      expect(ads.length).toBeGreaterThan(0);
      expect(posts.length).toBeGreaterThan(0);
      expect(ads.every((ad) => ad.contentType === 'facebook_ad')).toBe(true);
      expect(posts.every((p) => p.contentType === 'facebook_post')).toBe(true);
    });

    it('should retrieve posts by content source', async () => {
      const organicPosts = await db.competitorAd.findMany({
        where: {
          competitorId: testCompetitor.id,
          contentSource: 'page_feed',
        },
      });

      const adsFromLibrary = await db.competitorAd.findMany({
        where: {
          competitorId: testCompetitor.id,
          contentSource: 'ads_library',
        },
      });

      expect(
        organicPosts.every((p) => p.contentSource === 'page_feed')
      ).toBe(true);
      expect(
        adsFromLibrary.every((a) => a.contentSource === 'ads_library')
      ).toBe(true);
    });
  });

  describe('Competitor Tracking', () => {
    it('should update lastScrapedAt timestamp', async () => {
      const before = testCompetitor.lastScrapedAt;

      await db.competitor.update({
        where: { id: testCompetitor.id },
        data: { lastScrapedAt: new Date() },
      });

      const updated = await db.competitor.findUnique({
        where: { id: testCompetitor.id },
      });

      expect(updated?.lastScrapedAt).not.toEqual(before);
    });

    it('should retrieve all active competitors for scraping', async () => {
      const activeCompetitors = await db.competitor.findMany({
        where: { status: 'active' },
      });

      expect(activeCompetitors.length).toBeGreaterThan(0);
      expect(activeCompetitors.some((c) => c.id === testCompetitor.id)).toBe(
        true
      );
    });
  });

  describe('ScrapeLog Operations', () => {
    it('should create scrape log entry', async () => {
      const log = await db.scrapeLog.create({
        data: {
          jobId: 'test-job-' + Date.now(),
          startTime: new Date(),
          endTime: new Date(),
          duration: 5000,
          competitorsProcessed: 1,
          adsFound: 50,
          adsStored: 45,
          newAdsInserted: 40,
          adsUpdated: 5,
          status: 'success',
          errorCount: 0,
          errors: [],
          apiCallsUsed: 10,
        },
      });

      expect(log).toBeDefined();
      expect(log.status).toBe('success');
      expect(log.adsFound).toBe(50);
      expect(log.adsStored).toBe(45);

      // Verify retrieval
      const retrieved = await db.scrapeLog.findUnique({
        where: { id: log.id },
      });

      expect(retrieved).toBeDefined();
      expect(retrieved?.newAdsInserted).toBe(40);
    });

    it('should create failed scrape log', async () => {
      const log = await db.scrapeLog.create({
        data: {
          jobId: 'failed-job-' + Date.now(),
          startTime: new Date(),
          endTime: new Date(),
          duration: 2000,
          competitorsProcessed: 0,
          adsFound: 0,
          adsStored: 0,
          newAdsInserted: 0,
          adsUpdated: 0,
          status: 'failed',
          errorCount: 1,
          errors: ['API connection timeout'],
          apiCallsUsed: 0,
        },
      });

      expect(log.status).toBe('failed');
      expect(log.errors).toContain('API connection timeout');
    });
  });

  describe('Data Integrity', () => {
    it('should maintain referential integrity', async () => {
      const ad = await db.competitorAd.create({
        data: {
          competitorId: testCompetitor.id,
          scrapeCreatorsId: 'integrity-test',
          platform: 'facebook',
          contentType: 'facebook_ad',
          contentSource: 'ads_library',
          headline: 'Integrity Test',
          creativeType: 'image',
          firstSeenAt: new Date(),
          lastSeenAt: new Date(),
          rawData: {},
        },
      });

      // Retrieve with competitor relation
      const adWithCompetitor = await db.competitorAd.findUnique({
        where: { id: ad.id },
        include: { competitor: true },
      });

      expect(adWithCompetitor?.competitor.id).toBe(testCompetitor.id);
      expect(adWithCompetitor?.competitor.name).toBe(testCompetitor.name);
    });

    it('should handle cascade delete properly', async () => {
      // Create a temporary competitor
      const tempComp = await db.competitor.create({
        data: {
          name: 'Temp Competitor ' + Date.now(),
          website: 'https://temp.com',
          domain: 'temp.com',
          industry: 'digital-marketing',
          trades: [],
          status: 'active',
        },
      });

      // Create ads for temporary competitor
      await db.competitorAd.create({
        data: {
          competitorId: tempComp.id,
          scrapeCreatorsId: 'cascade-test',
          platform: 'facebook',
          contentType: 'facebook_ad',
          contentSource: 'ads_library',
          headline: 'Cascade Test',
          creativeType: 'image',
          firstSeenAt: new Date(),
          lastSeenAt: new Date(),
          rawData: {},
        },
      });

      // Verify ads exist
      let ads = await db.competitorAd.findMany({
        where: { competitorId: tempComp.id },
      });
      expect(ads.length).toBe(1);

      // Delete competitor (should cascade delete ads)
      await db.competitor.delete({
        where: { id: tempComp.id },
      });

      // Verify ads are deleted
      ads = await db.competitorAd.findMany({
        where: { competitorId: tempComp.id },
      });
      expect(ads.length).toBe(0);
    });
  });

  describe('Performance', () => {
    it('should handle batch inserts efficiently', async () => {
      const startTime = Date.now();
      const batchSize = 100;

      // Create batch of ads
      const promises = Array.from({ length: batchSize }).map((_, i) =>
        db.competitorAd.create({
          data: {
            competitorId: testCompetitor.id,
            scrapeCreatorsId: `perf-test-${i}-${Date.now()}`,
            platform: i % 2 === 0 ? 'facebook' : 'instagram',
            contentType:
              i % 2 === 0
                ? 'facebook_ad'
                : 'instagram_post',
            contentSource: 'ads_library',
            headline: `Performance Test Ad ${i}`,
            creativeType: 'image',
            firstSeenAt: new Date(),
            lastSeenAt: new Date(),
            rawData: {},
          },
        })
      );

      await Promise.all(promises);
      const duration = Date.now() - startTime;

      console.log(`Inserted ${batchSize} records in ${duration}ms`);
      expect(duration).toBeLessThan(30000); // Should complete in under 30 seconds
    });

    it('should query by index efficiently', async () => {
      const startTime = Date.now();

      const results = await db.competitorAd.findMany({
        where: {
          competitorId: testCompetitor.id,
          contentType: 'facebook_ad',
        },
        take: 100,
      });

      const duration = Date.now() - startTime;

      console.log(`Queried ${results.length} records in ${duration}ms`);
      expect(duration).toBeLessThan(1000); // Should be very fast due to index
    });
  });
});
