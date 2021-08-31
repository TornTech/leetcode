/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let output = [];
    let currentWindow = [];
    
    for (let i = 0; i < nums.length; i++) {
        
        while (nums[currentWindow[currentWindow.length - 1]] <= nums[i]) {
            currentWindow.pop();
        }
        
        currentWindow.push(i);
        
        let j = currentWindow.length - 1;
        while (j >= 0) {
            if (currentWindow[j] <= i - k) {
                currentWindow.splice(j,1);
                j -= 2;
            } else {
                j--;
            }
        }
        
        if (i >= k - 1) output.push(nums[currentWindow[0]]);
    }
    
    return output;
};