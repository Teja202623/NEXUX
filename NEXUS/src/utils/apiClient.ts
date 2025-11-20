import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';
import env from '../config/env';
import logger from './logger';

/**
 * Utility function to sleep for a specified number of milliseconds
 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * API Client with automatic retry logic and error handling
 * Wraps Axios to provide:
 * - Automatic retries with exponential backoff
 * - Authentication headers
 * - Request/response logging
 * - Type-safe responses
 */
export class ApiClient {
  private client: AxiosInstance;
  private retryCount = 3;
  private retryDelay = 1000; // milliseconds
  private requestTimeout = 30000; // milliseconds

  constructor(baseURL?: string, apiKey?: string) {
    this.client = axios.create({
      baseURL: baseURL || env.SCRAPE_CREATORS_BASE_URL,
      timeout: this.requestTimeout,
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey ? { 'Authorization': `Bearer ${apiKey}` } : {}),
      },
    });

    // Add response interceptor for error logging
    this.client.interceptors.response.use(
      response => response,
      error => {
        logger.error('API request failed', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          message: error.message,
        });
        throw error;
      }
    );
  }

  /**
   * Make a GET request with automatic retry
   * @param path - The API endpoint path
   * @param params - Optional query parameters
   * @returns The response data typed as T
   */
  async get<T>(path: string, params?: any): Promise<T> {
    logger.debug(`GET request to ${path}`, { params });
    return this.requestWithRetry(() => this.client.get<T>(path, { params }));
  }

  /**
   * Make a POST request with automatic retry
   * @param path - The API endpoint path
   * @param data - Request body data
   * @param config - Optional Axios config
   * @returns The response data typed as T
   */
  async post<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    logger.debug(`POST request to ${path}`, { data });
    return this.requestWithRetry(() => this.client.post<T>(path, data, config));
  }

  /**
   * Make a PUT request with automatic retry
   * @param path - The API endpoint path
   * @param data - Request body data
   * @param config - Optional Axios config
   * @returns The response data typed as T
   */
  async put<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    logger.debug(`PUT request to ${path}`, { data });
    return this.requestWithRetry(() => this.client.put<T>(path, data, config));
  }

  /**
   * Make a DELETE request with automatic retry
   * @param path - The API endpoint path
   * @returns The response data typed as T
   */
  async delete<T>(path: string): Promise<T> {
    logger.debug(`DELETE request to ${path}`);
    return this.requestWithRetry(() => this.client.delete<T>(path));
  }

  /**
   * Core retry logic
   * Attempts the request up to retryCount times with exponential backoff
   * Automatically retries on network errors and 5xx errors
   * Does NOT retry on 4xx errors (except 429 rate limit)
   * @param fn - The request function to execute
   * @returns The response data typed as T
   * @throws Error if all retries fail
   */
  private async requestWithRetry<T>(
    fn: () => Promise<{ data: T }>
  ): Promise<T> {
    let lastError: Error | null = null;

    for (let attempt = 0; attempt < this.retryCount; attempt++) {
      try {
        const response = await fn();

        // Log successful request
        if (attempt > 0) {
          logger.info(`Request succeeded after ${attempt} retries`);
        }

        return response.data;
      } catch (error) {
        lastError = error as Error;
        const axiosError = error as AxiosError;
        const status = axiosError.response?.status;

        // Determine if we should retry
        const shouldRetry = this.shouldRetry(status, attempt);

        if (shouldRetry) {
          const delayMs = this.retryDelay * Math.pow(2, attempt);
          logger.warn(`Request failed (attempt ${attempt + 1}/${this.retryCount}), retrying in ${delayMs}ms`, {
            status,
            message: axiosError.message,
          });
          await sleep(delayMs);
        } else {
          // Don't retry, throw error immediately
          logger.error(`Request failed with non-retryable error`, {
            status,
            message: axiosError.message,
            attempt: attempt + 1,
          });
          throw error;
        }
      }
    }

    // All retries exhausted
    logger.error(`All ${this.retryCount} retry attempts failed`);
    throw lastError || new Error('Request failed after all retries');
  }

  /**
   * Determine if a request should be retried based on status code
   * Retries on:
   * - Network errors (no status code)
   * - 429 (Too Many Requests / Rate Limit)
   * - 5xx errors (Server errors)
   * Does NOT retry on:
   * - 4xx errors (except 429)
   * @param status - HTTP status code
   * @param attempt - Current attempt number
   * @returns true if should retry, false if should fail
   */
  private shouldRetry(status: number | undefined, attempt: number): boolean {
    // Out of retries
    if (attempt >= this.retryCount - 1) {
      return false;
    }

    // Network error (no status code) - retry
    if (!status) {
      return true;
    }

    // 429 Rate Limit - always retry
    if (status === 429) {
      return true;
    }

    // 5xx Server errors - retry
    if (status >= 500) {
      return true;
    }

    // 4xx Client errors - do not retry
    if (status >= 400 && status < 500) {
      return false;
    }

    // Success codes (2xx, 3xx) should not reach here, but if they do, don't retry
    return false;
  }
}

/**
 * Singleton instance for Scrape Creators API
 * Use this throughout the application
 */
export const apiClient = new ApiClient(
  env.SCRAPE_CREATORS_BASE_URL,
  env.SCRAPE_CREATORS_API_KEY
);

/**
 * Factory function to create API client for different services
 * Useful for testing or connecting to different APIs
 */
export const createApiClient = (baseURL: string, apiKey?: string) => {
  return new ApiClient(baseURL, apiKey);
};
