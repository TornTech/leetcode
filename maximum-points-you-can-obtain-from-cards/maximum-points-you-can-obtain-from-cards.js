/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let currSum = 0;
    for (let i = 0; i < k; i++) {
        currSum += cardPoints[i]
    }
    
    let maxSum = currSum;
    
    let leftNum = k - 1;
    for (let rightNum = cardPoints.length - 1; rightNum >= cardPoints.length - k; rightNum--) {
        currSum -= cardPoints[leftNum];
        currSum += cardPoints[rightNum];
        maxSum = Math.max(maxSum, currSum);
        leftNum--;
    }
    
    return maxSum;
};