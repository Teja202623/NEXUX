import { ScraperService } from '@/services/scraper.service';
import { db } from '@/config/database';
import { Competitor } from '@prisma/client';
import {
  FacebookAdContent,
  FacebookPostContent,
  InstagramPostContent,
  InstagramReelContent,
  InstagramAdContent,
} from '@/types/scrapeCreators.types';

// Mock Prisma client
jest.mock('@/config/database', () => ({
  db: {
    competitor: {
      findMany: jest.fn(),
      update: jest.fn(),
    },
    competitorAd: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      findMany: jest.fn(),
    },
    scrapeLog: {
      create: jest.fn(),
    },
  },
}));

// Mock API client
jest.mock('@/utils/apiClient', () => ({
  apiClient: {
    get: jest.fn(),
  },
}));

// Mock logger
jest.mock('@/utils/logger', () => ({
  logger: {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    debug: jest.fn(),
  },
}));

describe('ScraperService', () => {
  let scraperService: ScraperService;
  const mockCompetitor: Competitor = {
    id: 'comp-1',
    name: 'Test Competitor',
    website: 'https://example.com',
    domain: 'example.com',
    linkedinUrl: null,
    facebookPageId: '123456789',
    instagramHandle: '@testcompetitor',
    industry: 'digital-marketing',
    trades: ['marketing', 'seo'],
    status: 'active',
    lastScrapedAt: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    scraperService = new ScraperService();
  });

  describe('scrapeAllCompetitors', () => {
    it('should scrape all active competitors', async () => {
      const mockCompetitors = [mockCompetitor];
      (db.competitor.findMany as jest.Mock).mockResolvedValue(mockCompetitors);
      (db.competitor.update as jest.Mock).mockResolvedValue({});

      // Mock individual scrape methods
      jest
        .spyOn(scraperService, 'scrapeCompetitor' as any)
        .mockResolvedValue({
          competitorId: mockCompetitor.id,
          totalFound: 50,
          totalStored: 45,
          newInserted: 40,
          updated: 5,
          breakdown: {
            facebookAds: 10,
            facebookPosts: 15,
            instagramAds: 10,
            instagramPosts: 5,
            instagramReels: 5,
          },
          errors: [],
          apiCallsUsed: 5,
        });

      const result = await scraperService.scrapeAllCompetitors();

      expect(result.success).toBe(true);
      expect(result.competitorsProcessed).toBe(1);
      expect(result.totalAdsFound).toBe(50);
      expect(result.totalAdsStored).toBe(45);
      expect(db.competitor.findMany).toHaveBeenCalledWith({
        where: { status: 'active' },
      });
    });

    it('should handle errors gracefully', async () => {
      const mockCompetitors = [mockCompetitor];
      (db.competitor.findMany as jest.Mock).mockResolvedValue(mockCompetitors);

      jest
        .spyOn(scraperService, 'scrapeCompetitor' as any)
        .mockRejectedValue(new Error('API Error'));

      const result = await scraperService.scrapeAllCompetitors();

      expect(result.success).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('should return correct breakdown', async () => {
      const mockCompetitors = [mockCompetitor];
      (db.competitor.findMany as jest.Mock).mockResolvedValue(mockCompetitors);

      jest
        .spyOn(scraperService, 'scrapeCompetitor' as any)
        .mockResolvedValue({
          competitorId: mockCompetitor.id,
          totalFound: 100,
          totalStored: 95,
          newInserted: 90,
          updated: 5,
          breakdown: {
            facebookAds: 20,
            facebookPosts: 25,
            instagramAds: 20,
            instagramPosts: 20,
            instagramReels: 10,
          },
          errors: [],
          apiCallsUsed: 10,
        });

      const result = await scraperService.scrapeAllCompetitors();

      expect(result.breakdown.facebookAds).toBe(20);
      expect(result.breakdown.facebookPosts).toBe(25);
      expect(result.breakdown.instagramAds).toBe(20);
      expect(result.breakdown.instagramPosts).toBe(20);
      expect(result.breakdown.instagramReels).toBe(10);
    });
  });

  describe('scrapeFacebookAds', () => {
    it('should skip competitor without facebook page ID', async () => {
      const competitorNoPID = { ...mockCompetitor, facebookPageId: null };

      const result = await scraperService['scrapeFacebookAds'](competitorNoPID);

      expect(result.content).toEqual([]);
      expect(result.apiCalls).toBe(0);
    });

    it('should extract facebook ad data correctly', async () => {
      const mockResponse = {
        data: {
          data: [
            {
              id: 'ad-1',
              created_time: '2024-01-01T00:00:00Z',
              updated_time: '2024-01-02T00:00:00Z',
              creative_spec: [
                {
                  headline: 'Test Ad',
                  body: 'Ad description',
                  call_to_action_type: 'LEARN_MORE',
                  link_url: 'https://example.com',
                  image_url: 'https://example.com/image.jpg',
                },
              ],
            },
          ],
        },
      };

      const { apiClient } = require('@/utils/apiClient');
      apiClient.get.mockResolvedValue(mockResponse);

      const result = await scraperService['scrapeFacebookAds'](mockCompetitor);

      expect(result.content).toHaveLength(1);
      expect(result.apiCalls).toBe(1);
      expect(result.content[0].headline).toBe('Test Ad');
      expect(result.content[0].platforms).toContain('facebook');
    });
  });

  describe('scrapeFacebookPosts', () => {
    it('should skip competitor without facebook page ID', async () => {
      const competitorNoPID = { ...mockCompetitor, facebookPageId: null };

      const result = await scraperService['scrapeFacebookPosts'](competitorNoPID);

      expect(result.content).toEqual([]);
      expect(result.apiCalls).toBe(0);
    });

    it('should extract facebook post data correctly', async () => {
      const mockResponse = {
        data: {
          data: [
            {
              id: 'post-1',
              message: 'Test post content',
              type: 'photo',
              created_time: '1704067200', // timestamp
              picture: 'https://example.com/pic.jpg',
              likes: { summary: { total_count: 100 } },
              comments: { summary: { total_count: 10 } },
              shares: { count: 5 },
            },
          ],
        },
      };

      const { apiClient } = require('@/utils/apiClient');
      apiClient.get.mockResolvedValue(mockResponse);

      const result = await scraperService['scrapeFacebookPosts'](mockCompetitor);

      expect(result.content).toHaveLength(1);
      expect(result.content[0].text).toBe('Test post content');
      expect(result.content[0].engagementMetrics.likes).toBe(100);
      expect(result.content[0].engagementMetrics.comments).toBe(10);
      expect(result.content[0].engagementMetrics.shares).toBe(5);
    });
  });

  describe('scrapeInstagramAds', () => {
    it('should skip competitor without instagram handle', async () => {
      const competitorNoIG = { ...mockCompetitor, instagramHandle: null };

      const result = await scraperService['scrapeInstagramAds'](competitorNoIG);

      expect(result.content).toEqual([]);
      expect(result.apiCalls).toBe(0);
    });

    it('should extract instagram ad data correctly', async () => {
      const mockResponse = {
        data: {
          data: [
            {
              id: 'ig-ad-1',
              created_time: '2024-01-01T00:00:00Z',
              updated_time: '2024-01-02T00:00:00Z',
              creative_spec: [
                {
                  headline: 'Instagram Ad',
                  body: 'Ad copy',
                  call_to_action_type: 'SHOP_NOW',
                  link_url: 'https://example.com/shop',
                  image_url: 'https://example.com/ad.jpg',
                },
              ],
            },
          ],
        },
      };

      const { apiClient } = require('@/utils/apiClient');
      apiClient.get.mockResolvedValue(mockResponse);

      const result = await scraperService['scrapeInstagramAds'](mockCompetitor);

      expect(result.content).toHaveLength(1);
      expect(result.content[0].platforms).toContain('instagram');
      expect(result.content[0].platforms).toContain('facebook');
    });
  });

  describe('scrapeInstagramPosts', () => {
    it('should skip competitor without instagram handle', async () => {
      const competitorNoIG = { ...mockCompetitor, instagramHandle: null };

      const result = await scraperService['scrapeInstagramPosts'](
        competitorNoIG
      );

      expect(result.content).toEqual([]);
      expect(result.apiCalls).toBe(0);
    });

    it('should extract instagram post data correctly', async () => {
      const { apiClient } = require('@/utils/apiClient');

      // Mock user search response
      apiClient.get.mockResolvedValueOnce({
        data: { data: [{ id: 'user-123' }] },
      });

      // Mock posts response
      apiClient.get.mockResolvedValueOnce({
        data: {
          data: [
            {
              id: 'ig-post-1',
              caption: 'Great content!',
              media_type: 'IMAGE',
              media_url: 'https://example.com/image.jpg',
              timestamp: '2024-01-01T00:00:00Z',
              like_count: 200,
              comments_count: 20,
            },
          ],
        },
      });

      const result = await scraperService['scrapeInstagramPosts'](mockCompetitor);

      expect(result.content).toHaveLength(1);
      expect(result.content[0].caption).toBe('Great content!');
      expect(result.content[0].engagementMetrics.likes).toBe(200);
      expect(result.content[0].engagementMetrics.comments).toBe(20);
    });
  });

  describe('scrapeInstagramReels', () => {
    it('should skip competitor without instagram handle', async () => {
      const competitorNoIG = { ...mockCompetitor, instagramHandle: null };

      const result = await scraperService['scrapeInstagramReels'](
        competitorNoIG
      );

      expect(result.content).toEqual([]);
      expect(result.apiCalls).toBe(0);
    });

    it('should extract instagram reel data with video duration', async () => {
      const { apiClient } = require('@/utils/apiClient');

      // Mock user search response
      apiClient.get.mockResolvedValueOnce({
        data: { data: [{ id: 'user-123' }] },
      });

      // Mock user reels response
      apiClient.get.mockResolvedValueOnce({
        data: { ig_reel_ids: ['reel-1'] },
      });

      // Mock reel details response
      apiClient.get.mockResolvedValueOnce({
        data: {
          id: 'reel-1',
          caption: 'Amazing reel!',
          media_url: 'https://example.com/reel.mp4',
          timestamp: '2024-01-01T00:00:00Z',
          video_duration: 45,
          like_count: 500,
          comments_count: 50,
        },
      });

      const result = await scraperService['scrapeInstagramReels'](mockCompetitor);

      expect(result.content).toHaveLength(1);
      expect(result.content[0].duration).toBe(45);
      expect(result.content[0].engagementMetrics.likes).toBe(500);
    });
  });

  describe('deduplication', () => {
    it('should identify duplicate ads using hash', async () => {
      const adContent: FacebookAdContent = {
        adId: 'ad-1',
        headline: 'Same Headline',
        description: 'Same Description',
        callToAction: 'LEARN_MORE',
        landingUrl: 'https://example.com',
        imageUrls: ['https://example.com/image.jpg'],
        startDate: new Date(),
        updatedAt: new Date(),
        platforms: ['facebook'],
      };

      // Mock existing ad in database
      (db.competitorAd.findUnique as jest.Mock).mockResolvedValue({
        id: 'existing-ad',
        lastSeenAt: new Date(),
      });

      // Mock update call
      (db.competitorAd.update as jest.Mock).mockResolvedValue({});

      const result = await scraperService['deduplicateContent'](
        [adContent],
        'facebook_ad',
        mockCompetitor.id
      );

      expect(result).toHaveLength(0); // Duplicate should be filtered out
      expect(db.competitorAd.update).toHaveBeenCalled(); // But should update lastSeenAt
    });

    it('should identify new ads as non-duplicates', async () => {
      const adContent: FacebookAdContent = {
        adId: 'ad-1',
        headline: 'New Ad',
        description: 'New Description',
        callToAction: 'SHOP_NOW',
        landingUrl: 'https://example.com',
        imageUrls: [],
        startDate: new Date(),
        updatedAt: new Date(),
        platforms: ['facebook'],
      };

      // Mock no existing ad
      (db.competitorAd.findUnique as jest.Mock).mockResolvedValue(null);

      const result = await scraperService['deduplicateContent'](
        [adContent],
        'facebook_ad',
        mockCompetitor.id
      );

      expect(result).toHaveLength(1); // Should be included
      expect(result[0]).toEqual(adContent);
    });

    it('should use platform IDs for organic content deduplication', async () => {
      const postContent: FacebookPostContent = {
        postId: 'post-1',
        pageId: '123456789',
        text: 'Post content',
        imageUrls: [],
        createdTime: new Date(),
        engagementMetrics: { likes: 10, comments: 5, shares: 2 },
        type: 'status',
      };

      // Mock existing post
      (db.competitorAd.findUnique as jest.Mock).mockResolvedValue({
        id: 'existing-post',
      });

      (db.competitorAd.update as jest.Mock).mockResolvedValue({});

      const result = await scraperService['deduplicateContent'](
        [postContent],
        'facebook_post',
        mockCompetitor.id
      );

      expect(result).toHaveLength(0);
      expect(db.competitorAd.update).toHaveBeenCalled();
    });
  });

  describe('content storage', () => {
    it('should store facebook ad content with correct fields', async () => {
      const adContent: FacebookAdContent = {
        adId: 'ad-1',
        headline: 'Test Ad',
        description: 'Test Description',
        callToAction: 'LEARN_MORE',
        landingUrl: 'https://example.com',
        imageUrls: ['https://example.com/image.jpg'],
        startDate: new Date(),
        updatedAt: new Date(),
        platforms: ['facebook'],
      };

      (db.competitorAd.create as jest.Mock).mockResolvedValue({ id: 'stored-1' });

      await scraperService['storeContent']([adContent], mockCompetitor.id);

      expect(db.competitorAd.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            contentType: 'facebook_ad',
            platform: 'facebook',
            contentSource: 'ads_library',
            headline: 'Test Ad',
            description: 'Test Description',
          }),
        })
      );
    });

    it('should store instagram reel with video duration', async () => {
      const reelContent: InstagramReelContent = {
        reelId: 'reel-1',
        profileId: 'profile-1',
        caption: 'Amazing reel',
        videoUrl: 'https://example.com/reel.mp4',
        thumbnailUrl: 'https://example.com/thumb.jpg',
        duration: 30,
        createdTime: new Date(),
        engagementMetrics: {
          plays: 1000,
          likes: 500,
          comments: 50,
          shares: 25,
          saves: 100,
        },
      };

      (db.competitorAd.create as jest.Mock).mockResolvedValue({ id: 'stored-1' });

      await scraperService['storeContent']([reelContent], mockCompetitor.id);

      expect(db.competitorAd.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            contentType: 'instagram_reel',
            videoDuration: 30,
            engagementMetrics: expect.objectContaining({
              likes: 500,
              plays: 1000,
            }),
          }),
        })
      );
    });
  });
});
