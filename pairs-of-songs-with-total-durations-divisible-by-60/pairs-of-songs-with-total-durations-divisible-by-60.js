/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    const seenNums = new Map();
    let numOfPairs = 0;
    const maxVal = Math.max(...time);
    
    for (let i = 0; i < time.length; i++) {
        const currTime = time[i];
        let numRequiredToBeDivisible;
        
        if (currTime <= 60) 
            numRequiredToBeDivisible = 60 - currTime;
        else 
            numRequiredToBeDivisible = Math.ceil(currTime / 60) * 60 - currTime;
        
        if (seenNums.has(numRequiredToBeDivisible)) {
            numOfPairs += seenNums.get(numRequiredToBeDivisible);
        }
        
        for (let j = numRequiredToBeDivisible + 60; j <= maxVal; j = j + 60) {
            if (seenNums.has(j)) {
                numOfPairs += seenNums.get(j);
            }
        }
        
        seenNums.has(currTime) ? seenNums.set(currTime, seenNums.get(currTime) + 1) : seenNums.set(currTime, 1)
    }
    
    return numOfPairs;
};