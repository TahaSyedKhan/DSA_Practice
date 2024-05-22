// TC O(n^2)
let max = Number.MIN_SAFE_INTEGER;
    let n = nums.length;

    for(let i = 0; i < n; i++) {
        let sum = 0;
        for(let j = i; j < n; j++) {
            sum += nums[j];
            max = Math.max(sum, max);
            console.log(max);
        }
    }
    // return max;

    //optimal solution using kadane's algorithm TC O(n)
    /**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let n = nums.length;
    let sum = 0;

    for(let i = 0; i < n; i++) {
        sum += nums[i];
        max = Math.max(sum, max);

        // if the sum becomes negative no need to carry it forward becauuse it will reduce the sum.
        if(sum < 0) {
            sum = 0;
        }
    }

    return max;
};