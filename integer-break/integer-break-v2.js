/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n <= 3) return n - 1;
    
    let count3 = Math.floor(n / 3);
    let remainder = 1;

    if (n % 3 === 1) {
        count3--;
        remainder = 4;
    } else if (n % 3 === 2) {
        remainder = 2;
    }
    
    let product = Math.pow(3, count3);
    
    product *= remainder;
    
    return product;
};
