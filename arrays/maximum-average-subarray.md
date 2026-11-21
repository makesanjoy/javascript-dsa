# Maximum Average Subarray I — LeetCode 643

**Problem:** [LeetCode 643](https://leetcode.com/problems/maximum-average-subarray-i/)  
**Pattern:** Fixed-Size Sliding Window  
**Implementation:** [JavaScript Solution](maximum-average-subarray.js)

## Problem

Given an integer array `nums` and an integer `k`, find the maximum average among all contiguous subarrays of length `k`.

**Example:**

```javascript
nums = [1, 12, -5, -6, 50, 3]
k = 4

// Output: 12.75
```

## Approach

Use a fixed-size sliding window to maintain the sum of `k` consecutive elements.

1. Calculate the sum of the first `k` elements.
2. Slide the window one position at a time.
3. Subtract the outgoing element and add the incoming element.
4. Track the maximum window sum.
5. Divide the maximum sum by `k` to obtain the result.

This avoids recalculating the sum of every subarray.

## Complexity Analysis

- **Time:** `O(n)` — Each array element is processed a constant number of times.
- **Auxiliary Space:** `O(1)` — Only a fixed number of variables are maintained.

## Edge Cases

- `k = 1`: Each element forms an individual window.
- `k = nums.length`: The entire array forms one window.
- Negative elements: The maximum sum may be negative.

## Implementation Details

For each incoming index `i`:

- `nums[i]` is the incoming element.
- `nums[i - k]` is the outgoing element.

Updating the running sum allows each new window to be evaluated in constant time.
