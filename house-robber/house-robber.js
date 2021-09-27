/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    if (n === 1) return nums[0];
    if (n === 2) return Math.max(...nums);
    
    const memo = new Array(n).fill(0);
    memo[0] = nums[0];
    memo[1] = Math.max(nums[0],nums[1]);
    
    for (let i = 2; i < n; i++) {
        memo[i] = Math.max((nums[i] + memo[i-2]), memo[i-1]);
    }
    
    return memo[nums.length - 1];
};
