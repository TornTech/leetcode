/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const memo = new Array(nums.length).fill(false);
    memo[0] = true;
    
    for (let i = 0;  i < nums.length; i++) {
        const currentNum = nums[i];
        if (memo[i]) {
            for (let j = 0; j <= currentNum; j++) {
                const newIndex = i + j
                if (i + j < nums.length) {
                    memo[i + j] = true;
                }
            }
        }
    }
    return memo[nums.length - 1];
}
