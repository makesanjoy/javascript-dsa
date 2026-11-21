# Practice and Revision Guide

Use this checklist to revisit problems without consulting the solution. The goal is to explain the invariant, implement the approach, and justify the complexity.

## Array practice

| Problem | Technique | Self-check |
| --- | --- | --- |
| [Largest Element](arrays/largest-element.md) | Single-pass tracking | Does the initialization work for all-negative input? |
| [Remove Duplicates — 26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | Read/write pointers | What does `k` represent after each iteration? |
| [Move Zeroes — 283](https://leetcode.com/problems/move-zeroes/) | Read/write pointers | Why is overwriting safe, and is order preserved? |
| [Merge Sorted Array — 88](https://leetcode.com/problems/merge-sorted-array/) | Backward pointers | Why must the destination be filled from the end? |
| [Rotate Array — 189](https://leetcode.com/problems/rotate-array/) | Rotation / reversal | What is the complexity of repeated shifting versus reversal? |
| [Two Sum — 1](https://leetcode.com/problems/two-sum/) | Hash map | Why check for the complement before inserting? |
| [Range Sum Query — 303](https://leetcode.com/problems/range-sum-query-immutable/) | Prefix sum | Why is the answer `prefix[right + 1] - prefix[left]`? |
| [Maximum Subarray — 53](https://leetcode.com/problems/maximum-subarray/) | Kadane's algorithm | When should a new subarray start instead of extending the previous one? |

## Review checklist

- [ ] Solve the problem again without looking at the previous implementation.
- [ ] Test empty or minimal inputs when allowed, duplicates, negatives, and boundary indices as applicable.
- [ ] Explain the key invariant or state tracked by the algorithm.
- [ ] State the time complexity and **auxiliary** space complexity.
- [ ] Identify one related problem where the same technique applies.

See the [Array Patterns guide](arrays/array-patterns.md) to compare techniques before attempting unfamiliar problems.
