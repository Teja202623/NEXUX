import { Competitor, Prisma } from '@prisma/client';
import crypto from 'crypto';
import db from '../config/database';
import { createApiClient } from '../utils/apiClient';
import logger from '../utils/logger';
import {
  FacebookAdContent,
  FacebookPostContent,
  InstagramPostContent,
  InstagramReelContent,
  InstagramAdContent,
  ScrapeResult,
  CompetitorScrapeResult,
} from '../types/scrapeCreators.types';

export class ScraperService {
  // Facebook Graph API client
  private readonly facebookApiClient = createApiClient('https://graph.facebook.com/v18.0');

  /**
   * Main entry point - scrapes all active competitors across all platforms
   */
  async scrapeAllCompetitors(): Promise<ScrapeResult> {
    const startTime = Date.now();
    const errors: string[] = [];
    let totalAdsFound = 0;
    let totalAdsStored = 0;
    let totalNewInserted = 0;
    let totalUpdated = 0;
    let apiCallsUsed = 0;

    const breakdown = {
      facebookAds: 0,
      facebookPosts: 0,
      instagramAds: 0,
      instagramPosts: 0,
      instagramReels: 0,
    };

    try {
      // Fetch all active competitors
      const competitors = await db.competitor.findMany({
        where: { status: 'active' },
      });

      logger.info(`Starting scrape for ${competitors.length} competitors`);

      // Scrape each competitor
      for (const competitor of competitors) {
        try {
          const result = await this.scrapeCompetitor(competitor);
          totalAdsFound += result.totalFound;
          totalAdsStored += result.totalStored;
          totalNewInserted += result.newInserted;
          totalUpdated += result.updated;
          apiCallsUsed += result.apiCallsUsed;

          breakdown.facebookAds += result.breakdown.facebookAds;
          breakdown.facebookPosts += result.breakdown.facebookPosts;
          breakdown.instagramAds += result.breakdown.instagramAds;
          breakdown.instagramPosts += result.breakdown.instagramPosts;
          breakdown.instagramReels += result.breakdown.instagramReels;

          // Update last scraped timestamp
          await db.competitor.update({
            where: { id: competitor.id },
            data: { lastScrapedAt: new Date() },
          });

          logger.info(`Completed scrape for competitor: ${competitor.name}`, {
            result,
          });
        } catch (error) {
          const errorMsg = `Error scraping competitor ${competitor.name}: ${
            error instanceof Error ? error.message : String(error)
          }`;
          errors.push(errorMsg);
          logger.error(errorMsg, { error });
        }
      }

      return {
        success: errors.length === 0,
        competitorsProcessed: competitors.length,
        totalAdsFound,
        totalAdsStored,
        newAdsCount: totalNewInserted,
        updatedAdsCount: totalUpdated,
        breakdown,
        errors,
        apiCallsUsed,
        duration: Date.now() - startTime,
      };
    } catch (error) {
      const errorMsg = `Fatal error in scrapeAllCompetitors: ${
        error instanceof Error ? error.message : String(error)
      }`;
      errors.push(errorMsg);
      logger.error(errorMsg, { error });
      return {
        success: false,
        competitorsProcessed: 0,
        totalAdsFound: 0,
        totalAdsStored: 0,
        newAdsCount: 0,
        updatedAdsCount: 0,
        breakdown,
        errors,
        apiCallsUsed: 0,
        duration: Date.now() - startTime,
      };
    }
  }

