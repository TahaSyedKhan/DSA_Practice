/**
 * @param {number[]} nums
 * @return {number}
 */
let dp;
function f(i, n, nums) {
    if(i > n) return 0;
    if(dp[i] != -1) return dp[i];
    let pick = nums[i] + f(i + 2, n,  nums);
    let notPick = f(i + 1, n, nums);
    return dp[i] = Math.max(pick, notPick);
}
var rob = function(nums) {
    let n = nums.length;
    if(n == 1) {
        return nums[0]
    }
    if(n == 2) {
        return Math.max(nums[0], nums[1]);
    }
    dp = Array(100).fill(-1);
    let takeIstHouse = f(0, n-2, nums);
    dp = Array(100).fill(-1);
    let takeLastHouse = f(1, n-1, nums)
        return Math.max(takeIstHouse, takeLastHouse);
};