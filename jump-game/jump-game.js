/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const memo = new Array(nums.length).fill(null);
    
    return canJumpHelper(nums, 0, memo);   
}

var canJumpHelper = function(nums, index, memo) {
    if (index === nums.length - 1) return true;
    if (index >= nums.length) return false;
    if (memo[index] !== null) return memo[index];
    
    const currentNum = nums[index];
    
    if (!currentNum) return false;
    
    for (let i = 1; i <= currentNum; i++) {
        memo[index+i] = canJumpHelper(nums, index + i, memo);
        
        if (memo[index+i]) return true;
    }
    
    return false;
}