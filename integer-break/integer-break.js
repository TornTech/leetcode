/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n <= 3) return n - 1;
    
    let product = 1;
    let numOf3s = Math.floor(n / 3);
    let remainder = n % 3;
    
    product *= Math.pow(3, numOf3s);

    if (remainder === 1) {
        product /= 3;
        product *= 4;
    } else if (remainder > 0) {
        product *= remainder;
    }
    
    return product;
};


//  2 = 1 + 1,         product:  1
//  3 = 2 + 1,         product:  2
//  4 = 2 + 2,         product:  4
//  5 = 2 + 3,         product:  6
//  6 = 3 + 3,         product:  9
//  7 = 3 + 4,         product: 12
//  8 = 3 + 3 + 2,     product: 18
//  9 = 3 + 3 + 3,     product: 27
// 10 = 3 + 3 + 4,     product: 36
// 11 = 3 + 3 + 3 + 2, product: 54

