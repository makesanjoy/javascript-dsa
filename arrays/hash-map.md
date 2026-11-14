# Hash Map — Two Sum

**Problem:** [LeetCode #1 — Two Sum](https://leetcode.com/problems/two-sum/)  
**Difficulty:** Easy  
**Pattern:** Hash Map

## Concept

A Hash Map stores key-value pairs. In JavaScript, we use `Map`.

```javascript
let map = new Map();

map.set(5, 0);   // Number 5 at index 0
map.has(5);      // true
map.get(5);      // 0
```

## When to Use

When we need to quickly look up previously encountered values and their associated information, such as indices or counts.

## Optimized JavaScript Solution

```javascript
var twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let needed = target - nums[i];

        if (map.has(needed)) {
            return [map.get(needed), i];
        }

        map.set(nums[i], i);
    }
};
```

## Example

```javascript
nums = [2, 7, 11, 15]
target = 9
```

| i | Current | Needed | Action |
|---|---|---|---|
| 0 | 2 | 7 | Store `2 → 0` |
| 1 | 7 | 2 | Found `2`, return `[0, 1]` |

## Complexity

- **Time:** O(n) average — One traversal with average O(1) Map operations.
- **Auxiliary space:** O(n) — Map stores previously encountered values.

## Edge Cases

- Duplicate numbers: `[3, 3]`, target `6`.
- Negative numbers: `[-3, 4, 3]`, target `0`.
- The same array element cannot be used twice.

## Key Learnings

- Store the number as the key and its index as the value.
- `needed = target - nums[i]` finds the complement.
- Check the Map before inserting the current number.
- Use `Map` for key-value relationships; use `Set` for unique-value membership.

## Variation — Find All Pairs

When multiple valid pairs exist, store arrays of indices for each number and collect every matching pair.

Example:

```javascript
nums = [2, 7, 3, 6, 4, 5]
target = 9

// All pairs of indices:
[[0, 1], [2, 3], [4, 5]]
```

This variation takes O(n + p) time and O(n + p) space, including the output, where `p` is the number of matching pairs.
