/**
 * @param {number[][]} triangle
 * @return {number}
 */
 let matrix;
 let dp;
 function f(row, col) {
    let n = matrix.length - 1;
    if (row == n) return matrix[row][col];

    if(dp[row][col] != -1) return dp[row][col];
    dp[row][col] = matrix[row][col] + Math.min(f(row + 1, col), f(row + 1, col + 1));
    return dp[row][col];
 } 
var minimumTotal = function(triangle) {
    matrix = triangle;
    dp = Array(205);
    for(let i = 0; i < 205; i++) {
        dp[i] = Array(205).fill(-1);
    }
    return f(0, 0);
};