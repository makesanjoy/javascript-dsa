# Two Pointers in Arrays

Two-pointer techniques maintain two positions in an array to process data efficiently, often without allocating another array.

## Read/write pointers: Remove Duplicates

**Problem:** [LeetCode 26 — Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) · **Difficulty:** Easy  
**Implementation:** [remove-duplicates-sorted-array.js](remove-duplicates-sorted-array.js)

The input is sorted. Retain each distinct value once in the first `k` positions and return `k`.

1. Return `0` for an empty array; otherwise set `k = 1`.
2. Scan from `i = 1`. If `nums[i] !== nums[k - 1]`, write the value to `nums[k]` and increment `k`.
3. Return `k`. Only the first `k` positions are part of the result.

**Example:** `[1, 1, 2, 2, 3]` → `k = 3`, first three values `[1, 2, 3]`.

**Invariant:** `nums[0...k-1]` contains the unique values seen so far, in sorted order.

**Complexity:** `O(n)` time, `O(1)` auxiliary space.

**Edge cases:** Empty input, all duplicates, no duplicates, negative values.

## Backward pointers: Merge Sorted Array

**Problem:** [LeetCode 88 — Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) · **Difficulty:** Easy

`nums1` has `m` valid sorted values followed by room for `n` values from sorted `nums2`. Merge into `nums1` in place.

Initialize `i = m - 1`, `j = n - 1`, and `k = m + n - 1`. Compare values from the end and write the larger one to `nums1[k]`. Continue until one source is exhausted, then copy any remaining `nums2` values. Remaining `nums1` values are already correctly placed.

```javascript
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
};
```

**Example:** `nums1 = [1, 3, 0, 0]`, `m = 2`, `nums2 = [2, 4]`, `n = 2` → `[1, 2, 3, 4]`.

**Complexity:** `O(m + n)` time, `O(1)` auxiliary space.

**Edge cases:** `m = 0`, `n = 0`, duplicates, and valid zero values in the sorted inputs.

**Key takeaway:** Write from the end when filling from the front could overwrite unprocessed values.
