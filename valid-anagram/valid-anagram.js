/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sCharCount = charCounter(s);
    const tCharCount = charCounter(t);
    
    // Confirm the charCounts are the same
    if (Object.keys(sCharCount).length !== Object.keys(tCharCount).length)
        return false;
    
    // Confirm each char count is the same
    for (char in sCharCount) {
        if (char in tCharCount && sCharCount[char] === tCharCount[char]) {
            continue;
        } else 
            return false;
    }
    return true;
};
    
// Helper function that returns character count of each letter in input string
var charCounter = function(str) {
    let charCount = {};
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (char in charCount) charCount[char]++
        else charCount[char] = 1;
    }
    
    return charCount;
}