  /**
   * Scrapes a single competitor across all platforms
   */
  async scrapeCompetitor(competitor: Competitor): Promise<CompetitorScrapeResult> {
    const errors: string[] = [];
    let totalFound = 0;
    let totalStored = 0;
    let newInserted = 0;
    let updated = 0;
    let apiCallsUsed = 0;

    const breakdown = {
      facebookAds: 0,
      facebookPosts: 0,
      instagramAds: 0,
      instagramPosts: 0,
      instagramReels: 0,
    };

    try {
      // Scrape all platforms in parallel
      const [
        facebookAds,
        facebookPosts,
        instagramAds,
        instagramPosts,
        instagramReels,
      ] = await Promise.allSettled([
        this.scrapeFacebookAds(competitor),
        this.scrapeFacebookPosts(competitor),
        this.scrapeInstagramAds(competitor),
        this.scrapeInstagramPosts(competitor),
        this.scrapeInstagramReels(competitor),
      ]);

      // Process Facebook Ads
      if (facebookAds.status === 'fulfilled') {
        const { content, apiCalls } = facebookAds.value;
        const deduplicated = await this.deduplicateContent(
          content,
          'facebook_ad',
          competitor.id
        );
        const stored = await this.storeContent(deduplicated, competitor.id);
        totalFound += content.length;
        totalStored += deduplicated.length;
        newInserted += stored.new;
        updated += stored.updated;
        apiCallsUsed += apiCalls;
        breakdown.facebookAds = content.length;
      } else if (facebookAds.status === 'rejected') {
        errors.push(`Facebook ads scrape failed: ${facebookAds.reason}`);
      }

      // Process Facebook Posts
      if (facebookPosts.status === 'fulfilled') {
        const { content, apiCalls } = facebookPosts.value;
        const deduplicated = await this.deduplicateContent(
          content,
          'facebook_post',
          competitor.id
        );
        const stored = await this.storeContent(deduplicated, competitor.id);
        totalFound += content.length;
        totalStored += deduplicated.length;
        newInserted += stored.new;
        updated += stored.updated;
        apiCallsUsed += apiCalls;
        breakdown.facebookPosts = content.length;
      } else if (facebookPosts.status === 'rejected') {
        errors.push(`Facebook posts scrape failed: ${facebookPosts.reason}`);
      }

      // Process Instagram Ads
      if (instagramAds.status === 'fulfilled') {
        const { content, apiCalls } = instagramAds.value;
        const deduplicated = await this.deduplicateContent(
          content,
          'instagram_ad',
          competitor.id
        );
        const stored = await this.storeContent(deduplicated, competitor.id);
        totalFound += content.length;
        totalStored += deduplicated.length;
        newInserted += stored.new;
        updated += stored.updated;
        apiCallsUsed += apiCalls;
        breakdown.instagramAds = content.length;
      } else if (instagramAds.status === 'rejected') {
        errors.push(`Instagram ads scrape failed: ${instagramAds.reason}`);
      }

      // Process Instagram Posts
      if (instagramPosts.status === 'fulfilled') {
        const { content, apiCalls } = instagramPosts.value;
        const deduplicated = await this.deduplicateContent(
          content,
          'instagram_post',
          competitor.id
        );
        const stored = await this.storeContent(deduplicated, competitor.id);
        totalFound += content.length;
        totalStored += deduplicated.length;
        newInserted += stored.new;
        updated += stored.updated;
        apiCallsUsed += apiCalls;
        breakdown.instagramPosts = content.length;
      } else if (instagramPosts.status === 'rejected') {
        errors.push(`Instagram posts scrape failed: ${instagramPosts.reason}`);
      }

      // Process Instagram Reels
      if (instagramReels.status === 'fulfilled') {
        const { content, apiCalls } = instagramReels.value;
        const deduplicated = await this.deduplicateContent(
          content,
          'instagram_reel',
          competitor.id
        );
        const stored = await this.storeContent(deduplicated, competitor.id);
        totalFound += content.length;
        totalStored += deduplicated.length;
        newInserted += stored.new;
        updated += stored.updated;
        apiCallsUsed += apiCalls;
        breakdown.instagramReels = content.length;
      } else if (instagramReels.status === 'rejected') {
        errors.push(`Instagram reels scrape failed: ${instagramReels.reason}`);
      }

      return {
        competitorId: competitor.id,
        totalFound,
        totalStored,
        newInserted,
        updated,
        breakdown,
        errors,
        apiCallsUsed,
      };
    } catch (error) {
      const errorMsg = `Fatal error scraping competitor ${competitor.name}: ${
        error instanceof Error ? error.message : String(error)
      }`;
      logger.error(errorMsg, { error });
      throw new Error(errorMsg);
    }
  }

