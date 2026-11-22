/**
 * Bubble Sort — Optimized
 * Best Time: O(n)
 * Average/Worst Time: O(n²)
 * Auxiliary Space: O(1)
 */
function bubbleSortArr(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true;
            }
        }

        if (!swapped) break;
    }

    return arr;
}

console.log(bubbleSortArr([5, 3, 1, 6, 10, 78, 0, 8, 23]));
// [0, 1, 3, 5, 6, 8, 10, 23, 78]
