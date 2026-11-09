# Two Pointers — Read/Write Pattern

Use two pointers to read and update an array in-place.

- `i` reads the current element.
- `k` marks where the next unique element belongs.
- `nums[k - 1]` is the last unique value already stored.

## Completed Problem
[LeetCode #26 — Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

**Status:** Accepted — Solved with Hints

## Approach
1. If the array is empty, return `0`.
2. Start with `k = 1`: the first element is already unique.
3. Traverse from index `1`.
4. If `nums[i] !== nums[k - 1]`, write `nums[i]` at `nums[k]` and increment `k`.
5. Return `k` (the number of unique elements).

**Time:** O(n) — one traversal.  
**Auxiliary space:** O(1) — no extra array.

## Edge Cases
- All duplicates
- No duplicates
- Single-element array
- Negative values
- Empty array (handled for robustness)

## Key Learning
For a sorted array, compare the current element with the **last unique element**, not the next element. `k` tracks both the unique count and the next write position.
