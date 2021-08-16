/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squares = new Array(nums.length).fill(0);
    let left = 0;
    let right = nums.length - 1;
    let currIndex = nums.length - 1;

    while (left <= right) {
        let leftSquaredNum = Math.pow(nums[left], 2);
        let rightSquaredNum = Math.pow(nums[right], 2);

        if (leftSquaredNum > rightSquaredNum) {
            squares[currIndex] = leftSquaredNum;
            left++;
        } else {
            squares[currIndex] = rightSquaredNum;
            right--;
        }
        
        currIndex--;
    }

    return squares;
};