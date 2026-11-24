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
