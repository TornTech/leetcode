/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(A, B) {
    const memo = new Array(A.length + 1).fill(0).map(() => new Array(B.length + 1).fill(null));
    
    return longestCommonSubsequenceHelper(A, B, memo);
};

var longestCommonSubsequenceHelper = function(A, B, memo) {
    let i = A.length;
    let j = B.length;
    
    if (memo[i][j] === null) {
        if (i === 0 || j === 0) {
            memo[i][j] = 0
        } else if (A[i-1] === B[j-1]) {
            memo[i][j] = 1 + longestCommonSubsequenceHelper(A.substring(0,i-1), B.substring(0,j-1), memo);
        } else {
            memo[i][j] = Math.max(longestCommonSubsequenceHelper(A, B.substring(0,j-1), memo),
                                  longestCommonSubsequenceHelper(A.substring(0,i-1), B, memo));
        }
    }

    return memo[i][j];
};
