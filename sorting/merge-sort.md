# Merge Sort

## Definition

Merge Sort is a stable, comparison-based sorting algorithm that follows the **Divide and Conquer** strategy.

It recursively divides an array into smaller subarrays until each contains at most one element, then merges those subarrays in sorted order.

## Approach

1. **Divide:** Split the array into two halves.
2. **Conquer:** Recursively sort both halves.
3. **Merge:** Combine the sorted halves using two pointers.

## Example and Dry Run

Input: `[5, 1, 2, 8, 12, 10]`

```text
                [5, 1, 2, 8, 12, 10]
                    /          \
              [5, 1, 2]      [8, 12, 10]
               /     \        /      \
             [5]   [1, 2]   [8]    [12, 10]
                   /   \            /    \
                 [1]   [2]        [12]   [10]

                     MERGING

             [5]   [1, 2]   [8]    [10, 12]
               \     /        \       /
              [1, 2, 5]      [8, 10, 12]
                    \          /
                [1, 2, 5, 8, 10, 12]
```

### How the Merge Function Works

Suppose we have two sorted arrays:

```javascript
left = [2, 5, 8];
right = [1, 3, 7];
```

| Comparison | Selected | Result |
| --- | --- | --- |
| 2 vs 1 | 1 | [1] |
| 2 vs 3 | 2 | [1, 2] |
| 5 vs 3 | 3 | [1, 2, 3] |
| 5 vs 7 | 5 | [1, 2, 3, 5] |
| 8 vs 7 | 7 | [1, 2, 3, 5, 7] |
| Remaining element | 8 | [1, 2, 3, 5, 7, 8] |

## Optimized JavaScript Implementation

```javascript
/**
 * Merge Sort
 * Time Complexity: O(n log n)
 * Auxiliary Space: O(n)
 * Stable: Yes
 * In-place: No
 */

function merge(left, right) {
    const res = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }

    // Append remaining elements
    while (i < left.length) {
        res.push(left[i]);
        i++;
    }

    while (j < right.length) {
        res.push(right[j]);
        j++;
    }

    return res;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

const arr = [5, 1, 2, 8, 12, 21, 33, 22, 10];

console.log(mergeSort(arr));

// [1, 2, 5, 8, 10, 12, 21, 22, 33]
```

## Optimization

Instead of using:

```javascript
return [...res, ...left.slice(i), ...right.slice(j)];
```

the implementation uses two remaining-element loops. This avoids unnecessary temporary arrays and copying the entire result again. It improves memory allocation overhead without changing the overall time or auxiliary space complexity.

## Time and Space Complexity

| Case | Complexity |
| --- | --- |
| Best-case time | O(n log n) |
| Average-case time | O(n log n) |
| Worst-case time | O(n log n) |
| Auxiliary space | O(n) |
| Recursion stack | O(log n) |
| Stable | Yes |
| In-place | No |

### Why T(n) = O(n log n)?

Consider an array with eight elements:

```text
Level 0:              8                 O(n) work
Level 1:          4       4             O(n) work
Level 2:        2   2   2   2           O(n) work
Level 3:       1 1 1 1 1 1 1 1          Base case
```

- Dividing the array into halves creates O(log n) levels.
- Processing all elements at each level requires O(n) time.
- Total time: O(n × log n).

### Why S(n) = O(n)?

- Temporary subarrays and merge result arrays require O(n) peak working memory.
- Recursive function calls require O(log n) stack space.
- O(n + log n) simplifies to **O(n)**.

## Edge Cases

| Input | Output |
| --- | --- |
| `[]` | `[]` |
| `[5]` | `[5]` |
| `[1, 2, 3]` | `[1, 2, 3]` |
| `[3, 2, 1]` | `[1, 2, 3]` |
| `[3, 1, 3]` | `[1, 3, 3]` |
| `[-1, -5, 2]` | `[-5, -1, 2]` |

## When to Use Merge Sort

- Sorting large datasets with predictable performance.
- When stable sorting is required.
- Sorting linked lists efficiently.
- External sorting when data cannot fit entirely into memory.
- Solving divide-and-conquer problems such as counting inversions.

Avoid this array implementation when additional memory is severely limited.

## Comparison with Other Sorting Algorithms

