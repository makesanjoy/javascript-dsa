function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

// Test cases
console.log(findLargest([10, 5, 20, 8])); // 20
console.log(findLargest([-10, -5, -20]));  // -5
console.log(findLargest([7]));             // 7
console.log(findLargest([5, 5, 5]));       // 5
