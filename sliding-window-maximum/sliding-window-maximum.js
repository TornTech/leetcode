/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const maxSlidingWindow = [];
    let currWindow = [];
    
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        
        currWindow.push([currNum, i]);
        if (currWindow[0][1] <= i - k) currWindow.shift();
        
        while (currWindow.length > 1 && currWindow[currWindow.length - 1][0] > currWindow[currWindow.length - 2][0]) {
            currWindow.splice(currWindow.length - 2, 1);
        }

        if (i >= k - 1) maxSlidingWindow.push(currWindow[0][0]);
    }
    
    return maxSlidingWindow;
};