  /**
   * Scrape Facebook Ads from Meta Ad Library API
   */
  async scrapeFacebookAds(
    competitor: Competitor
  ): Promise<{ content: FacebookAdContent[]; apiCalls: number }> {
    const content: FacebookAdContent[] = [];
    let apiCalls = 0;

    try {
      if (!competitor.facebookPageId && !competitor.domain) {
        logger.warn(
          `Competitor ${competitor.name} missing Facebook page ID and domain`
        );
        return { content: [], apiCalls: 0 };
      }

      // Build search query
      const searchQuery = competitor.domain || competitor.facebookPageId;

      // Call Meta Ad Library API
      const response = await this.facebookApiClient.get<any>('/ads/library/search', {
        access_token: process.env.FACEBOOK_AD_LIBRARY_TOKEN,
        search_type: 'PAGE',
        fields:
          'id,name,adset_spec,created_time,updated_time,creative_spec,ad_snapshot_url',
        search_terms: searchQuery,
        limit: 100,
      });

      apiCalls++;

      if (response?.data) {
        for (const ad of response.data) {
          content.push({
            adId: ad.id,
            headline: ad.creative_spec?.[0]?.headline,
            description: ad.creative_spec?.[0]?.body,
            callToAction: ad.creative_spec?.[0]?.call_to_action_type,
            landingUrl: ad.creative_spec?.[0]?.link_url,
            imageUrls: ad.creative_spec?.[0]?.image_url
              ? [ad.creative_spec[0].image_url]
              : [],
            videoUrl: ad.creative_spec?.[0]?.video_url,
            startDate: new Date(ad.created_time),
            endDate: ad.end_time ? new Date(ad.end_time) : undefined,
            updatedAt: new Date(ad.updated_time),
            platforms: ['facebook'],
          });
        }
      }

      logger.info(`Scraped ${content.length} Facebook ads for ${competitor.name}`);
    } catch (error) {
      logger.error(`Error scraping Facebook ads for ${competitor.name}`, {
        error,
      });
      throw error;
    }

    return { content, apiCalls };
  }

  /**
   * Scrape Facebook Posts from competitor's page
   */
  async scrapeFacebookPosts(
    competitor: Competitor
  ): Promise<{ content: FacebookPostContent[]; apiCalls: number }> {
    const content: FacebookPostContent[] = [];
    let apiCalls = 0;

    try {
      if (!competitor.facebookPageId) {
        logger.warn(`Competitor ${competitor.name} missing Facebook page ID`);
        return { content: [], apiCalls: 0 };
      }

      // Fetch posts from Facebook Graph API
      const response = await this.facebookApiClient.get<any>(
        `/${competitor.facebookPageId}/posts`,
        {
          access_token: process.env.FACEBOOK_PAGE_ACCESS_TOKEN,
          fields:
            'id,message,type,created_time,permalink_url,picture,attachments,story,shares,likes.summary(true),comments.summary(true)',
          limit: 50,
          date_format: 'U',
        }
      );

      apiCalls++;

      if (response?.data) {
        for (const post of response.data) {
          const imageUrls: string[] = [];
          if (post.picture) imageUrls.push(post.picture);
          if (post.attachments?.data?.[0]?.media?.image?.src) {
            imageUrls.push(post.attachments.data[0].media.image.src);
          }

          content.push({
            postId: post.id,
            pageId: competitor.facebookPageId!,
            text: post.message || post.story || '',
            imageUrls,
            videoUrl: post.attachments?.data?.[0]?.media?.video?.src,
            createdTime: new Date(parseInt(post.created_time) * 1000),
            engagementMetrics: {
              likes: post.likes?.summary?.total_count || 0,
              comments: post.comments?.summary?.total_count || 0,
              shares: post.shares?.count || 0,
            },
            type: post.type as 'status' | 'photo' | 'video' | 'link',
          });
        }
      }

      logger.info(`Scraped ${content.length} Facebook posts for ${competitor.name}`);
    } catch (error) {
      logger.error(`Error scraping Facebook posts for ${competitor.name}`, {
        error,
      });
      throw error;
    }

    return { content, apiCalls };
  }

