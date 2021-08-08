/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let output = [];
    if (digits[digits.length-1] < 9) {
        output = [...digits];
        output[output.length-1]++;
    } else if (digits.every(digit => digit === 9)) {
        output = new Array(digits.length + 1).fill(0);
        output[0] = 1;
    } else {
        output = [...digits];
        let pointer = output.length - 1;
        while (pointer > 0 && output[pointer] === 9) {
            output[pointer] = 0;
            pointer--;
        }
        output[pointer]++;
    }
    return output;
};