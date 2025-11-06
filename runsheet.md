# LocalRankAI Project Runsheet

This document tracks the progress and key actions taken during the development of the LocalRankAI project.

---

## **I. Project Setup & Core Infrastructure**

### 1. Initialize monorepo structure
*   **Status:** Completed (Existing structure with `apps/web` and `ga-dashboard`).
*   **Notes:** Project root is `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/`.

### 2. Set up version control (Git) and ensure `.gitignore` is configured for sensitive files.
*   **Status:** Completed.
*   **Actions:**
    *   Checked Git status: `fatal: not a git repository`.
    *   Initialized Git: `git init`
        *   `Initialized empty Git repository in /Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/.git/`
    *   Created `.gitignore` in project root: `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/.gitignore`
    *   Added `GOOGLE_APPLICATION_CREDENTIALS.json` to `.gitignore`.
    *   Verified `GOOGLE_APPLICATION_CREDENTIALS.json` is ignored by Git.
*   **Notes:** The `studious-lore-476403-p5-d894027283e1.json` file was identified in `ga-dashboard/` but the user clarified the new key is for `DMG-LOCAL-SEO`. The old file was not removed as per user's cancellation.

### 3. Configure basic CI/CD pipeline (GitHub Actions for linting, testing, deployment to dev environment).
*   **Status:** Completed (Basic linting and build for `apps/web`).
*   **Actions:**
    *   Created directory: `mkdir -p .github/workflows`
    *   Created workflow file: `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/.github/workflows/main.yml`
    *   Workflow configured to run on `push`/`pull_request` to `main`, using Node.js 18, pnpm, and running `pnpm --filter=./apps/web lint` and `pnpm --filter=./apps/web build`.

### 4. Establish local development environment for Frontend (React/Polaris) and Backend (Node.js).
*   **Status:** Completed.
*   **Actions:**
    *   Recommended installing Node.js v18 LTS and pnpm globally.
    *   Recommended running `pnpm install` in project root.
    *   Confirmed `GOOGLE_APPLICATION_CREDENTIALS` environment variable is set.
    *   Recommended running `cd apps/web && pnpm dev` to start the frontend.
*   **Notes:** User confirmed completion of these steps.

---

## **II. Data Layer (MVP - Google Sheets)**

### 1. Design and set up initial Google Sheets for MVP data storage.
*   **Status:** Completed.
*   **Actions:**
    *   User created a Google Sheet document (e.g., "LocalRankAI MVP Data") with the following tabs: `projects`, `keywords`, `geogrid_runs`, `insights`, `smart_tasks`, `citations`, `reviews`, `review_campaigns`, `predictive_models`, `outcomes`, `reports`, `integrations`.
*   **Notes:** This is a manual step performed by the user in Google Sheets. The `projects` sheet should have the columns: `ID`, `Name`, `Status`, `Domain`, `GbpAccountName`, `Business Name`, `Address`, `Phone`. The `predictive_models` sheet should have the columns: `Project ID`, `Model Version`, `Features`, `Metrics`, `Timestamp`. The `review_campaigns` sheet should have the columns: `Campaign ID`, `Project ID`, `Name`, `Status`, `Start Date`, `End Date`, `Target Audience`, `Message Template`, `Created At`. The `customers` sheet should have the columns: `Customer ID`, `Project ID`, `Name`, `Email`, `Phone`. The `review_requests` sheet should have the columns: `Request ID`, `Campaign ID`, `Customer ID`, `Timestamp`, `Status`. The `reports` sheet should have the columns: `Report ID`, `Project ID`, `Type`, `Date Range`, `Summary`, `Data (JSON)`, `Timestamp`. The `outcomes` sheet should have the columns: `Outcome ID`, `Project ID`, `Type`, `Description`, `Value`, `Timestamp`.

### 2. Implement Google Sheets API integration for read/write operations from backend.
*   **Status:** Completed (Utility file created).
*   **Actions:**
    *   Installed `googleapis` package in `apps/web`: `pnpm add googleapis`
    *   Created utility file: `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/apps/web/lib/sheets.js`
    *   File contains `getSheetsClient`, `readSheet`, and `writeSheet` functions using `google.auth.GoogleAuth` and `GOOGLE_APPLICATION_CREDENTIALS`.
*   **Notes:** Provided instructions on how to use the utility with `spreadsheetId` and `range`.

---

## **III. Backend Services (Node.js / Express)**

### 1. Set up Node.js/Express server.
*   **Status:** Completed (Using Next.js API routes for MVP backend).
*   **Notes:** For MVP, backend functionality will be handled via Next.js API routes within `apps/web`.