  /**
   * Scrape Instagram Ads from Meta Ad Library API
   */
  async scrapeInstagramAds(
    competitor: Competitor
  ): Promise<{ content: InstagramAdContent[]; apiCalls: number }> {
    const content: InstagramAdContent[] = [];
    let apiCalls = 0;

    try {
      if (!competitor.instagramHandle) {
        logger.warn(`Competitor ${competitor.name} missing Instagram handle`);
        return { content: [], apiCalls: 0 };
      }

      // Call Meta Ad Library API for Instagram
      const response = await this.facebookApiClient.get<any>('/ads/library/search', {
        access_token: process.env.FACEBOOK_AD_LIBRARY_TOKEN,
        search_type: 'INSTAGRAM_BUSINESS',
        fields:
          'id,name,adset_spec,created_time,updated_time,creative_spec,ad_snapshot_url',
        search_terms: competitor.instagramHandle.replace('@', ''),
        limit: 100,
      });

      apiCalls++;

      if (response?.data) {
        for (const ad of response.data) {
          const creativeUrls: string[] = [];
          if (ad.creative_spec?.[0]?.image_url) {
            creativeUrls.push(ad.creative_spec[0].image_url);
          }
          if (ad.creative_spec?.[0]?.carousel_spec) {
            for (const item of ad.creative_spec[0].carousel_spec) {
              if (item.image_url) creativeUrls.push(item.image_url);
            }
          }

          content.push({
            adId: ad.id,
            accountId: competitor.instagramHandle!,
            headline: ad.creative_spec?.[0]?.headline,
            adCopy: ad.creative_spec?.[0]?.body || '',
            callToAction: ad.creative_spec?.[0]?.call_to_action_type,
            landingUrl: ad.creative_spec?.[0]?.link_url,
            creativeUrls,
            startDate: new Date(ad.created_time),
            endDate: ad.end_time ? new Date(ad.end_time) : undefined,
            platforms: ['instagram', 'facebook'],
          });
        }
      }

      logger.info(`Scraped ${content.length} Instagram ads for ${competitor.name}`);
    } catch (error) {
      logger.error(`Error scraping Instagram ads for ${competitor.name}`, {
        error,
      });
      throw error;
    }

    return { content, apiCalls };
  }

  /**
   * Scrape Instagram Posts from competitor's profile
   */
  async scrapeInstagramPosts(
    competitor: Competitor
  ): Promise<{ content: InstagramPostContent[]; apiCalls: number }> {
    const content: InstagramPostContent[] = [];
    let apiCalls = 0;

    try {
      if (!competitor.instagramHandle) {
        logger.warn(`Competitor ${competitor.name} missing Instagram handle`);
        return { content: [], apiCalls: 0 };
      }

      // Get Instagram user ID from handle
      const userResponse = await this.facebookApiClient.get<any>('/ig_user_search', {
        user_name: competitor.instagramHandle.replace('@', ''),
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
      });

      apiCalls++;

      if (!userResponse?.data?.[0]?.id) {
        logger.warn(`Could not find Instagram user for ${competitor.instagramHandle}`);
        return { content: [], apiCalls: 0 };
      }

      const userId = userResponse.data[0].id;

      // Fetch posts from Instagram Graph API
      const postsResponse = await this.facebookApiClient.get<any>(`/${userId}/media`, {
        user_id: userId,
        fields: 'id,caption,media_type,media_url,timestamp,like_count,comments_count,media_product_type',
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
        limit: 50,
      });

      apiCalls++;

      if (postsResponse?.data) {
        for (const post of postsResponse.data) {
          if (post.media_type === 'VIDEO' || post.media_type === 'REELS') {
            continue; // Skip videos/reels, they're handled separately
          }

          const imageUrls: string[] = [];
          if (post.media_url) {
            imageUrls.push(post.media_url);
          }

          content.push({
            postId: post.id,
            profileId: userId,
            caption: post.caption || '',
            imageUrls,
            carouselImageUrls: [],
            createdTime: new Date(post.timestamp),
            engagementMetrics: {
              likes: post.like_count || 0,
              comments: post.comments_count || 0,
              shares: 0, // Instagram API doesn't expose shares
              saves: 0, // Requires additional permissions
            },
            contentTheme: 'unclassified', // Will be analyzed in Phase 3
          });
        }
      }

      logger.info(`Scraped ${content.length} Instagram posts for ${competitor.name}`);
    } catch (error) {
      logger.error(`Error scraping Instagram posts for ${competitor.name}`, {
        error,
      });
      throw error;
    }

    return { content, apiCalls };
  }

