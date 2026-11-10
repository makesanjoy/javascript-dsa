# Array Patterns — Recognition Cheat Sheet

**Purpose:** Quickly identify which technique may help solve an array problem.

These are recognition clues, not strict rules. One problem may have multiple valid approaches.

## 1. Single-Pass Tracking

**When:** Find the minimum, maximum, or best result while traversing an array.

Example: `[4, 2, 9]` → Maximum = `9`

**Idea:** Maintain a variable for the best value seen so far.

Practice: [LeetCode #121 — Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## 2. Backward Two Pointers

**When:** Merge sorted arrays when the destination has extra space at the end.

Example: `[1,3,0,0]` + `[2,4]` → `[1,2,3,4]`

**Idea:** Start writing from the end to avoid overwriting values that haven't been processed.

Practice: [LeetCode #88 — Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

## 3. In-place Rotation

**When:** Rotate array elements without using an additional array.

Example: `[1,2,3,4,5]`, right rotate by 2 → `[4,5,1,2,3]`

**Idea:** Reversing sections of the array can achieve rotation in-place.

Practice: [LeetCode #189 — Rotate Array](https://leetcode.com/problems/rotate-array/)

## 4. Hash Set

**When:** Check whether an element has already appeared.

Example: `[1,2,1]` → Contains duplicate: `true`

**Idea:** Use a JavaScript `Set` for fast membership checks.

Practice: [LeetCode #217 — Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

## 5. Hash Map

**When:** Associate values with indices, counts, or other information.

Example: `[2,7,11]`, target `9` → Indices `[0,1]`

**Idea:** Use JavaScript `Map` to store key-value relationships.

Practice: [LeetCode #1 — Two Sum](https://leetcode.com/problems/two-sum/)

## 6. Prefix Sum

**When:** Calculate sums of multiple contiguous ranges efficiently.

Example: `[2,1,3]` → Sum from index 1 to 2 = `1 + 3 = 4`

**Idea:** Store cumulative sums so each range sum can be calculated by subtraction.

Practice: [LeetCode #303 — Range Sum Query](https://leetcode.com/problems/range-sum-query-immutable/)

## 7. Kadane's Algorithm

**When:** Find the maximum sum of a non-empty contiguous subarray.

Example: `[-2,4,-1,2]` → Maximum sum = `5` from `[4,-1,2]`

**Idea:** At each element, decide whether to extend the current subarray or start a new one.

Practice: [LeetCode #53 — Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

## 8. Sliding Window

**When:** Find information about contiguous subarrays, often with a fixed or variable window size.

Example: `[2,1,5,1,3]`, window size 3 → Maximum sum = `9` from `[5,1,3]`

**Idea:** Move the window while updating its running information instead of recalculating everything.

Practice: [LeetCode #209 — Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)

---

## Key Differences

- **Hash Set:** Has this value appeared before?
- **Hash Map:** What information is associated with this value?
- **Two Pointers:** Two positions move through an array.
- **Sliding Window:** Pointers define a contiguous range.
- **Prefix Sum:** Answer range-sum queries efficiently.
- **Kadane:** Find the best contiguous subarray sum.

## Learning Status

- Read/Write Two Pointers: Practiced — revision needed
- Single-Pass Tracking: Pending focused practice
- Backward Two Pointers: Pending
- In-place Rotation: Pending
- Hash Set: Pending
- Hash Map: Pending
- Prefix Sum: Pending
- Kadane's Algorithm: Pending
- Sliding Window: Pending
