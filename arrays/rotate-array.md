# Rotate Array — LeetCode 189

**Difficulty:** Medium · **Technique:** In-place array rotation  
**Problem:** [Rotate Array](https://leetcode.com/problems/rotate-array/)

## Goal

Rotate an array to the right by `k` positions, modifying the original array.

**Example:** `[1, 2, 3, 4, 5]`, `k = 2` → `[4, 5, 1, 2, 3]`

Normalize rotations with `k %= nums.length` for non-empty arrays: rotating by the array length has no effect.

## Approach 1: Repeated shifting

Save the last element, shift everything else one position to the right, and place the saved value at index `0`. Repeat `k` times.

```javascript
var rotate = function(nums, k) {
    const n = nums.length;
    if (n === 0) return;
    k %= n;

    for (let step = 0; step < k; step++) {
        const last = nums[n - 1];
        for (let i = n - 1; i > 0; i--) {
            nums[i] = nums[i - 1];
        }
        nums[0] = last;
    }
};
```

**Complexity:** `O(n × (k mod n))` time, worst-case `O(n²)`; `O(1)` auxiliary space.

## Approach 2: Three reversals

Reverse the whole array, then reverse the first `k` elements and the remaining `n - k` elements.

```text
Original:        [1, 2, 3, 4, 5]
Reverse all:     [5, 4, 3, 2, 1]
Reverse first 2: [4, 5, 3, 2, 1]
Reverse rest:    [4, 5, 1, 2, 3]
```

```javascript
var rotate = function(nums, k) {
    const n = nums.length;
    if (n === 0) return;
    k %= n;

    function reverse(left, right) {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }

    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
};
```

**Complexity:** `O(n)` time, `O(1)` auxiliary space.

## Edge cases

- `k = 0` or a multiple of the array length.
- `k > nums.length`.
- An empty array or a single-element array.

**Key takeaway:** Reversal avoids the repeated full-array shifts required by the simpler approach.
