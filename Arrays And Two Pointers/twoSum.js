/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n = nums.length;
    for(i = 0; i < n-1; i++) {
        for(j = i + 1; j < n; j++){
            if(nums[i] + nums[j] == target) {
                return [i, j]
            
        }
        }
    }
};