/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function(n) {
    let numOfWays = 1;
    
    for (let length = 2; (length * (length + 1)) / 2 <= n ; length++) {
        for (let startingNum = Math.max(1, Math.floor((n / length) - length)); startingNum < n / length + length; startingNum++) {
            let sumOfSequenceResult = sumOfSequence(startingNum, length);
            if (sumOfSequenceResult === n) numOfWays++;
            if (sumOfSequenceResult >= n) break;
        }
    }
    
    return numOfWays;
};

var sumOfSequence = function(startingNum, length) {
    return ((length * (length + 1)) / 2) + (length * (startingNum-1))
}