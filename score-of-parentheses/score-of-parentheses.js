/**
 * @param {string} s
 * @return {number}
 */

var scoreOfParentheses = function(s) {
    let left = 0;
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === "(")  {
            left++;
        } else  {
            left--;
            if (s[i-1] === "(") {
                result += 2 ** left;
            }
        }
    }
    
    return result;
};