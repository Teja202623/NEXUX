# Average Rank Calculation Improvements

**Date:** November 9, 2025
**Status:** ✅ Complete
**File Modified:** `frontend/src/App.tsx`

---

## Problem

The GeoGrid average rank calculation was **filtering out blank cells** when computing statistics, which made metrics misleading:

- A business appearing in only 1/25 cells with rank 4 showed "Avg Rank = 4" (good-looking)
- But the actual coverage was only 4% (1 cell out of 25)
- Users couldn't distinguish between strong coverage + good ranks vs. weak coverage + decent rankings

### Example

**5×5 Grid (25 total cells)**

| Scenario | Old Calculation | New Calculation | What It Means |
|----------|-----------------|-----------------|---------------|
| 18 filled cells, avg rank 4.2 | Avg Rank = 4.2 | Avg Rank = 4.2, Coverage = 72% | Strong performance in most of the grid |
| 1 filled cell, rank 4, 24 blanks | Avg Rank = 4 | Avg Rank = 4, Coverage = 4% | Very weak coverage; needs improvement |

---

## Solution

Updated `deriveStatsFromCells()` function to:

1. **Track filled vs. total cells separately**
   - `appearances`: number of cells with actual rank data
   - `totalCells`: all grid cells (includes blanks)
   - `coveragePct`: (appearances / totalCells) × 100

2. **Calculate average from ONLY filled cells**
   - Shows performance where the business actually appears
   - Doesn't artificially inflate metrics with missing data

3. **Clear distinction between coverage and ranking**
   - "72% coverage with avg rank 4.2" vs. "4% coverage with rank 4"
   - Perplexity now gets accurate context for business summaries

---

## Code Changes

### `frontend/src/App.tsx` - `deriveStatsFromCells()` function

**Before:**
```typescript
const deriveStatsFromCells = (cells: GeoGridCell[]) => {
  const ranks = cells
    .map((cell) => cell.rank)
    .filter((rank): rank is number => typeof rank === "number" && !Number.isNaN(rank));
  if (ranks.length === 0) {
    return { bestRank: null, avgRank: null, appearances: 0 };
  }
  const bestRank = Math.min(...ranks);
  const avgRank = Number((ranks.reduce((sum, rank) => sum + rank, 0) / ranks.length).toFixed(1));
  return { bestRank, avgRank, appearances: ranks.length };
};
```

**After:**
```typescript
const deriveStatsFromCells = (cells: GeoGridCell[]) => {
  // Get all ranks (including nulls for blanks)
  const allRanks = cells.map((cell) => cell.rank);
  const filledRanks = allRanks.filter((rank): rank is number => typeof rank === "number" && !Number.isNaN(rank));
  const totalCells = cells.length;
  const appearances = filledRanks.length;

  if (filledRanks.length === 0) {
    return { bestRank: null, avgRank: null, appearances: 0, totalCells, coveragePct: 0 };
  }

  const bestRank = Math.min(...filledRanks);

  // Calculate average from only filled cells (not including blanks as a penalty)
  // This shows performance in areas where the business actually appears
  const avgRank = Number((filledRanks.reduce((sum, rank) => sum + rank, 0) / filledRanks.length).toFixed(1));

  return {
    bestRank,
    avgRank,
    appearances, // Count of cells with ranks, NOT total cells
    totalCells,
    coveragePct: Number(((appearances / totalCells) * 100).toFixed(1)),
  };
};
```

---

## Impact

✅ **Perplexity Business Summaries**
- Now receive accurate coverage metrics alongside ranking metrics
- Example: "72% coverage with avg rank 4.2" instead of just "avg rank 4.2"
- Generates more contextual, honest business assessments

✅ **Data Accuracy**
- Clearly distinguishes between: (1) how often the business appears, (2) how well it ranks when it does appear
- No misleading averages that hide low coverage

✅ **User Understanding**
- Dashboard now shows both coverage % and average rank
- Users see complete picture of local visibility

---

## Metrics

| Metric | Return Type | Meaning |
|--------|------------|---------|
| `bestRank` | `number \| null` | Highest (lowest number) rank in the grid |
| `avgRank` | `number \| null` | Average rank among cells where business appears |
| `appearances` | `number` | Count of cells with rank data |
| `totalCells` | `number` | Total cells in grid (e.g., 25 for 5×5) |
| `coveragePct` | `number` | % of grid where business appears |

---

## Testing Recommendations

1. **Visual inspection:**
   - Run GeoGrid with a 5×5 keyword
   - Verify coverage % shown matches the green/colored cells on map
   - Check that Perplexity summary mentions both coverage and ranking

2. **Edge cases:**
   - Empty grid (no results): returns `{ bestRank: null, avgRank: null, appearances: 0, totalCells: 25, coveragePct: 0 }`
   - Full grid (all 25 cells filled): coverage should be ~100%
   - Partial grid (e.g., 12/25): coverage should be 48%

3. **Perplexity output:**
   - Summaries should now mention coverage explicitly
   - Example: "appears in 72% of cells with avg rank 4.2"

---

## Notes

- This change does **NOT** modify how rankings are stored or fetched
- Only affects how statistics are calculated for display and Perplexity input
- Backend insights service (time-series rank averaging) left unchanged—that's a different calculation
- All changes backward-compatible; `selectedAggregate` from `BusinessAggregate[]` already had these fields
