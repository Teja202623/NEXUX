import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().transform(Number).default('3001'),
  DATABASE_URL: z.string().min(1),
  SCRAPE_CREATORS_API_KEY: z.string().min(1),
  SCRAPE_CREATORS_BASE_URL: z.string().url().default('https://api.scrapecreators.com'),
  JWT_SECRET: z.string().min(1),
  JWT_EXPIRY: z.string().default('7d'),
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']).default('info'),
  MAIN_PLATFORM_API_URL: z.string().url().optional(),
  MAIN_PLATFORM_API_KEY: z.string().optional(),
});

type Environment = z.infer<typeof envSchema>;

let env: Environment;

try {
  env = envSchema.parse(process.env);
} catch (error) {
  console.error('❌ Environment validation failed');
  process.exit(1);
}

export default env;
