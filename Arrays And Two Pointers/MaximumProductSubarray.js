/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let n = nums.length;
    let pre = 1;
    let suf = 1;

    for(let i = 0; i < n; i++) {
        if(pre == 0) pre = 1;
        if(suf == 0) suf = 1;

        pre = pre * nums[i];
        suf = suf * nums[n-i-1];

        max = Math.max(max, Math.max(pre, suf));
    }

    return max;
};