# Array Patterns: Recognition Guide

Use these clues to select a starting approach for an array problem. They are heuristics, not strict rules: a problem may support several techniques.

| Pattern | Look for | Core idea | Practice |
| --- | --- | --- | --- |
| Single-pass tracking | Best, minimum, maximum, or running result | Update a small amount of state as elements are scanned | [121 — Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) |
| Read/write two pointers | Remove, compact, or rearrange elements in place | Scan with one index and write accepted values with another | [26 — Remove Duplicates](https://leetcode.com/problems/remove-duplicates-from-sorted-array/), [283 — Move Zeroes](https://leetcode.com/problems/move-zeroes/) |
| Backward two pointers | Merge sorted data into a buffer at the end | Fill the destination from right to left to avoid overwriting input | [88 — Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) |
| In-place rotation | Shift elements cyclically without another array | Use reversals or controlled shifts | [189 — Rotate Array](https://leetcode.com/problems/rotate-array/) |
| Hash set | Detect repeated or previously seen values | Track membership with `Set` | [217 — Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) |
| Hash map | Look up an index, frequency, or complement | Store key–value associations in `Map` | [1 — Two Sum](https://leetcode.com/problems/two-sum/) |
| Prefix sum | Answer repeated sums over contiguous ranges | Precompute cumulative sums and subtract | [303 — Range Sum Query](https://leetcode.com/problems/range-sum-query-immutable/) |
| Kadane's algorithm | Maximum sum of a contiguous subarray | Track the best sum ending at each position | [53 — Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) |
| Sliding window | Fixed-size or variable-size contiguous segments | Update a moving range instead of recomputing it | [643 — Maximum Average Subarray I (fixed size)](https://leetcode.com/problems/maximum-average-subarray-i/), [1456 — Maximum Number of Vowels (fixed size)](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/), [209 — Minimum Size Subarray Sum (variable size)](https://leetcode.com/problems/minimum-size-subarray-sum/) |

## Quick examples

- **Read/write pointers:** `[0, 1, 0, 3]` becomes `[1, 3, 0, 0]` while preserving non-zero order.
- **Prefix sum:** For `[2, 1, 3]`, the inclusive range from index `1` to `2` totals `4`.
- **Kadane's algorithm:** For `[-2, 4, -1, 2]`, the maximum subarray sum is `5`.
- **Sliding window:** For `[2, 1, 5, 1, 3]`, the largest sum of any three consecutive elements is `9`.

## Distinguish similar techniques

- **Two pointers vs. sliding window:** Two pointers track positions; a sliding window specifically maintains a contiguous range.
- **Set vs. Map:** `Set` answers whether a value exists; `Map` associates a value with information such as its index or count.
- **Prefix sum vs. sliding window:** Prefix sums are useful for repeated range-sum queries; sliding windows are useful when a range moves and can be updated incrementally.

Read the [Two Pointers](two-pointers.md), [Hash Map](hash-map.md), and [Prefix Sum](prefix-sum.md) notes for worked examples.
