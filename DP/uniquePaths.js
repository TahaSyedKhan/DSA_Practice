/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let dp;
function f(i, j, m, n) {
    if(dp[i][j] != -1) return dp[i][j];
    if(i == m - 1 || j == n - 1) {
        return dp[i][j] = 1;
    }
    if(i < 0 || i >= m && j < 0 || j >= n) {
        return dp[i][j] = 0;
    }

    let right = f(i+1, j, m, n);
    let down = f(i, j+1, m, n);

    return dp[i][j] = right + down;
}
var uniquePaths = function(m, n) {
    dp = Array(101)
    for(let i = 0; i < 101; i++) {
        dp[i] = Array(101).fill(-1);
    }
    return f(0, 0, m, n);
};