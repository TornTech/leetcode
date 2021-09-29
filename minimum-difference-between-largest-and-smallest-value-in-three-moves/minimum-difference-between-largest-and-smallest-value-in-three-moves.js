/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if (nums.length <= 4) return 0;

    nums.sort((a, b) => a - b);
    
    function minDifferenceHelper(nums, left, right, count) {
        
        if (left > right || !count) {
            return nums[right] - nums[left];
        }
        
        return Math.min(minDifferenceHelper(nums, left+1, right, count-1), minDifferenceHelper(nums, left, right-1, count-1));
    }
    
    return minDifferenceHelper(nums, 0, nums.length - 1, 3);
};