# Array Rotation — LeetCode #189

**Problem:** [Rotate Array](https://leetcode.com/problems/rotate-array/)  
**Difficulty:** Medium  
**Pattern:** In-place Rotation

## Concept

Right rotation moves elements toward the right, wrapping the last element to the beginning.

## Example

```javascript
nums = [1, 2, 3, 4, 5]
k = 2

Rotation 1: [5, 1, 2, 3, 4]
Rotation 2: [4, 5, 1, 2, 3]
```

## JavaScript Solution — Repeated Shifting

```javascript
var rotate = function(nums, k) {
    let numsLength = nums.length;
    if (numsLength === 0) return;

    k = k % numsLength;

    while (k > 0) {
        let temp = nums[numsLength - 1];

        for (let i = numsLength - 1; i > 0; i--) {
            nums[i] = nums[i - 1];
        }

        nums[0] = temp;
        k--;
    }
};
```

## Key Learnings

- Save the last element before shifting.
- Traverse backward to avoid overwriting values.
- `%` returns the remainder.
- `k % nums.length` avoids unnecessary full rotations.
- Modify the original array without creating another array.

## Complexity

- **Time:** O(n × (k % n)) after normalization for non-empty arrays; worst case O(n²).
- **Auxiliary Space:** O(1).

## Edge Cases

- `k = 0` → No change.
- `k = nums.length` → Original array.
- `k > nums.length` → Use modulo.
- Single-element array → No change.

## Further Optimization

Use the three-reversal technique to achieve **O(n) time** and **O(1) auxiliary space**.
