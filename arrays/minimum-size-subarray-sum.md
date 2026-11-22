# Minimum Size Subarray Sum — LeetCode 209

**Problem:** [LeetCode 209](https://leetcode.com/problems/minimum-size-subarray-sum/)  
**Pattern:** Variable-Size Sliding Window  
**Implementation:** [JavaScript Solution](minimum-size-subarray-sum.js)

## Problem

Given an array of positive integers and a target, return the minimum length of a contiguous subarray whose sum is at least the target. Return `0` if no such subarray exists.

**Example:**

```javascript
target = 7
nums = [2, 3, 1, 2, 4, 3]

// Output: 2
```

The subarray `[4, 3]` has the minimum qualifying length.

## Approach

Use two pointers to maintain a variable-size window.

1. Expand the window by adding `nums[right]` to the running sum.
2. When the sum reaches the target, record the minimum window length.
3. Shrink the window from the left while the sum remains at least the target.
4. Continue until all elements have been processed.

Return `0` if no qualifying window was found.

## Complexity Analysis

- **Time:** `O(n)` — Each element enters and leaves the window at most once.
- **Auxiliary Space:** `O(1)` — Only a constant number of variables are used.

## Edge Cases

- A single element meets the target.
- No subarray reaches the target.
- The shortest qualifying subarray contains one element.
- The entire array is required to reach the target.

## Key Learning

Unlike a fixed-size sliding window, a variable-size window expands and shrinks according to a condition.

This approach relies on positive integers: removing an element from the left cannot increase the running sum.
