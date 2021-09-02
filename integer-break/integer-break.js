/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n <= 3) return n - 1;
    if (n === 4) return n;
    
    let count2 = 0;
    let count3 = Math.floor(n / 3);
    let count4 = 0;

    if (n % 3 === 1) {
        count3--;
        count4++;
    } else if (n % 3 === 2) {
        count2++;
    }
    
    let product = 1;
    while (count3 > 0) {
        product *= 3
        count3--;
    }
    
    if (count4) product *= 4;
    if (count2) product *= 2;
    
    return product;
};