/**
 * @param {string} s
 * @return {number}
 */
let dp;
function f(i, s) {
    let n = s.length;

    if(dp[i] != -1) return dp[i];
    
    if(i == n) {
        return dp[i] = 1;
    }
    if(s[i] == '0') {
        return dp[i] = 0;
    }
    
    let oneLength = f(i+1, s);
    let twoLength = 0;
    if(i + 1 < n) {
        if(s[i] == 1 || s[i] == 2 && s[i + 1] <= 6) {
        twoLength = f(i+2, s);
    }
    }


    return dp[i] = oneLength + twoLength;
}
var numDecodings = function(s) {
    dp = Array(101).fill(-1);
    return f(0, s)
};