# Maximum Subarray — LeetCode 53

**Difficulty:** Medium · **Technique:** Kadane's algorithm  
**Problem:** [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)  
**Implementation:** [maximum-subarray.js](maximum-subarray.js)

## Goal

Find the largest possible sum of a non-empty contiguous subarray.

**Example:** `[-2, 1, -3, 4, -1, 2, 1, -5, 4]` → `6`

The maximum-sum subarray is `[4, -1, 2, 1]`.

## Approach

Kadane's algorithm tracks two values:

- `currentSum`: Maximum subarray sum ending at the current index.
- `largestSum`: Maximum subarray sum found overall.

Initialize both with the first element.

For each remaining element, choose between:

1. Starting a new subarray at the current element.
2. Extending the previous subarray.

Update `largestSum` whenever a larger sum is found.

The algorithm needs only one traversal.

## Complexity

- **Time:** `O(n)` — each element is processed once.
- **Auxiliary space:** `O(1)` — only two tracking variables are maintained.

## Edge cases

- All-negative array: `[-3, -2, -5]` → `-2`.
- Single element: `[5]` → `5`.
- Mixed values: `[5, -2, 3]` → `6`.

**Key takeaway:** At each index, choose whether to extend the previous subarray or start a new one. Track the best result throughout.
