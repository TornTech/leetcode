/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const leftArray = cardPoints.slice(0, k);
    const rightArray = cardPoints.slice(cardPoints.length - k);
    const combinedArray = [...leftArray.reverse(), ...rightArray.reverse()];
    
    let currSum = combinedArray.slice(0, k).reduce((acc, num) => acc + num, 0);
    let maxSum = currSum;

    for (let i = 1; i <= combinedArray.length - k; i++) {
        currSum -= combinedArray[i-1];
        currSum += combinedArray[i + k - 1];
        maxSum = Math.max(maxSum, currSum);
    }
    
    return maxSum;
};

