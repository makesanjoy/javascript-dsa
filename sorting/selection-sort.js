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
