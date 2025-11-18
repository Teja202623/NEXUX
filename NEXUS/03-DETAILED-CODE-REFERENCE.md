# NEXUS - DETAILED CODE REFERENCE
## Complete Code Examples for Every Service

**Purpose:** Working code examples you can copy directly into your NEXUS project

---

## FILE 1: src/config/env.ts

Complete environment validation with Zod schema:

```typescript
import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().transform(Number).default('3001'),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
  SCRAPE_CREATORS_API_KEY: z.string().min(1, 'API key is required'),
  SCRAPE_CREATORS_BASE_URL: z.string().url().default('https://api.scrapecreators.com'),
  JWT_SECRET: z.string().min(1),
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']).default('info'),
  MAIN_PLATFORM_API_URL: z.string().url().optional(),
  MAIN_PLATFORM_API_KEY: z.string().optional(),
});

type Environment = z.infer<typeof envSchema>;

let env: Environment;

try {
  env = envSchema.parse(process.env);
} catch (error) {
  console.error('Environment validation failed');
  process.exit(1);
}

export default env;
```

---

## FILE 2: src/utils/logger.ts

Winston logger configured with file and console output:

```typescript
import winston from 'winston';
import env from '@/config/env';

const logger = winston.createLogger({
  level: env.LOG_LEVEL,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'nexus' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    new winston.transports.Console({
      format: env.NODE_ENV === 'production'
        ? winston.format.json()
        : winston.format.combine(winston.format.colorize(), winston.format.simple()),
    }),
  ],
});

export default logger;
```

---

## FILE 3: src/utils/apiClient.ts

Axios HTTP client with automatic retry logic:

```typescript
import axios, { AxiosInstance, AxiosError } from 'axios';
import env from '@/config/env';
import logger from './logger';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export class ApiClient {
  private client: AxiosInstance;
  private retryCount = 3;
  private retryDelay = 1000;

  constructor() {
    this.client = axios.create({
      baseURL: env.SCRAPE_CREATORS_BASE_URL,
      headers: {
        'Authorization': `Bearer ${env.SCRAPE_CREATORS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      timeout: 30000,
    });
  }

  async get<T>(path: string, params?: any): Promise<T> {
    return this.requestWithRetry(() => this.client.get(path, { params }));
  }

  private async requestWithRetry<T>(fn: () => Promise<{ data: T }>): Promise<T> {
    let lastError: Error;

    for (let i = 0; i < this.retryCount; i++) {
      try {
        const response = await fn();
        return response.data;
      } catch (error) {
        lastError = error as Error;

        const axiosError = error as AxiosError;
        const status = axiosError.response?.status;

        // Don't retry on certain 4xx errors
        if (status && status >= 400 && status < 500 && status !== 429) {
          throw error;
        }

        if (i < this.retryCount - 1) {
          const delay = this.retryDelay * Math.pow(2, i);
          logger.warn(`Retry attempt ${i + 1}/${this.retryCount} after ${delay}ms`);
          await sleep(delay);
        }
      }
    }

    throw lastError;
  }
}

export const apiClient = new ApiClient();
```

---

## Complete Working Implementation Flow

1. **Setup**: npm install, configure .env, run migrations
2. **Seed**: Add initial competitors to database
3. **Scrape**: Run scraper to fetch ads
4. **Analyze**: Analyze ads for patterns
5. **Insights**: Generate daily insights
6. **Integrate**: Push to main platform

---

## Key Concepts

- **Scraper**: Fetches ads via Scrape Creators API, stores in DB
- **Analyzer**: Extracts patterns from ads (hooks, emotions, CTAs)
- **Insights**: Daily intelligence summary for content team
- **API**: REST endpoints for main platform integration
- **Jobs**: Scheduled tasks (cron) for automation

---

## Database Models (Simplified)

```
Competitor (tracked agencies)
  ├── CompetitorAd (raw scraped ads)
  │   └── AdAnalysis (extracted insights)
  ├── ContentPattern (identified trends)
  └── CompetitorActivity (tracking logs)

DailyInsight (intelligence summaries)
ScrapeLog, AnalysisLog, InsightLog (audit trails)
```

---

## Deployment

**Local:**
```bash
docker-compose up -d postgres
npm run db:migrate
npm run dev
```

**Production:**
```bash
docker build -t nexus .
docker run -d -p 3001:3001 --env-file .env nexus
```

---

**Ready to code! Start with Phase 1 setup, then implement services sequentially.**
