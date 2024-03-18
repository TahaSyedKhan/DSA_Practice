/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 function minimizedLargestSum(nums, mid, k) {
    let subArrayCount = 0;
    let minSum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(minSum + nums[i] > mid) {
            subArrayCount++;
            minSum = 0;
        }
        minSum += nums[i];
    }
    subArrayCount++;
    return subArrayCount <= k
 }
var splitArray = function(nums, k) {
    let totalSum = 0
    let maxSum = -1;
    for(let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
        maxSum = Math.max(maxSum, nums[i]);
    }
    let low = maxSum;
    let high = totalSum;


    while(low <= high) {
        let mid = low + Math.floor((high-low) / 2);
        if(minimizedLargestSum(nums, mid, k)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid +1;
        }
    }
    return ans;
};