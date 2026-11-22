# Data Structures and Algorithms in JavaScript

A practical collection of JavaScript solutions and concise notes for common data structures, algorithms, and coding-interview patterns.

Each problem note focuses on the approach, complexity, edge cases, and the reasoning that makes the technique reusable.

## Start here

1. Browse the [array pattern guide](arrays/array-patterns.md) to recognize common problem types.
2. Attempt a linked problem independently on LeetCode.
3. Compare your approach with the documented solution and check its time and auxiliary space complexity.
4. Use the [revision guide](REVISION.md) to revisit problems without looking at the code.

## Topics and problem notes

| Topic | Resource | Practice |
| --- | --- | --- |
| Array traversal | [Largest element](arrays/largest-element.md) · [JavaScript](arrays/largest-element.js) | Foundational exercise |
| Read/write two pointers | [Remove Duplicates from Sorted Array](arrays/two-pointers.md#readwrite-pointers-remove-duplicates) · [JavaScript](arrays/remove-duplicates-sorted-array.js) | [LeetCode 26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) |
| Read/write two pointers | [Move Zeroes](arrays/move-zeroes.md) · [JavaScript](arrays/move-zeroes.js) | [LeetCode 283](https://leetcode.com/problems/move-zeroes/) |
| Backward two pointers | [Merge Sorted Array](arrays/two-pointers.md#backward-pointers-merge-sorted-array) | [LeetCode 88](https://leetcode.com/problems/merge-sorted-array/) |
| Array rotation | [Rotate Array](arrays/rotate-array.md) | [LeetCode 189](https://leetcode.com/problems/rotate-array/) |
| Hash maps | [Two Sum](arrays/hash-map.md) | [LeetCode 1](https://leetcode.com/problems/two-sum/) |
| Prefix sums | [Range Sum Query — Immutable](arrays/prefix-sum.md) | [LeetCode 303](https://leetcode.com/problems/range-sum-query-immutable/) |
| Kadane's algorithm | [Maximum Subarray](arrays/maximum-subarray.md) · [JavaScript](arrays/maximum-subarray.js) | [LeetCode 53](https://leetcode.com/problems/maximum-subarray/) |
| Fixed-size sliding window | [Maximum Average Subarray I](arrays/maximum-average-subarray.md) · [JavaScript](arrays/maximum-average-subarray.js) | [LeetCode 643](https://leetcode.com/problems/maximum-average-subarray-i/) |
| Fixed-size sliding window | [Maximum Number of Vowels in a Substring](arrays/maximum-vowels-substring.md) · [JavaScript](arrays/maximum-vowels-substring.js) | [LeetCode 1456](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) |
| Variable-size sliding window | [Minimum Size Subarray Sum](arrays/minimum-size-subarray-sum.md) · [JavaScript](arrays/minimum-size-subarray-sum.js) | [LeetCode 209](https://leetcode.com/problems/minimum-size-subarray-sum/) |

For a broader overview, see [Array Patterns](arrays/array-patterns.md).

## Conventions

- Solutions use modern JavaScript and the function signatures expected by LeetCode where applicable.
- **Time complexity** describes how the running time grows with input size.
- **Auxiliary space complexity** counts additional working memory, excluding the input and, unless stated otherwise, the returned output.
- `n` denotes an array's length; other variables are defined in the relevant notes.

The repository is organized by topic so individual notes can be used independently for study or interview revision.
