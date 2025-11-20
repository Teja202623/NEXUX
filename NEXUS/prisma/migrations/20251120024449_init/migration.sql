-- CreateTable
CREATE TABLE "Competitor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "linkedinUrl" TEXT,
    "facebookPageId" TEXT,
    "instagramHandle" TEXT,
    "industry" TEXT NOT NULL DEFAULT 'digital-marketing',
    "trades" TEXT[],
    "status" TEXT NOT NULL DEFAULT 'active',
    "lastScrapedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Competitor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitorAd" (
    "id" TEXT NOT NULL,
    "competitorId" TEXT NOT NULL,
    "scrapeCreatorsId" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "contentType" TEXT NOT NULL,
    "contentSource" TEXT NOT NULL,
    "headline" TEXT,
    "description" TEXT,
    "primaryText" TEXT,
    "callToAction" TEXT,
    "destinationUrl" TEXT,
    "imageUrl" TEXT,
    "videoUrl" TEXT,
    "creativeType" TEXT NOT NULL,
    "platformContentId" TEXT,
    "engagementMetrics" JSONB,
    "videoDuration" INTEGER,
    "firstSeenAt" TIMESTAMP(3) NOT NULL,
    "lastSeenAt" TIMESTAMP(3) NOT NULL,
    "rawData" JSONB NOT NULL,
    "isAnalyzed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompetitorAd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdAnalysis" (
    "id" TEXT NOT NULL,
    "adId" TEXT NOT NULL,
    "competitorId" TEXT NOT NULL,
    "copyLength" INTEGER NOT NULL,
    "copyHooks" TEXT[],
    "copySentiment" TEXT NOT NULL,
    "emotionalTriggers" TEXT[],
    "keywords" TEXT[],
    "creativeType" TEXT NOT NULL,
    "visualThemes" TEXT[],
    "ctaType" TEXT NOT NULL,
    "ctaUrgency" TEXT NOT NULL,
    "contentThemes" TEXT[],
    "industryTopics" TEXT[],
    "performanceScore" INTEGER NOT NULL,
    "estimatedEngagement" TEXT NOT NULL,
    "keyTakeaways" TEXT[],
    "reusableAngle" TEXT,
    "confidence" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentPattern" (
    "id" TEXT NOT NULL,
    "patternType" TEXT NOT NULL,
    "patternName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "examples" TEXT[],
    "occurrences" INTEGER NOT NULL,
    "lastSeen" TIMESTAMP(3) NOT NULL,
    "avgPerformanceScore" INTEGER NOT NULL,
    "recommendation" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "applicableIndustries" TEXT[],
    "discoveredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContentPattern_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyInsight" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "topPatterns" JSONB NOT NULL,
    "newPatternsFound" INTEGER NOT NULL,
    "recommendedAngles" TEXT[],
    "urgentTrends" TEXT[],
    "newAdsDiscovered" INTEGER NOT NULL,
    "competitorsActive" INTEGER NOT NULL,
    "mostActiveCompetitors" TEXT[],
    "trendSummary" TEXT NOT NULL,
    "hotTopics" TEXT[],
    "confidenceScore" INTEGER NOT NULL,
    "actionability" TEXT NOT NULL,
    "detailedAnalysis" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DailyInsight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitorActivity" (
    "id" TEXT NOT NULL,
    "competitorId" TEXT NOT NULL,
    "activityType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" JSONB,
    "activityDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompetitorActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScrapeLog" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "competitorsProcessed" INTEGER NOT NULL,
    "adsFound" INTEGER NOT NULL,
    "adsStored" INTEGER NOT NULL,
    "newAdsInserted" INTEGER NOT NULL,
    "adsUpdated" INTEGER NOT NULL,
    "errorCount" INTEGER NOT NULL DEFAULT 0,
    "errors" TEXT[],
    "status" TEXT NOT NULL,
    "apiCallsUsed" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScrapeLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalysisLog" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "adsProcessed" INTEGER NOT NULL,
    "adsAnalyzed" INTEGER NOT NULL,
    "newPatternsFound" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "errors" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalysisLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsightLog" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "insightGenerated" BOOLEAN NOT NULL,
    "topPatterns" INTEGER NOT NULL,
    "newAds" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InsightLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Competitor_name_key" ON "Competitor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Competitor_domain_key" ON "Competitor"("domain");

-- CreateIndex
CREATE INDEX "Competitor_status_idx" ON "Competitor"("status");

-- CreateIndex
CREATE INDEX "Competitor_lastScrapedAt_idx" ON "Competitor"("lastScrapedAt");

-- CreateIndex
CREATE INDEX "CompetitorAd_competitorId_idx" ON "CompetitorAd"("competitorId");

-- CreateIndex
CREATE INDEX "CompetitorAd_isAnalyzed_idx" ON "CompetitorAd"("isAnalyzed");

-- CreateIndex
CREATE INDEX "CompetitorAd_contentType_idx" ON "CompetitorAd"("contentType");

-- CreateIndex
CREATE INDEX "CompetitorAd_contentSource_idx" ON "CompetitorAd"("contentSource");

-- CreateIndex
CREATE UNIQUE INDEX "CompetitorAd_scrapeCreatorsId_platform_competitorId_key" ON "CompetitorAd"("scrapeCreatorsId", "platform", "competitorId");

-- CreateIndex
CREATE UNIQUE INDEX "AdAnalysis_adId_key" ON "AdAnalysis"("adId");

-- CreateIndex
CREATE INDEX "AdAnalysis_competitorId_idx" ON "AdAnalysis"("competitorId");

-- CreateIndex
CREATE INDEX "ContentPattern_patternType_idx" ON "ContentPattern"("patternType");

-- CreateIndex
CREATE UNIQUE INDEX "DailyInsight_date_key" ON "DailyInsight"("date");

-- CreateIndex
CREATE INDEX "CompetitorActivity_competitorId_idx" ON "CompetitorActivity"("competitorId");

-- CreateIndex
CREATE INDEX "ScrapeLog_jobId_idx" ON "ScrapeLog"("jobId");

-- AddForeignKey
ALTER TABLE "CompetitorAd" ADD CONSTRAINT "CompetitorAd_competitorId_fkey" FOREIGN KEY ("competitorId") REFERENCES "Competitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdAnalysis" ADD CONSTRAINT "AdAnalysis_adId_fkey" FOREIGN KEY ("adId") REFERENCES "CompetitorAd"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdAnalysis" ADD CONSTRAINT "AdAnalysis_competitorId_fkey" FOREIGN KEY ("competitorId") REFERENCES "Competitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitorActivity" ADD CONSTRAINT "CompetitorActivity_competitorId_fkey" FOREIGN KEY ("competitorId") REFERENCES "Competitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
