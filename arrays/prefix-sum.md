# Range Sum Query — LeetCode 303

**Difficulty:** Easy · **Technique:** Prefix sum  
**Problem:** [Range Sum Query — Immutable](https://leetcode.com/problems/range-sum-query-immutable/)

## Goal

Answer repeated sums of inclusive index ranges, `left` through `right`, on an array that does not change.

## Approach

Build a prefix array beginning with zero. `prefix[k]` stores the sum of the **first `k` elements**, so it has `n + 1` entries.

```text
nums   = [3, 2, 5, 1]
prefix = [0, 3, 5, 10, 11]
```

The inclusive sum is:

```text
prefix[right + 1] - prefix[left]
```

For `sumRange(1, 2)`, the result is `prefix[3] - prefix[1] = 10 - 3 = 7`.

## JavaScript solution

```javascript
var NumArray = function(nums) {
    this.prefix = [0];

    for (let i = 0; i < nums.length; i++) {
        this.prefix.push(this.prefix[i] + nums[i]);
    }
};

NumArray.prototype.sumRange = function(left, right) {
    return this.prefix[right + 1] - this.prefix[left];
};
```

## Complexity

- **Construction:** `O(n)` time and `O(n)` auxiliary space.
- **Each `sumRange` call:** `O(1)` time and `O(1)` additional space.

## Edge cases

- A range beginning at index `0` (`prefix[0] = 0`).
- A single-element range (`left === right`).
- Negative values and zeros.

**Key takeaway:** The leading zero eliminates special handling for ranges that start at the beginning of the array.