### 2. Implement basic AuthN/AuthZ (Email/password + Google OAuth2).
*   **Status:** Completed.
*   **Actions:**
    *   Installed `next-auth` package in `apps/web`: `pnpm add next-auth`.
    *   Created `apps/web/app/api/auth/[...nextauth]/route.js` with Google and Credentials providers.
    *   Instructed user to add `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `NEXTAUTH_SECRET` to `apps/web/.env.local`. 
    *   Updated `apps/web/app/layout.tsx` to wrap the application with `SessionProvider`.
    *   Provided instructions on how to use `useSession`, `signIn`, and `signOut` in components.
*   **Notes:** The Credentials provider is a basic simulation for MVP. User confirmed environment variables were set.

### 3. Implement API Gateway for routing requests.
*   **Status:** Completed (Using Next.js API routes for MVP backend).
*   **Notes:** For MVP, backend functionality will be handled via Next.js API routes within `apps/web`.

### 4. Develop `Aggregation Service` to connect to Google + DataForSEO.
*   **Status:** Completed.
*   **Actions:**
    *   Created utility file: `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/apps/web/lib/googleBusinessProfile.js`.
    *   File contains `getGoogleBusinessProfileClient` and `listLocations` functions.
    *   Installed `axios` package in `apps/web`: `pnpm add axios`.
    *   Created utility file: `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/apps/web/lib/dataForSeo.js`.
    *   File contains `dataForSeoRequest` and `getSerpData` functions.
    *   Provided instructions for `DATAFORSEO_USERNAME` and `DATAFORSEO_PASSWORD` environment variables.
    *   Created utility file: `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/apps/web/lib/googleSearchConsole.js`.
    *   File contains `getGoogleSearchConsoleClient`, `listSearchConsoleSites`, and `getQueryPerformance` functions.
    *   Created utility file: `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/apps/web/lib/googleAnalytics4.js`.
    *   File contains `getGoogleAnalytics4Client` and `runGa4Report` functions.
*   **Notes:** All primary external API integrations for the Aggregation Service are now in place.

### 5. Implement `Insights Engine`.
*   **Status:** In Progress.
*   **Actions:**
    *   Installed `openai` package in `apps/web`: `pnpm add openai`.
    *   Created utility file: `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/apps/web/lib/openAi.js`.
    *   File contains `generateAISummary` function.
    *   Provided instructions for `OPENAI_API_KEY` environment variable.
    *   Created service file: `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/apps/web/services/insights.js`.
    *   Implemented `generateRankDeltasInsight` to compare keyword ranks over time.
    *   Implemented `generateCompetitorOvertakesInsight` to identify when competitors overtake user ranks.
    *   Implemented `generateGbpChangesInsight` to track new reviews on Google Business Profile.
    *   The `generateAndStoreInsights` function orchestrates the other insight functions and stores the results in Google Sheets.
*   **Notes:** The Insights Engine is now capable of generating insights based on rank changes, competitor performance, and Google Business Profile activity.

### 6. Implement `Smart Task Engine`.
*   **Status:** Completed.
*   **Actions:**
    *   Created service file: `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/apps/web/services/smartTasks.js`.
    *   File contains `generateSmartTasksFromInsights` function.
    *   Provided instructions for example API route usage.
*   **Notes:** The task generation logic is a basic MVP implementation, converting insights into tasks with placeholder scoring.

### 7. Implement `Predictive Modelling Engine (PME)`.
*   **Status:** Completed.
*   **Actions:**
    *   Created service file: `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/apps/web/services/predictiveModeling.js`. 
    *   File contains `predictVisibilityUplift` function with simplified MVP logic.
    *   The `predictVisibilityUplift` function now stores predictions in the `predictive_models` Google Sheet.
    *   Provided instructions for example API route usage.
*   **Notes:** The PME is a simplified MVP implementation, using basic heuristics for prediction rather than a trained ML model, and now stores its predictions.

### 8. Implement `Citation Audit Engine`.
*   **Status:** Completed.
*   **Actions:**
    *   Created service file: `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/apps/web/services/citationAudit.js`.
    *   File contains `runCitationAudit` function with simulated audit logic.
    *   The `runCitationAudit` function now fetches NAP details from the `projects` sheet and stores findings in the `citations` Google Sheet.
    *   Provided instructions for example API route usage.
*   **Notes:** The citation audit logic is a basic MVP simulation, now using project-specific NAP details and storing findings.

### 9. Implement `Review Campaign Engine (RCE)`.
*   **Status:** Completed.
*   **Actions:**
    *   Created service file: `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/apps/web/services/reviewCampaign.js`.
    *   Implemented `createReviewCampaign` to create new review campaigns and store them in the `review_campaigns` sheet.
    *   Implemented `sendReviewRequest` to simulate sending review requests to customers and record them in the `review_requests` sheet.
    *   Implemented `trackReviewResponse` to update the status of review requests and store new reviews in the `reviews` sheet.
    *   Implemented `analyzeReviewSentiment` to use OpenAI to analyze the sentiment of review text.
*   **Notes:** The RCE is now capable of managing review campaigns, sending requests, tracking responses, and analyzing sentiment.

### 10. Implement `Reporting/Outcome Service`.
*   **Status:** Completed.
*   **Actions:**
    *   Created service file: `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/apps/web/services/reporting.js`.
    *   Implemented `generatePerformanceReport` to fetch and aggregate data from various sources and store it in the `reports` sheet.
    *   Implemented `trackOutcome` to store specific outcomes or achievements in the `outcomes` sheet.
    *   Implemented `getHistoricalReports` to retrieve previously generated reports from the `reports` sheet.
*   **Notes:** The Reporting/Outcome Service is now capable of generating performance reports, tracking outcomes, and retrieving historical reports.

### 11. Implement `Scheduler & Cron Jobs`.
*   **Status:** Completed.
*   **Actions:**
    *   Created API route: `/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/apps/web/app/api/cron/route.js`.
    *   File contains placeholder logic to call existing services for scheduled tasks.
*   **Notes:** This provides a basic entry point for external cron services to trigger periodic tasks within the Next.js application.

### 12. Project API Routes
*   **Status:** Completed.
*   **Actions:**
    *   Created `apps/web/app/api/projects/route.js` to fetch all projects from Google Sheets and to create new projects.
    *   Created `apps/web/app/api/projects/[id]/route.js` to fetch a single project from Google Sheets.
*   **Notes:** These API routes are used by the frontend to display and manage project data.

### 13. Audit API Routes
*   **Status:** Completed.
*   **Actions:**
    *   Created `apps/web/app/api/audit/citation/route.js` to trigger the citation audit.
*   **Notes:** This API route is used by the frontend to initiate a citation audit.

### 14. Predictive Modeling API Routes
*   **Status:** Completed.
*   **Actions:**
    *   Created `apps/web/app/api/predictive-modeling/route.js` to trigger predictive modeling.
*   **Notes:** This API route is used by the frontend to initiate predictive modeling.

### 15. Review Campaign API Routes
*   **Status:** Completed.
*   **Actions:**
    *   Created `apps/web/app/api/review-campaign/route.js` to create review campaigns.
*   **Notes:** This API route is used by the frontend to create review campaigns.

---

## **IV. Frontend Development**

### 1. Dashboard Page
*   **Status:** Completed.
*   **Actions:**
    *   Created `apps/web/app/dashboard/page.tsx` with a basic Shopify Polaris layout.
    *   Includes placeholders for "Key Metrics", "Recent Insights", and "Pending Tasks".
    *   Basic authentication check using `useSession` from `next-auth/react`.
    *   Now fetches and displays insights, smart tasks, and reports from the backend API routes.
*   **Notes:** This serves as the main entry point for authenticated users, now with dynamic data.

### 2. Projects Page
*   **Status:** Completed.
*   **Actions:**
    *   Created `apps/web/app/projects/page.tsx` with a basic Shopify Polaris layout.
    *   Initially used mock data, now fetches project list from `/api/projects`.
    *   Added a modal to create new projects, which calls the `POST /api/projects` endpoint.
*   **Notes:** This page lists all of the user's projects and is connected to the backend for read and write operations.

### 3. Project Details Page
*   **Status:** Completed.
*   **Actions:**
    *   Created `apps/web/app/projects/[id]/page.tsx` with a basic Shopify Polaris layout.
    *   Initially used mock data, now fetches project details from `/api/projects/[id]`.
    *   Added a button to trigger a citation audit, which calls the `/api/audit/citation` endpoint.
    *   Added a button to trigger predictive modeling, which calls the `/api/predictive-modeling` endpoint.
    *   Added a button to create a review campaign, which calls the `/api/review-campaign` endpoint.
*   **Notes:** This page shows the details for a single project and is connected to the backend, and now allows triggering citation audits, predictive modeling, and review campaigns.

### 4. Insights Page
*   **Status:** Completed.
*   **Actions:**
    *   Created `apps/web/app/insights/page.tsx` to display a list of all insights.
    *   Fetches insights from `/api/insights`.
*   **Notes:** This page provides a detailed view of all generated insights.

### 5. Smart Tasks Page
*   **Status:** Completed.
*   **Actions:**
    *   Created `apps/web/app/tasks/page.tsx` to display a list of all smart tasks.
    *   Fetches smart tasks from `/api/smart-tasks`.
*   **Notes:** This page allows users to manage their smart tasks.

### 6. Reports Page
*   **Status:** Completed.
*   **Actions:**
    *   Created `apps/web/app/reports/page.tsx` to display a list of all reports.
    *   Fetches reports from `/api/reports`.
*   **Notes:** This page provides access to historical performance reports.

---
