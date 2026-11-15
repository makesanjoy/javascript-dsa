# Two Sum — LeetCode 1

**Difficulty:** Easy · **Technique:** Hash map  
**Problem:** [Two Sum](https://leetcode.com/problems/two-sum/)

## Goal

Given an array and a target, return the indices of two distinct elements whose sum equals the target. The problem guarantees one valid answer.

**Example:** `nums = [2, 7, 11, 15]`, `target = 9` → `[0, 1]`

## Approach

For each value `nums[i]`, compute its complement: `target - nums[i]`. Use a JavaScript `Map` to look for a previously seen complement. If found, return its index and `i`; otherwise store the current value and index.

Check **before** inserting so an element cannot match itself.

```javascript
var twoSum = function(nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }

        seen.set(nums[i], i);
    }
};
```

## Complexity

- **Time:** `O(n)` on average, assuming average `O(1)` `Map` lookups and insertions.
- **Auxiliary space:** `O(n)` for stored values and indices.

## Edge cases

- Duplicates: `[3, 3]` with target `6` must use two different indices.
- Negative values: `[-3, 4, 3]` with target `0`.
- A complement encountered before the current number.

**Key takeaway:** Use `Map` when you need associated data such as indices; use `Set` when you only need membership.
