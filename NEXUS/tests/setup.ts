/**
 * Jest Setup File
 * Runs before all tests
 */

import dotenv from 'dotenv';

// Load test environment variables
dotenv.config({ path: '.env.test' });

// Set test environment
process.env.NODE_ENV = 'test';

// Increase test timeout for integration tests
jest.setTimeout(30000);

// Mock console methods in tests to reduce noise
const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
  // Suppress specific console messages during tests
  console.error = jest.fn((...args) => {
    if (
      args[0]?.includes?.('EMULATE') ||
      args[0]?.includes?.('[CredentialsProvider]')
    ) {
      return;
    }
    originalError.call(console, ...args);
  });

  console.warn = jest.fn((...args) => {
    if (args[0]?.includes?.('MOCK')) {
      return;
    }
    originalWarn.call(console, ...args);
  });
});

afterAll(() => {
  console.error = originalError;
  console.warn = originalWarn;
});

// Global test utilities
global.testUtils = {
  /**
   * Wait for a specific time
   */
  wait: (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)),

  /**
   * Retry a function until it succeeds
   */
  retry: async (
    fn: () => Promise<any>,
    maxAttempts: number = 3,
    delayMs: number = 100
  ) => {
    for (let i = 0; i < maxAttempts; i++) {
      try {
        return await fn();
      } catch (error) {
        if (i === maxAttempts - 1) throw error;
        await global.testUtils.wait(delayMs);
      }
    }
  },
};

// Add type definitions for test utilities
declare global {
  namespace NodeJS {
    interface Global {
      testUtils: {
        wait: (ms: number) => Promise<void>;
        retry: (
          fn: () => Promise<any>,
          maxAttempts?: number,
          delayMs?: number
        ) => Promise<any>;
      };
    }
  }
}

export {};
