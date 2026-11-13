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

---

## Backward Two Pointers — Merge Sorted Array

**Problem:** [LeetCode #88 — Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

### When to use

When two arrays are sorted and the destination array has extra space at the end.

**Why backward?** To avoid overwriting elements that haven't been processed.

### Three Pointers

- `i = m - 1` — Last valid element of `nums1`.
- `j = n - 1` — Last element of `nums2`.
- `k = m + n - 1` — Last position available for writing.

### Example

```javascript
nums1 = [1, 3, 0, 0];
nums2 = [2, 4];
m = 2;
n = 2;
```

| Step | Compare | Write | Move |
|---|---|---|---|
| 1 | 3 vs 4 | `nums1[3] = 4` | `j--`, `k--` |
| 2 | 3 vs 2 | `nums1[2] = 3` | `i--`, `k--` |
| 3 | 1 vs 2 | `nums1[1] = 2` | `j--`, `k--` |

Final array: `[1, 2, 3, 4]`

### JavaScript Solution

```javascript
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};
```

### Complexity

- Time: **O(m + n)**
- Auxiliary space: **O(1)**

### Edge Cases

- `m = 0`: Copy all elements from `nums2`.
- `n = 0`: `nums1` remains unchanged.
- Duplicate elements are preserved.
- Zero is a valid array element when included in the first `m` or `n` values.

### Key Learnings

1. Use `while (i >= 0 && j >= 0)` while both arrays have elements to compare.
2. Always decrement `k` after writing.
3. Copy any remaining elements of `nums2`.
4. Remaining elements of `nums1` are already in place.
5. No return statement is required.
