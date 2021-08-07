/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a-b);
    let results = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i-1])) {
            let compliment = -nums[i];
            let low = i + 1;
            let high = nums.length - 1;

            while (low < high) {
                let current2Sum = nums[low] + nums[high];
                if (current2Sum === compliment) {
                    results.push([nums[i], nums[low], nums[high]]);
                    while (low < high && nums[low] === nums[low+1]) low++;
                    while (low < high && nums[high] === nums[high-1]) high--;
                    low++;
                    high--;
                } else if (current2Sum < compliment) {
                    low++;
                } else {
                    high--;
                }
            }
        }
    }
    return results;
};