/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    let j = 1;
    let numsToRemove = 0;

    while (j < nums.length) {
        if (nums[i] === nums[j]) {
            j++;
            numsToRemove++;
        } else {
            nums.splice(i,numsToRemove);
            i = j - numsToRemove;
            j = i + 1;
            numsToRemove = 0;
        }
    }
    
    if (numsToRemove > 0) nums.splice(i, numsToRemove);

    return nums.length;
};