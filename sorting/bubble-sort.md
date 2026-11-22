# Bubble Sort

## Definition

Bubble Sort is a comparison-based sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order.

After each pass, the largest unsorted element moves to its correct position at the end of the array.

Bubble Sort is an in-place, stable sorting algorithm.

## Example

Input: [5, 3, 1]

Pass 1:
- Compare 5 and 3 → swap: [3, 5, 1]
- Compare 5 and 1 → swap: [3, 1, 5]

Pass 2:
- Compare 3 and 1 → swap: [1, 3, 5]

Output: [1, 3, 5]

## Approach

1. Use an outer loop to control sorting passes.
2. Use an inner loop to compare adjacent elements.
3. Swap elements when arr[j] > arr[j + 1].
4. Reduce comparisons after each pass because the largest remaining element is already in its final position.
5. Track swaps using a boolean. If no swaps occur during an entire pass, stop early because the array is sorted.

## Optimization: Early Exit

The original Bubble Sort performs all passes even when the array is already sorted.

Using `swapped` avoids unnecessary passes:

- Initialize `swapped = false` at the beginning of each pass.
- Set it to `true` whenever a swap occurs.
- If it remains `false` after the pass, break the outer loop.

Example: [1, 2, 3, 4, 5]

- Without early exit: 10 comparisons.
- With early exit: 4 comparisons.

## Complexity

| Case | Time |
|---|---|
| Best (already sorted, optimized) | O(n) |
| Average | O(n²) |
| Worst | O(n²) |
| Auxiliary space | O(1) |

The unoptimized implementation takes O(n²) even in the best case.

The optimized best case is O(n) because one pass confirms the array is sorted.

Auxiliary space is O(1) because sorting uses only a few variables and modifies the input array directly.

## Edge Cases

- Empty array: [] → []
- Single element: [5] → [5]
- Already sorted: [1, 2, 3] → [1, 2, 3]
- Reverse sorted: [3, 2, 1] → [1, 2, 3]
- Duplicates: [3, 1, 3] → [1, 3, 3]
- Negative numbers: [-1, -5, 2] → [-5, -1, 2]

## When to Use Bubble Sort

Bubble Sort is primarily useful for learning sorting fundamentals and working with very small datasets. It is rarely preferred in production.

### Suitable Use Cases

1. **DSA learning:** Understand comparisons, swaps, nested loops, and complexity.
2. **Very small arrays:** Acceptable when performance is not critical.
3. **Nearly sorted arrays:** Early exit can avoid unnecessary passes, although Insertion Sort is often more efficient.
4. **Limited auxiliary memory:** Sorts in place using O(1) extra space.
5. **Stable sorting:** Preserves the order of equal elements because equal values are not swapped.

### When to Avoid Bubble Sort

Avoid Bubble Sort for large datasets or performance-critical applications because its average and worst-case time complexity is O(n²).

### Comparison with Other Sorting Algorithms

| Algorithm | Average Time | Typical Use |
|---|---|---|
| Bubble Sort | O(n²) | Learning and tiny inputs |
| Insertion Sort | O(n²) | Small or nearly sorted arrays |
| Merge Sort | O(n log n) | Stable, efficient sorting |
| Quick Sort | O(n log n) | General-purpose sorting |

### Sorting in JavaScript

For production applications, generally prefer JavaScript's built-in `sort()` method.

```javascript
const arr = [5, 3, 1, 6, 10];

arr.sort((a, b) => a - b);

console.log(arr); // [1, 3, 5, 6, 10]
```

The numeric comparator is important because JavaScript's default sorting compares values as strings.

## Interview Takeaway

Understand Bubble Sort's adjacent swapping, early-exit optimization, O(n²) worst-case time, and O(1) auxiliary space. Insertion Sort is often a better alternative for small or nearly sorted arrays.

## Key Takeaways

- Adjacent elements are compared and swapped.
- Each completed pass places the largest remaining element correctly.
- Early exit improves best-case time from O(n²) to O(n).
- Bubble Sort is stable when equal elements are not swapped.
- It is useful for learning sorting fundamentals but inefficient for large datasets.
