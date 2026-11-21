/**
 * LeetCode #53 — Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 * Time: O(n)
 * Auxiliary Space: O(1)
 */
var maxSubArray = function(nums) {
    let largestSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        if (currentSum > largestSum) {
            largestSum = currentSum;
        }
    }

    return largestSum;
};
