/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
let dp;
function f(s1, s2, i, j) {
    if(i >= s1.length || j >= s2.length) {
        return 0;
    }
    if(dp[i][j] !== -1) return dp[i][j];
    if(s1[i] == s2[j]) {
        return 1 + f(s1, s2, i+1, j+1);
    } else {
        return dp[i][j] = Math.max(f(s1, s2, i, j+1), f(s1, s2, i+1, j));
    }
}
var longestCommonSubsequence = function(text1, text2) {
    dp = Array(1001);
    for(let i = 0; i < 1001; i++) {
        dp[i] = Array(1001).fill(-1);
    }
    return f(text1, text2, 0, 0);
};