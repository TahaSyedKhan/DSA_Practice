/**
 * @param {number[]} nums
 * @return {boolean}
 */
let dp;
function f(nums, idx) {
    let n = nums.length;
    if(dp[idx] != -1) return dp[idx];

    if(idx == n-1) return dp[idx] = true;

    for(let i = 1; i <= nums[idx]; i++) {
        if(f(nums, idx + i) == true) {
            return dp[idx] = true;
        }
    }
    return dp[idx] = false;
}
var canJump = function(nums) {
    dp = Array(10001).fill(-1);
    return f(nums, 0);
};