  /**
   * Scrape Instagram Reels from competitor's profile
   */
  async scrapeInstagramReels(
    competitor: Competitor
  ): Promise<{ content: InstagramReelContent[]; apiCalls: number }> {
    const content: InstagramReelContent[] = [];
    let apiCalls = 0;

    try {
      if (!competitor.instagramHandle) {
        logger.warn(`Competitor ${competitor.name} missing Instagram handle`);
        return { content: [], apiCalls: 0 };
      }

      // Get Instagram user ID from handle
      const userResponse = await this.facebookApiClient.get<any>('/ig_user_search', {
        user_name: competitor.instagramHandle.replace('@', ''),
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
      });

      apiCalls++;

      if (!userResponse?.data?.[0]?.id) {
        logger.warn(`Could not find Instagram user for ${competitor.instagramHandle}`);
        return { content: [], apiCalls: 0 };
      }

      const userId = userResponse.data[0].id;

      // Fetch reels from Instagram Graph API
      const reelsResponse = await this.facebookApiClient.get<any>(`/${userId}`, {
        fields: 'media.limit(25){media_type,media_url,caption,timestamp,like_count,comments_count,video_duration}',
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
      });

      apiCalls++;

      if (reelsResponse?.media?.data) {
        for (const media of reelsResponse.media.data) {
          try {
            if (media.media_type !== 'VIDEO' && media.media_type !== 'REELS') {
              continue; // Skip non-video content
            }

            const reel = media;

            content.push({
              reelId: reel.id,
              profileId: userId,
              caption: reel.caption || '',
              videoUrl: reel.media_url || '',
              thumbnailUrl: `https://graph.instagram.com/${reel.id}/picture`,
              duration: reel.video_duration || 0,
              createdTime: new Date(reel.timestamp),
              engagementMetrics: {
                plays: 0, // Instagram doesn't expose play counts via API
                likes: reel.like_count || 0,
                comments: reel.comments_count || 0,
                shares: 0,
                saves: 0,
              },
            });
          } catch (error) {
            logger.warn(`Could not process reel for ${competitor.instagramHandle}`, { error });
          }
        }
      }

      logger.info(`Scraped ${content.length} Instagram reels for ${competitor.name}`);
    } catch (error) {
      logger.error(`Error scraping Instagram reels for ${competitor.name}`, {
        error,
      });
      throw error;
    }

    return { content, apiCalls };
  }

  /**
   * Deduplicates content based on content type
   */
  private async deduplicateContent(
    content: Array<
      | FacebookAdContent
      | FacebookPostContent
      | InstagramPostContent
      | InstagramReelContent
      | InstagramAdContent
    >,
    contentType: string,
    competitorId: string
  ): Promise<
    Array<
      | FacebookAdContent
      | FacebookPostContent
      | InstagramPostContent
      | InstagramReelContent
      | InstagramAdContent
    >
  > {
    const deduplicated = [];

    for (const item of content) {
      let platformContentId: string | undefined;
      let isDuplicate = false;

      // Determine how to identify duplicates based on content type
      if (contentType === 'facebook_ad' || contentType === 'instagram_ad') {
        // For ads, use hash of copy + CTA
        const adItem = item as FacebookAdContent | InstagramAdContent;
        const adCopy = 'adCopy' in adItem ? adItem.adCopy : ('description' in adItem ? adItem.description : '');
        const copyText = [adItem.headline, adCopy]
          .filter(Boolean)
          .join(' | ');
        platformContentId = this.hashContent(copyText + (adItem.callToAction || ''));

        // Check if this ad hash already exists
        const existing = await db.competitorAd.findUnique({
          where: {
            scrapeCreatorsId_platform_competitorId: {
              scrapeCreatorsId: platformContentId,
              platform: contentType.includes('instagram') ? 'instagram' : 'facebook',
              competitorId,
            },
          },
        });

        if (existing) {
          // Update lastSeenAt
          await db.competitorAd.update({
            where: { id: existing.id },
            data: { lastSeenAt: new Date() },
          });
          isDuplicate = true;
        }
      } else if (
        contentType === 'facebook_post' ||
        contentType === 'instagram_post' ||
        contentType === 'instagram_reel'
      ) {
        // For organic content, use platform-provided IDs
        if (contentType === 'facebook_post') {
          platformContentId = (item as FacebookPostContent).postId;
        } else if (contentType === 'instagram_post') {
          platformContentId = (item as InstagramPostContent).postId;
        } else if (contentType === 'instagram_reel') {
          platformContentId = (item as InstagramReelContent).reelId;
        }

        // Check if this content ID already exists
        const existing = await db.competitorAd.findUnique({
          where: {
            scrapeCreatorsId_platform_competitorId: {
              scrapeCreatorsId: platformContentId || '',
              platform: contentType.includes('instagram') ? 'instagram' : 'facebook',
              competitorId,
            },
          },
        });

        if (existing) {
          // Update lastSeenAt and engagement metrics for organic content
          await db.competitorAd.update({
            where: { id: existing.id },
            data: {
              lastSeenAt: new Date(),
              engagementMetrics: (item as FacebookPostContent | InstagramPostContent | InstagramReelContent)
                .engagementMetrics as Prisma.InputJsonValue,
            },
          });
          isDuplicate = true;
        }
      }

      if (!isDuplicate) {
        deduplicated.push(item);
      }
    }

    logger.debug(
      `Deduplication: ${content.length} items → ${deduplicated.length} new items for ${contentType}`
    );
    return deduplicated;
  }

