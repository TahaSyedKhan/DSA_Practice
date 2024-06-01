/**
 * @param {string} s
 * @return {string}
 */
let dp;
// function for checking palimdrome 
function f(s, i, j) {
    if(dp[i][j] != -1) return dp[i][j];
    if(i >= j) {
        return dp[i][j] = 1;
    } 
    if(s[i] == s[j]) { 
        return dp[i][j] = f(s, i+1, j-1);
    }
    return dp[i][j] = 0;
}
var longestPalindrome = function(s) {
    dp = Array(1001);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = Array(1001).fill(-1);
    }
    let n = s.length;
    let maxLen = 0;
    let sp = 0;
    // getting all substrings 
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            // then check wheather they are palindrome or not by calling a function f()
            if(f(s,i, j)) {
                // then calculating maxLength and starting point of of Palindrome string
                if(j-i+1 > maxLen) {
                    maxLen = j-i+1;
                    sp = i;
                }
            }
        }
    }

    // using inbuilt method to return a palindrome string
    return s.substr(sp, maxLen);
};