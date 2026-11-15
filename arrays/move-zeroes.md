# Move Zeroes — LeetCode 283

**Difficulty:** Easy · **Technique:** Read/write two pointers  
**Problem:** [Move Zeroes](https://leetcode.com/problems/move-zeroes/)  
**Implementation:** [move-zeroes.js](move-zeroes.js)

## Goal

Move all zeros to the end of the same array, preserving the relative order of non-zero elements.

**Example:** `[0, 1, 0, 3, 12]` → `[1, 3, 12, 0, 0]`

## Approach

1. Keep `k` as the next position for a non-zero value.
2. Scan with `i`. For each non-zero value, assign `nums[k] = nums[i]`, then increment `k`.
3. Fill the remaining positions, from `k` onward, with zeros.

The first pass preserves order because values are written in the order encountered. Writing is safe because `k <= i` throughout the scan.

## Complexity

- **Time:** `O(n)` — two consecutive passes over the array.
- **Auxiliary space:** `O(1)` — the array is updated in place.

## Edge cases

- All zeros or no zeros.
- A single-element array.
- Zeros at either end or between non-zero values.

**Key takeaway:** `k` is the next write index; it does not need to point to a zero before writing.
