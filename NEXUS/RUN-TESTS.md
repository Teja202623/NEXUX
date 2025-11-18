# Quick Start: Running Tests

Get started with Phase 2 testing in 5 minutes.

## Prerequisites

```bash
# Ensure dependencies are installed
npm install

# Ensure TypeScript is compiled
npm run build
```

## Option 1: Run Unit Tests (Recommended First)

Unit tests don't require a database - they use mocks.

```bash
# Run all unit tests
npm run test:unit

# Run with watch mode (auto-rerun on changes)
npm run test:unit -- --watch

# Run specific test
npm run test:unit -- --testNamePattern="scrapeFacebookAds"

# Run with verbose output
npm run test:unit -- --verbose
```

**Expected Output:**
```
 PASS  tests/services/scraper.service.test.ts
  ScraperService
    scrapeAllCompetitors
      ✓ should scrape all active competitors (12ms)
      ✓ should handle errors gracefully (8ms)
      ✓ should return correct breakdown (10ms)
    scrapeFacebookAds
      ✓ should skip competitor without facebook page ID (3ms)
      ✓ should extract facebook ad data correctly (5ms)
    ... (40+ more tests)

Test Suites: 1 passed, 1 total
Tests:       45 passed, 45 total
Time:        2.5s
```

**✅ Success Indicators:**
- All tests pass (green ✓)
- No errors or warnings
- Completes in < 5 seconds
- Tests: 45 passed

## Option 2: Run All Tests (With Coverage)

Runs both unit and integration tests, generates coverage report.

```bash
# Run all tests with coverage
npm run test:coverage

# Check coverage report
open coverage/index.html  # macOS
# or
xdg-open coverage/index.html  # Linux
# or
start coverage/index.html  # Windows
```

**Expected Output:**
```
 PASS  tests/services/scraper.service.test.ts
 PASS  tests/integration/scraper.integration.test.ts

Test Suites: 2 passed, 2 total
Tests:       65 passed, 65 total
Coverage:
  Statements   : 82.4% ( 245/298 )
  Branches     : 75.2% ( 156/207 )
  Functions    : 85.1% ( 98/115 )
  Lines        : 83.1% ( 218/262 )
```

**Coverage Report:**
- Generated in `coverage/lcov-report/index.html`
- View in browser for detailed breakdown
- Aim for 80%+ coverage

## Option 3: Integration Tests (Requires Database)

Only after setting up test database (see TESTING-GUIDE.md).

```bash
# First set up test database
createdb nexus_test
DATABASE_URL="postgresql://user:password@localhost:5432/nexus_test" npm run db:migrate

# Then run integration tests
npm run test:integration

# Run with coverage
npm run test:integration -- --coverage
```

## Option 4: Development Mode

Watch tests while developing - auto-reruns when files change.

```bash
# Watch mode - reruns tests on file changes
npm run test:watch

# Runs only tests related to changed files
# Press 'a' to run all tests
# Press 'q' to quit
```

## Troubleshooting Quick Fixes

### ❌ "Cannot find module" Error

```bash
npm install
npm run prisma:generate
npm run test:unit
```

### ❌ "Jest: No tests found"

```bash
# Ensure test files exist
ls tests/services/
ls tests/integration/

# Run with explicit path
npm test -- tests/services/scraper.service.test.ts
```

### ❌ "ReferenceError: jest is not defined"

The jest types might not be installed. This is usually OK - the tests should still run.

```bash
npm test -- --forceExit
```

### ❌ Tests timeout (> 30 seconds)

Likely integration tests hitting database. Ensure test database is running:

```bash
# Check if PostgreSQL is running
psql -l

# If not, start it
# macOS with Homebrew: brew services start postgresql
# or manually: psql -d nexus_test
```

## What Gets Tested

### ScraperService Methods ✅
- `scrapeAllCompetitors()` - Main entry point
- `scrapeFacebookAds()` - Facebook Ad Library API
- `scrapeFacebookPosts()` - Facebook page feed
- `scrapeInstagramAds()` - Instagram Ad Library API
- `scrapeInstagramPosts()` - Instagram profile feed
- `scrapeInstagramReels()` - Instagram video reels
- `deduplicateContent()` - Duplicate detection
- `storeContent()` - Database storage

### Content Types ✅
- ✅ Facebook Ads (with carousel support)
- ✅ Facebook Posts (with engagement metrics)
- ✅ Instagram Ads (multi-platform)
- ✅ Instagram Posts (with carousel)
- ✅ Instagram Reels (with video duration)

### Database Operations ✅
- ✅ Insert operations
- ✅ Update operations (for duplicates)
- ✅ Engagement metrics storage
- ✅ Video duration tracking
- ✅ Cascade deletes
- ✅ Index performance

### Error Handling ✅
- ✅ Missing credentials (null IDs)
- ✅ API failures
- ✅ Network errors
- ✅ Invalid responses
- ✅ Partial failures

## Test Execution Timeline

```
Unit Tests Only:
├─ Parse & compile:  ~1s
├─ Setup mocks:      ~0.5s
├─ Run 45 tests:     ~1s
├─ Report:           ~0.5s
└─ Total:            ~3s

All Tests:
├─ Unit tests:       ~3s
├─ Integration tests:~10-15s (depends on DB)
├─ Coverage:         ~5s
└─ Total:            ~18-23s

Watch Mode:
├─ Initial run:      ~3s
└─ Each change:      ~1-2s (only affected tests)
```

## Success Criteria ✅

Your Phase 2 testing is successful when:

```
1. npm run test:unit passes
   - All 45+ tests pass ✓
   - No errors
   - Completes in < 5 seconds

2. npm run test:coverage shows
   - 80%+ coverage for services
   - No major gaps in logic

3. All 5 content types tested
   - Facebook Ads ✓
   - Facebook Posts ✓
   - Instagram Ads ✓
   - Instagram Posts ✓
   - Instagram Reels ✓

4. Deduplication logic verified
   - Hash-based for ads ✓
   - ID-based for organic ✓
   - Updates lastSeenAt ✓

5. Database operations valid
   - Insert works ✓
   - Update works ✓
   - Metrics stored ✓
   - Duration tracked ✓
```

## Next Steps

After running tests successfully:

1. ✅ **Review Results** - Check console output and coverage report
2. ✅ **Verify All 5 Content Types** - Confirm each content type is tested
3. ✅ **Check Coverage** - Aim for 80%+ on core services
4. ✅ **Add Sample Competitors** - Use PHASE-2-SETUP.md guide
5. ✅ **Run Manual Tests** - Follow PHASE-2-SETUP.md for end-to-end testing
6. ✅ **Move to Phase 3** - Start implementing Analyzer Service

## Quick Reference

```bash
# Most common commands
npm run test:unit           # Run unit tests (fastest)
npm run test:coverage       # See coverage report
npm run test:watch          # Development mode
npm test                    # Run everything

# Specific scenarios
npm run test:unit -- --testNamePattern="Facebook"  # Just Facebook tests
npm run test:unit -- --verbose                     # Detailed output
npm run test:unit -- --bail                        # Stop on first failure
```

## Need Help?

- **Full Guide**: See `TESTING-GUIDE.md`
- **Setup Issues**: See `PHASE-2-SETUP.md`
- **Test Details**: See `tests/services/scraper.service.test.ts`
- **Mock Data**: See `tests/fixtures/mockData.ts`

---

**Ready to test?** Run: `npm run test:unit`

Expected time: 3-5 seconds | Expected result: 45+ tests pass ✅
