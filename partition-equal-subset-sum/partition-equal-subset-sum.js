/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canPartition = function(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    
    if (sum % 2 === 1) return false;
    
    // Memoization[index][sum]
    const memo = new Array(nums.length)
                     .fill(null)
                     .map(() => new Array(sum + 1).fill(null));
    
    return canPartitionHelper(nums, sum/2, 0, memo);
};

var canPartitionHelper = function(nums, sum, index, memo) {

    if (sum === 0) return true;
    
    if (index >= nums.length || nums.length === 0) return false;
    
    if (memo[index][sum] === null) {
        // Try including the current index number
        if (nums[index] <= sum) {
            if (canPartitionHelper(nums, sum - nums[index], index + 1, memo)) {
                memo[index][sum] = true;
                return true;
            }
        }

        // Try excluding the current index number
        memo[index][sum] = canPartitionHelper(nums, sum, index + 1, memo);
    }

    return memo[index][sum];
};