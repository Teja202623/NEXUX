import {
  FacebookAdContent,
  FacebookPostContent,
  InstagramAdContent,
  InstagramPostContent,
  InstagramReelContent,
} from '@/types/scrapeCreators.types';
import { Competitor } from '@prisma/client';

/**
 * Mock Data Fixtures for Testing
 */

export const mockCompetitors: Competitor[] = [
  {
    id: 'competitor-1',
    name: 'HubSpot',
    website: 'https://www.hubspot.com',
    domain: 'hubspot.com',
    linkedinUrl: 'https://www.linkedin.com/company/hubspot',
    facebookPageId: '23847826',
    instagramHandle: '@hubspot',
    industry: 'digital-marketing',
    trades: ['marketing', 'crm', 'sales'],
    status: 'active',
    lastScrapedAt: null,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: 'competitor-2',
    name: 'Neil Patel Digital',
    website: 'https://neilpatel.com',
    domain: 'neilpatel.com',
    linkedinUrl: null,
    facebookPageId: '179097428798347',
    instagramHandle: '@neilpatel',
    industry: 'digital-marketing',
    trades: ['seo', 'content-marketing'],
    status: 'active',
    lastScrapedAt: null,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
];

export const mockFacebookAds: FacebookAdContent[] = [
  {
    adId: 'fb-ad-1',
    headline: '10 Marketing Strategies That Actually Work',
    description:
      'Learn the proven strategies used by top digital marketers. Start your free trial today.',
    callToAction: 'LEARN_MORE',
    landingUrl: 'https://hubspot.com/webinar',
    imageUrls: ['https://example.com/fb-ad-1.jpg'],
    videoUrl: undefined,
    startDate: new Date('2024-01-01'),
    endDate: undefined,
    updatedAt: new Date('2024-01-15'),
    platforms: ['facebook'],
  },
  {
    adId: 'fb-ad-2',
    headline: 'Free CRM Software for Small Businesses',
    description:
      'Manage your customer relationships efficiently. No credit card required.',
    callToAction: 'SIGN_UP',
    landingUrl: 'https://hubspot.com/crm',
    imageUrls: [
      'https://example.com/fb-ad-2.jpg',
      'https://example.com/fb-ad-2b.jpg',
    ],
    videoUrl: 'https://example.com/fb-ad-2.mp4',
    startDate: new Date('2024-01-05'),
    endDate: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-16'),
    platforms: ['facebook'],
  },
  {
    adId: 'fb-ad-3',
    headline: 'Marketing Automation Made Simple',
    description: 'Save 10 hours per week with intelligent automation.',
    callToAction: 'SHOP_NOW',
    landingUrl: 'https://hubspot.com/automation',
    imageUrls: ['https://example.com/fb-ad-3.jpg'],
    startDate: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-17'),
    platforms: ['facebook'],
  },
];

export const mockFacebookPosts: FacebookPostContent[] = [
  {
    postId: 'fb-post-1',
    pageId: '23847826',
    text: 'Just launched our new marketing automation feature! Check it out and let us know what you think. 🚀',
    imageUrls: ['https://example.com/fb-post-1.jpg'],
    videoUrl: undefined,
    createdTime: new Date('2024-01-15T10:00:00Z'),
    engagementMetrics: {
      likes: 2500,
      comments: 180,
      shares: 420,
    },
    type: 'photo',
  },
  {
    postId: 'fb-post-2',
    pageId: '23847826',
    text: 'What are your biggest marketing challenges in 2024? Drop them in the comments below! 👇',
    imageUrls: [],
    videoUrl: undefined,
    createdTime: new Date('2024-01-14T15:30:00Z'),
    engagementMetrics: {
      likes: 1800,
      comments: 550,
      shares: 200,
    },
    type: 'status',
  },
  {
    postId: 'fb-post-3',
    pageId: '23847826',
    text: 'Check out our latest blog post on conversion optimization strategies',
    imageUrls: [],
    videoUrl: 'https://example.com/fb-post-3.mp4',
    createdTime: new Date('2024-01-13T09:00:00Z'),
    engagementMetrics: {
      likes: 3200,
      comments: 95,
      shares: 560,
    },
    type: 'video',
  },
];

export const mockInstagramPosts: InstagramPostContent[] = [
  {
    postId: 'ig-post-1',
    profileId: 'hubspot-profile',
    caption:
      'Your content strategy is your competitive advantage. Share your best tips! 💡 #Marketing #ContentStrategy',
    imageUrls: ['https://example.com/ig-post-1.jpg'],
    carouselImageUrls: undefined,
    createdTime: new Date('2024-01-15T14:00:00Z'),
    engagementMetrics: {
      likes: 5400,
      comments: 320,
      shares: 180,
      saves: 850,
    },
    contentTheme: 'educational',
  },
  {
    postId: 'ig-post-2',
    profileId: 'hubspot-profile',
    caption:
      'Real businesses, real results. See how our customers are crushing their goals 🎯',
    imageUrls: [
      'https://example.com/ig-post-2-1.jpg',
      'https://example.com/ig-post-2-2.jpg',
      'https://example.com/ig-post-2-3.jpg',
    ],
    carouselImageUrls: [
      'https://example.com/ig-post-2-1.jpg',
      'https://example.com/ig-post-2-2.jpg',
      'https://example.com/ig-post-2-3.jpg',
    ],
    createdTime: new Date('2024-01-13T16:45:00Z'),
    engagementMetrics: {
      likes: 7200,
      comments: 450,
      shares: 320,
      saves: 1200,
    },
    contentTheme: 'social_proof',
  },
  {
    postId: 'ig-post-3',
    profileId: 'hubspot-profile',
    caption:
      'Quick tip: Use emotional triggers in your copy to boost engagement rates by 40%+ 📈',
    imageUrls: ['https://example.com/ig-post-3.jpg'],
    createdTime: new Date('2024-01-12T11:20:00Z'),
    engagementMetrics: {
      likes: 4100,
      comments: 210,
      shares: 95,
      saves: 620,
    },
    contentTheme: 'tips',
  },
];

export const mockInstagramReels: InstagramReelContent[] = [
  {
    reelId: 'ig-reel-1',
    profileId: 'hubspot-profile',
    caption:
      'The #1 mistake marketers make when writing email subject lines 🚫 #MarketingTips',
    videoUrl: 'https://example.com/ig-reel-1.mp4',
    thumbnailUrl: 'https://example.com/ig-reel-1-thumb.jpg',
    duration: 23,
    createdTime: new Date('2024-01-15T18:30:00Z'),
    engagementMetrics: {
      plays: 45000,
      likes: 8200,
      comments: 520,
      shares: 380,
      saves: 1500,
    },
  },
  {
    reelId: 'ig-reel-2',
    profileId: 'hubspot-profile',
    caption:
      'This conversion rate optimization technique changed everything for our clients 🔥',
    videoUrl: 'https://example.com/ig-reel-2.mp4',
    thumbnailUrl: 'https://example.com/ig-reel-2-thumb.jpg',
    duration: 31,
    createdTime: new Date('2024-01-14T12:15:00Z'),
    engagementMetrics: {
      plays: 62000,
      likes: 11500,
      comments: 780,
      shares: 620,
      saves: 2100,
    },
  },
  {
    reelId: 'ig-reel-3',
    profileId: 'hubspot-profile',
    caption: 'How to write compelling ad copy in 60 seconds ⏱️',
    videoUrl: 'https://example.com/ig-reel-3.mp4',
    thumbnailUrl: 'https://example.com/ig-reel-3-thumb.jpg',
    duration: 58,
    createdTime: new Date('2024-01-13T09:45:00Z'),
    engagementMetrics: {
      plays: 38000,
      likes: 6800,
      comments: 420,
      shares: 310,
      saves: 980,
    },
  },
];

export const mockInstagramAds: InstagramAdContent[] = [
  {
    adId: 'ig-ad-1',
    accountId: '@hubspot',
    headline: 'Sales Software for Modern Business',
    adCopy:
      'Manage your sales pipeline and close deals faster. Try free for 14 days.',
    callToAction: 'SIGN_UP',
    landingUrl: 'https://hubspot.com/sales',
    creativeUrls: ['https://example.com/ig-ad-1.jpg'],
    startDate: new Date('2024-01-10'),
    platforms: ['instagram', 'facebook'],
  },
  {
    adId: 'ig-ad-2',
    accountId: '@hubspot',
    headline: 'Email Marketing That Actually Works',
    adCopy:
      'Build beautiful campaigns and watch your revenue grow. Start free today.',
    callToAction: 'LEARN_MORE',
    landingUrl: 'https://hubspot.com/email-marketing',
    creativeUrls: [
      'https://example.com/ig-ad-2-1.jpg',
      'https://example.com/ig-ad-2-2.jpg',
    ],
    startDate: new Date('2024-01-12'),
    platforms: ['instagram'],
  },
  {
    adId: 'ig-ad-3',
    accountId: '@hubspot',
    headline: 'Inbound Marketing Course',
    adCopy:
      'Learn the fundamentals of inbound marketing from industry experts. Enroll now.',
    callToAction: 'SHOP_NOW',
    landingUrl: 'https://hubspot.com/academy',
    creativeUrls: ['https://example.com/ig-ad-3.jpg'],
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-02-01'),
    platforms: ['instagram', 'facebook'],
  },
];

/**
 * Mock API Responses for Testing
 */

export const mockMetaAdLibraryResponse = {
  data: {
    data: mockFacebookAds.map((ad) => ({
      id: ad.adId,
      created_time: ad.startDate.toISOString(),
      updated_time: ad.updatedAt.toISOString(),
      creative_spec: [
        {
          headline: ad.headline,
          body: ad.description,
          call_to_action_type: ad.callToAction,
          link_url: ad.landingUrl,
          image_url: ad.imageUrls[0],
          video_url: ad.videoUrl,
        },
      ],
    })),
    paging: {
      cursors: {
        before: 'MAZDZD',
        after: 'MZDZD',
      },
    },
  },
};

export const mockFacebookGraphResponse = {
  data: {
    data: mockFacebookPosts.map((post) => ({
      id: post.postId,
      message: post.text,
      type: post.type,
      created_time: Math.floor(post.createdTime.getTime() / 1000).toString(),
      permalink_url: `https://facebook.com/${post.pageId}/posts/${post.postId}`,
      picture: post.imageUrls[0],
      likes: {
        summary: {
          total_count: post.engagementMetrics.likes,
        },
      },
      comments: {
        summary: {
          total_count: post.engagementMetrics.comments,
        },
      },
      shares: {
        count: post.engagementMetrics.shares,
      },
    })),
  },
};

export const mockInstagramGraphResponse = {
  data: {
    data: mockInstagramPosts.map((post) => ({
      id: post.postId,
      caption: post.caption,
      media_type: 'IMAGE',
      media_url: post.imageUrls[0],
      timestamp: post.createdTime.toISOString(),
      like_count: post.engagementMetrics.likes,
      comments_count: post.engagementMetrics.comments,
    })),
  },
};

export const mockInstagramReelsResponse = {
  data: {
    ig_reel_ids: mockInstagramReels.map((reel) => reel.reelId),
  },
};

export const mockInstagramReelDetailsResponse = (reel: InstagramReelContent) => ({
  data: {
    id: reel.reelId,
    caption: reel.caption,
    media_url: reel.videoUrl,
    timestamp: reel.createdTime.toISOString(),
    video_duration: reel.duration,
    like_count: reel.engagementMetrics.likes,
    comments_count: reel.engagementMetrics.comments,
  },
});

/**
 * Expected Test Results
 */

export const expectedScrapeResult = {
  success: true,
  competitorsProcessed: mockCompetitors.length,
  totalAdsFound: mockFacebookAds.length + mockInstagramAds.length,
  totalAdsStored: mockFacebookAds.length + mockInstagramAds.length,
  newAdsCount: mockFacebookAds.length + mockInstagramAds.length,
  updatedAdsCount: 0,
  breakdown: {
    facebookAds: mockFacebookAds.length,
    facebookPosts: mockFacebookPosts.length,
    instagramAds: mockInstagramAds.length,
    instagramPosts: mockInstagramPosts.length,
    instagramReels: mockInstagramReels.length,
  },
  errors: [],
  apiCallsUsed: 5,
  duration: expect.any(Number),
};