  /**
   * Stores content in the database
   */
  private async storeContent(
    content: Array<
      | FacebookAdContent
      | FacebookPostContent
      | InstagramPostContent
      | InstagramReelContent
      | InstagramAdContent
    >,
    competitorId: string
  ): Promise<{ new: number; updated: number }> {
    let newCount = 0;
    let updatedCount = 0;

    for (const item of content) {
      try {
        let contentType: string = '';
        let platform: string = '';
        let contentSource: string = '';
        let platformContentId: string = '';
        let headline: string | undefined;
        let description: string | undefined;
        let primaryText: string | undefined;
        let callToAction: string | undefined;
        let destinationUrl: string | undefined;
        let imageUrl: string | undefined;
        let videoUrl: string | undefined;
        let creativeType = 'image';
        let engagementMetrics: any = null;
        let videoDuration: number | undefined;

        // Map content based on type
        if ('adId' in item && 'platforms' in item) {
          // Ad content (Facebook or Instagram)
          const adItem = item as FacebookAdContent | InstagramAdContent;
          const adCopy = 'adCopy' in adItem ? adItem.adCopy : ('description' in adItem ? adItem.description : '');

          contentType = adItem.platforms?.includes('instagram')
            ? 'instagram_ad'
            : 'facebook_ad';
          platform = adItem.platforms?.includes('instagram') ? 'instagram' : 'facebook';
          contentSource = 'ads_library';
          platformContentId = this.hashContent(
            [adItem.headline, adCopy]
              .filter(Boolean)
              .join(' | ') + (adItem.callToAction || '')
          );
          headline = adItem.headline;
          description = adCopy;
          callToAction = adItem.callToAction;
          destinationUrl = adItem.landingUrl;
          imageUrl = 'imageUrls' in adItem ? adItem.imageUrls?.[0] : undefined;
          videoUrl = 'videoUrl' in adItem ? adItem.videoUrl : undefined;
          if ('creativeUrls' in adItem && adItem.creativeUrls?.length) {
            creativeType = 'carousel';
          }
        } else if ('postId' in item && 'pageId' in item) {
          // Facebook post
          contentType = 'facebook_post';
          platform = 'facebook';
          contentSource = 'page_feed';
          platformContentId = item.postId;
          primaryText = item.text;
          imageUrl = item.imageUrls?.[0];
          videoUrl = item.videoUrl;
          engagementMetrics = item.engagementMetrics;
        } else if ('postId' in item && 'profileId' in item && !('reelId' in item)) {
          // Instagram post
          contentType = 'instagram_post';
          platform = 'instagram';
          contentSource = 'profile_feed';
          platformContentId = item.postId;
          primaryText = item.caption;
          imageUrl = item.imageUrls?.[0];
          engagementMetrics = item.engagementMetrics;
        } else if ('reelId' in item) {
          // Instagram reel
          const reelItem = item as InstagramReelContent;
          contentType = 'instagram_reel';
          platform = 'instagram';
          contentSource = 'profile_feed';
          platformContentId = reelItem.reelId;
          primaryText = reelItem.caption;
          videoUrl = reelItem.videoUrl;
          creativeType = 'video';
          engagementMetrics = reelItem.engagementMetrics;
          videoDuration = reelItem.duration;
        }

        // Store in database
        await db.competitorAd.create({
          data: {
            competitorId,
            scrapeCreatorsId: platformContentId,
            contentType,
            platform,
            contentSource,
            platformContentId,
            headline,
            description,
            primaryText,
            callToAction,
            destinationUrl,
            imageUrl,
            videoUrl,
            creativeType,
            engagementMetrics: engagementMetrics as Prisma.InputJsonValue,
            videoDuration,
            firstSeenAt: new Date(),
            lastSeenAt: new Date(),
            rawData: item as unknown as Prisma.InputJsonValue,
          },
        });

        newCount++;
      } catch (error) {
        logger.error(`Error storing content item`, { error, item });
      }
    }

    return { new: newCount, updated: updatedCount };
  }

  /**
   * Helper function to hash content for deduplication
   */
  private hashContent(content: string): string {
    return crypto.createHash('md5').update(content).digest('hex');
  }
}
