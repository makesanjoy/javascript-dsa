/**
 * LeetCode #643 — Maximum Average Subarray I
 * https://leetcode.com/problems/maximum-average-subarray-i/
 * Time: O(n)
 * Auxiliary Space: O(1)
 */
var findMaxAverage = function(nums, k) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < k; i++) {
        maxSum += nums[i];
    }

    currentSum = maxSum;

    for (let i = k; i < nums.length; i++) {
        currentSum = currentSum - nums[i - k] + nums[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum / k;
};
