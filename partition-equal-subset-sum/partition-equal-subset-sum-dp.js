/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canPartition = function(nums) {
    let sum = nums.reduce((acc, num) => acc + num, 0);
    
    if (sum % 2 === 1) return false;
    
    const n = nums.length;
    
    sum /= 2;
    
    // dp[num][sum]
    const dp = new Array(n)
                     .fill(false)
                     .map(() => new Array(sum + 1).fill(false));

    for (let i = 0; i < n; i++)
        dp[i][0] = true;
    
    for (let i = 1; i < sum; i++)
        dp[0][i] = nums[0] == i;
    
    for (let currNum = 1; currNum < n; currNum++) {
        for (let currSum = 1; currSum <= sum; currSum++) {
            if (dp[currNum-1][currSum]) {
                dp[currNum][currSum] = true;
            } else if (currSum >= nums[currNum]) {
                dp[currNum][currSum] = dp[currNum - 1][currSum - nums[currNum]];
            }
        }
    }
    
    return dp[n - 1][sum];
};
