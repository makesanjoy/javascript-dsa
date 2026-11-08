# Largest Element in an Array

Difficulty: Easy
Status: Solved with guidance

## Problem
Find the largest number in a non-empty array.

## Approach
1. Initialize `largest` with the first element.
2. Traverse the remaining elements using a for loop.
3. Update `largest` whenever a larger value is found.
4. Return `largest`.

## Complexity
- Time: O(n) — visit each element once.
- Auxiliary Space: O(1) — constant extra memory.

## Edge Cases
- All negative numbers
- Single-element array
- Duplicate elements
- Already sorted array

## Key Lesson
Initialize with arr[0], not 0, to handle
arrays containing only negative numbers.
