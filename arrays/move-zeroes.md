# LeetCode #283 — Move Zeroes

**Problem:** https://leetcode.com/problems/move-zeroes/  
**Difficulty:** Easy  
**Status:** Accepted — Solved with Hints  
**Pattern:** Two Pointers (Read/Write)

## Approach
1. Initialize `k = 0` for the next non-zero position.
2. Use `i` to scan all elements.
3. If `nums[i] !== 0`, store it at `nums[k]`, then increment `k`.
4. Fill positions from `k` to the end with zeros.

## Example
```javascript
Input:       [0, 1, 0, 3, 12]
First pass:  [1, 3, 12, 3, 12]
Second pass: [1, 3, 12, 0, 0]
```

## Complexity
- **Time:** O(n) — two sequential loops.
- **Auxiliary space:** O(1) — no additional array.

## Edge Cases
- All zeros: `[0, 0, 0]`
- No zeros: `[1, 2, 3]`
- Single element: `[0]` or `[5]`
- Zeros at the beginning or end

## Key Learnings
- `k = 0` because no non-zero elements are initially placed.
- Preserve the relative order of non-zero elements.
- Overwriting in the first pass is safe because `k <= i`.
- Modify `nums` in-place; no return value is needed.
