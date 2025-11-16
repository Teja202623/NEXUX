/**
 * Facebook Ad Content
 */
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

/**
 * Facebook Post Content (Organic)
 */
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

/**
 * Instagram Post Content (Organic)
 */
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

/**
 * Instagram Reel Content (Organic Video)
 */
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

/**
 * Instagram Ad Content
 */
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

/**
 * Result from scraping all competitors
 */
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
  duration: number; // in milliseconds
}

/**
 * Result from scraping a single competitor
 */
export interface CompetitorScrapeResult {
  competitorId: string;
  totalFound: number;
  totalStored: number;
  newInserted: number;
  updated: number;
  breakdown: {
    facebookAds: number;
    facebookPosts: number;
    instagramAds: number;
    instagramPosts: number;
    instagramReels: number;
  };
  errors: string[];
  apiCallsUsed: number;
}

/**
 * Union type for all content types
 */
export type CompetitorContent =
  | FacebookAdContent
  | FacebookPostContent
  | InstagramPostContent
  | InstagramReelContent
  | InstagramAdContent;

/**
 * Content type enum
 */
export enum ContentType {
  FACEBOOK_AD = 'facebook_ad',
  FACEBOOK_POST = 'facebook_post',
  INSTAGRAM_AD = 'instagram_ad',
  INSTAGRAM_POST = 'instagram_post',
  INSTAGRAM_REEL = 'instagram_reel',
}

/**
 * Content source enum
 */
export enum ContentSource {
  ADS_LIBRARY = 'ads_library',
  PAGE_FEED = 'page_feed',
  PROFILE_FEED = 'profile_feed',
}

/**
 * Platform enum
 */
export enum Platform {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
}
