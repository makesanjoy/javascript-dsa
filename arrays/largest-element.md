# Largest Element in an Array

**Difficulty:** Easy · **Technique:** Single-pass tracking

## Problem

Given a non-empty array of numbers, return its largest element.

**Example:** `[-8, -3, -5]` → `-3`

**Implementation:** [largest-element.js](largest-element.js)

## Approach

1. Initialize `largest` to the first element.
2. Scan the remaining elements and replace `largest` whenever a greater value appears.
3. Return `largest` after the scan.

## Complexity

- **Time:** `O(n)` — each element is examined at most once.
- **Auxiliary space:** `O(1)` — only one tracking variable is needed.

## Edge cases

- All-negative input: initialize from `arr[0]`, not `0`.
- A single element: return that element.
- Repeated values: the maximum remains unchanged.

**Key takeaway:** Initialize a running optimum from a valid input value when the input can contain negatives.
