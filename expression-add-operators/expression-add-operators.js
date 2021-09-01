/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    const output = [];

    operationCalculator(num, [], 0, 0)
    
    function operationCalculator(string, operatorsSoFar, sumSoFar, previous) {      
        if (sumSoFar === target && !string.length) {
            output.push(operatorsSoFar.join(''));
            return;
        }
        
        const len = string[0] === '0' ? 1 : string.length;
        
        for (let i = 1; i <= len; i++) {
            const currNum = Number(string.slice(0,i));
            const restNum = string.slice(i);
            
            if (!operatorsSoFar.length) {
                operationCalculator(restNum, [currNum], currNum, currNum)
            } else {
                const product = previous * currNum;
                operationCalculator(restNum, [...operatorsSoFar, "*", currNum], sumSoFar - previous + product, product);
                operationCalculator(restNum, [...operatorsSoFar, "+", currNum], sumSoFar + currNum, currNum);
                operationCalculator(restNum, [...operatorsSoFar, "-", currNum], sumSoFar - currNum, 0-currNum);
                
            }
        }
    }
    
    return output;
};


