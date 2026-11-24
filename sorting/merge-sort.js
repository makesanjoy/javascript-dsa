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
