# Prefix Sum — Range Sum Query (Immutable)

**Problem:** [LeetCode #303 — Range Sum Query (Immutable)](https://leetcode.com/problems/range-sum-query-immutable/)  
**Difficulty:** Easy  
**Pattern:** Prefix Sum

## Concept

Prefix Sum stores cumulative sums so repeated sums of contiguous ranges can be answered in O(1) time after O(n) preprocessing.

Start with `0`. Then `prefix[k]` represents the sum of the **first k elements**.

```javascript
nums   = [3, 2, 5, 1]
prefix = [0, 3, 5, 10, 11]
```

## JavaScript Solution

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

## Why the Formula Works

```javascript
sumRange(left, right) = prefix[right + 1] - prefix[left]
```

- `prefix[right + 1]` includes every element **through** index `right`.
- `prefix[left]` is the sum of everything **before** index `left`, which we subtract.
- The initial `0` makes this work even when `left === 0`.

Example:

```javascript
nums   = [3, 2, 5, 1]
prefix = [0, 3, 5, 10, 11]

// sumRange(1, 2) = 2 + 5 = 7
// prefix[3] - prefix[1] = 10 - 3 = 7
```

## Complexity

- **Constructor:** O(n) time, O(n) auxiliary space for the prefix array.
- **sumRange(left, right):** O(1) time, O(1) additional space.

## Edge Cases & Key Learnings

- **Range starts at 0:** `sumRange(0, 2)` works because `prefix[0] = 0`.
- **Single element:** `sumRange(2, 2)` returns that element.
- **Negative values and zero:** Prefix sums still work.
- **Immutable array:** Build prefix sums once, then reuse them for many queries.
- **JavaScript constructor:** Store the prefix array as `this.prefix` so the `sumRange` method can access it.

**Remember:** `prefix[k]` is the sum of the **first k elements**, not the sum through index `k`.
