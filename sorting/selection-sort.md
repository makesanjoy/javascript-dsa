# Selection Sort

## Definition

Selection Sort is a comparison-based sorting algorithm that repeatedly finds the smallest element in the unsorted portion of an array and places it at the beginning of that portion.

After each pass, the sorted prefix grows by one element. Standard Selection Sort is in-place, but it is not stable.

## Example

Input: `[5, 1, 2, 8, 10]`

| Pass | Minimum selected | Array after pass |
| --- | --- | --- |
| 1 | 1 | `[1, 5, 2, 8, 10]` |
| 2 | 2 | `[1, 2, 5, 8, 10]` |
| 3 | 5 | `[1, 2, 5, 8, 10]` |
| 4 | 8 | `[1, 2, 5, 8, 10]` |

Output: `[1, 2, 5, 8, 10]`

## Approach

1. Start each pass at index `i`, the first unsorted position.
2. Scan indices `i + 1` through the end to locate the minimum value.
3. Swap the minimum into `arr[i]` only when it is at a different index.
4. Repeat until the sorted prefix covers the array.

## Optimized JavaScript Implementation

```javascript
/**
 * Selection Sort — Optimized
 * Best/Average/Worst Time: O(n²)
 * Auxiliary Space: O(1)
 * In-place: Yes
 * Stable: No
 */
function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Avoid unnecessary swaps
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

console.log(selectionSort([5, 1, 2, 8, 12, 21, 33, 22, 10]));
// [1, 2, 5, 8, 10, 12, 21, 22, 33]
```

The function sorts the original array in ascending order and returns the same array reference.

## Optimization: Avoid Unnecessary Swaps

The `if (minIndex !== i)` check skips swapping an element with itself when the minimum is already at the current position.

- This reduces unnecessary writes.
- Selection Sort performs at most `n - 1` swaps.
- This optimization does **not** improve its asymptotic time complexity: each pass still scans the remaining unsorted elements.
- Unlike optimized Bubble Sort, Selection Sort does not detect an already sorted array early.

## Complexity

| Case | Complexity | Why |
| --- | --- | --- |
| Best time | O(n²) | Still searches for the minimum every pass |
| Average time | O(n²) | Scans the unsorted suffix every pass |
| Worst time | O(n²) | Same number of comparisons regardless of order |
| Auxiliary space | O(1) | Only index and temporary variables are used |

For an array of length `n`, the inner loop makes `(n - 1) + (n - 2) + ... + 1 = n(n - 1) / 2` comparisons. This grows as O(n²), even when the input is sorted.

Auxiliary space is O(1) because the algorithm modifies the input array directly and does not allocate another array.

## Edge Cases

- Empty array: `[]` → `[]`
- Single element: `[5]` → `[5]`
- Already sorted: `[1, 2, 3]` → `[1, 2, 3]`
- Reverse sorted: `[3, 2, 1]` → `[1, 2, 3]`
- Duplicates: `[3, 1, 3]` → `[1, 3, 3]`
- Negative numbers: `[-1, -5, 2]` → `[-5, -1, 2]`

## When to Use Selection Sort

Selection Sort is primarily useful for understanding sorting fundamentals or handling very small arrays when performance is not critical. It can also be worth considering when reducing writes matters, because it makes at most O(n) swaps despite O(n²) comparisons.

### Suitable Use Cases

1. **DSA learning:** Practice minimum-index tracking, nested loops, and in-place swapping.
2. **Tiny inputs:** A simple implementation may be sufficient when speed is unimportant.
3. **Swap-sensitive situations:** Makes relatively few swaps compared with repeated adjacent swapping.

### When to Avoid Selection Sort

- Large datasets or performance-critical code: O(n²) comparisons scale poorly.
- Situations that require a stable sort: swapping can change the relative order of equal elements.
- Nearly sorted arrays where an adaptive algorithm such as Insertion Sort is a better choice.

### Sorting in JavaScript

For general-purpose production code, prefer the built-in numeric sort:

```javascript
const arr = [5, 1, 2, 8, 10];
arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 5, 8, 10]
```

The comparator is necessary for numeric ascending order because JavaScript's default sort compares string representations.

## Interview Takeaways

- Each pass selects the minimum remaining element and grows the sorted prefix.
- Best, average, and worst time complexities are all O(n²).
- Auxiliary space is O(1); sorting is in place.
- Checking `minIndex !== i` avoids redundant swaps but not comparisons.
- Standard Selection Sort is **not stable**.
