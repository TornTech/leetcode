/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    let triplets = 0;
    nums.sort((a,b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        triplets += twoSumSmaller(nums, target, nums[i], i + 1)
    }
    
    return triplets;
};

var twoSumSmaller = function(nums, target, currNum, start) {
    let pairs = 0;
    let left = start;
    let right = nums.length - 1;
    
    while (left < right) {
        const leftNum = nums[left];
        const rightNum = nums[right];
        
        if (currNum + leftNum + rightNum < target) {
            pairs += right - left;
            left++;
        } else {
            right--;
        }
    }
    
    return pairs;
};


// ORIGINAL: nums[i] + nums[j] + nums[k] < target
// MODIFIED: nums[j] + nums[k] < target - nums[i]