| Property | Bubble Sort (optimized) | Selection Sort | Merge Sort |
| --- | --- | --- | --- |
| Best time | O(n) | O(n²) | O(n log n) |
| Average time | O(n²) | O(n²) | O(n log n) |
| Worst time | O(n²) | O(n²) | O(n log n) |
| Auxiliary space | O(1) | O(1) | O(n) |
| Stable | Yes | No | Yes |
| In-place | Yes | Yes | No |

## Memory-Optimized and Adaptive Merge Sort

The following implementation supports both memory-optimized and adaptive Merge Sort without duplicating code.

```javascript
/**
 * Memory-optimized Merge Sort
 * Best Time: O(n log n), or O(n) with adaptive mode
 * Average/Worst Time: O(n log n)
 * Auxiliary Space: O(n)
 * Stable: Yes
 * Modifies input: Yes
 */

function mergeSortOptimized(arr, adaptive = false) {
    const temp = new Array(arr.length);

    function sort(low, high) {
        if (low >= high) return;

        const mid = Math.floor((low + high) / 2);

        sort(low, mid);
        sort(mid + 1, high);

        // Adaptive optimization
        if (adaptive && arr[mid] <= arr[mid + 1]) {
            return;
        }

        merge(low, mid, high);
    }

    function merge(low, mid, high) {
        let i = low;
        let j = mid + 1;
        let k = low;

        while (i <= mid && j <= high) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
            }
        }

        while (i <= mid) {
            temp[k++] = arr[i++];
        }

        while (j <= high) {
            temp[k++] = arr[j++];
        }

        for (let p = low; p <= high; p++) {
            arr[p] = temp[p];
        }
    }

    sort(0, arr.length - 1);

    return arr;
}

// Memory-optimized version
console.log(mergeSortOptimized([5, 1, 8, 2]));
// [1, 2, 5, 8]

// Adaptive version
console.log(mergeSortOptimized([5, 1, 8, 2], true));
// [1, 2, 5, 8]
```

### Optimization 1: Reusable Temporary Array

Instead of repeatedly creating arrays using `slice()`, use array indices to divide the input logically.

```javascript
sort(low, mid);
sort(mid + 1, high);
```

Allocate temporary storage only once:

```javascript
const temp = new Array(arr.length);
```

**Benefits:**

- Avoids repeated subarray allocation.
- Reduces garbage collection pressure.
- Reuses the same temporary array during every merge.
- Reduces cumulative temporary array allocation from O(n log n) to O(n).
- Peak auxiliary space remains O(n).

### Optimization 2: Skip Unnecessary Merging

```javascript
if (adaptive && arr[mid] <= arr[mid + 1]) {
    return;
}
```

Consider two already sorted halves:

```text
Left:  [1, 3, 5]
Right: [6, 8, 9]

5 <= 6 → true

Merging is unnecessary.
```

However:

```text
Left:  [1, 3, 7]
Right: [2, 5, 9]

7 <= 2 → false

Merging is required.
```

### Why Does Best-Case T(n) Become O(n)?

For an already sorted array, every merge is skipped.

The recursion still visits approximately `2n - 1` calls, but each call performs only constant work outside its recursive calls.

Therefore, **T(n) = O(n)**.

Average and worst-case time remain O(n log n).

### Why Is S(n) Still O(n)?

The reusable temporary array requires O(n) space, and the recursion stack requires O(log n).

S(n) = O(n) + O(log n) = O(n).

## Complete Merge Sort Comparison

| Property | Standard | Memory-optimized | Adaptive |
| --- | --- | --- | --- |
| Best T(n) | O(n log n) | O(n log n) | **O(n)** |
| Average T(n) | O(n log n) | O(n log n) | O(n log n) |
| Worst T(n) | O(n log n) | O(n log n) | O(n log n) |
| Auxiliary S(n) | O(n) | O(n) | O(n) |
| Recursion stack | O(log n) | O(log n) | O(log n) |
| Cumulative array allocation | O(n log n) | O(n) | O(n) |
| Uses `slice()` | Yes | No | No |
| Modifies input | No | Yes | Yes |
| Stable | Yes | Yes | Yes |

**Important:** Modifying the original array does not make the optimized version strictly in-place, because it still requires O(n) additional memory.
