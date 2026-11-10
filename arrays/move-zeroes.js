/**
 * LeetCode #283 — Move Zeroes
 * https://leetcode.com/problems/move-zeroes/
 * Time: O(n)
 * Auxiliary Space: O(1)
 */
var moveZeroes = function(nums) {
    let k = 0;

    // Move non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[k] = nums[i];
            k++;
        }
    }

    // Fill remaining positions with zeros
    for (let i = k; i < nums.length; i++) {
        nums[i] = 0;
    }
};
