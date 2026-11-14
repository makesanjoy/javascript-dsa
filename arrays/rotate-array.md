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

## Optimized Approach — Three Reversals

Rotate right by `k = 2`.

```javascript
Original:  [1, 2, 3, 4, 5]
Reverse 1: [5, 4, 3, 2, 1]
Reverse 2: [4, 5, 3, 2, 1]
Reverse 3: [4, 5, 1, 2, 3]
```

### JavaScript Solution

```javascript
var rotate = function(nums, k) {
    let n = nums.length;
    if (n === 0) return;

    k = k % n;

    function reverse(nums, left, right) {
        while (left < right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;

            left++;
            right--;
        }
    }

    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
};
```

### How It Works

1. Reverse the entire array.
2. Reverse the first `k` elements.
3. Reverse the remaining elements.

### Complexity

- **Time:** O(n) — three linear reversals.
- **Auxiliary Space:** O(1) — in-place swaps.

### Key Learnings

- Reverse using two pointers (`left`, `right`).
- Swap while `left < right`.
- Use `k % n` to handle large rotation counts.
- Three reversals avoid repeated shifting.
- Modify the original array in-place.
