/**
 * TC O(2n)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let n = nums.length;
    let count0 = 0 
    let count1 = 0 
    let count2 = 0

    for(let i = 0; i < n; i++) {
        if(nums[i] == 0){
        count0++;
        }else if(nums[i] == 1) {
            
        count1++;
        }  
        else count2++;
    }

    for(let i = 0; i < count0; i++) nums[i] = 0;
    for(let i = count0; i < count0 + count1; i++) nums[i] = 1;
    for(let i = count0 + count1; i < n; i++) nums[i] = 2;
};


// more optimized using three pointers TC O(n) SC O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
    let n = nums.length;
    let low = 0, mid = 0, high = n - 1;

    while(mid <= high) {
        if(nums[mid] == 0) {
            let temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            low++;
            mid++;
        } else if (nums[mid] == 1) {
            mid++
        } else {
            let temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;
            high--;
        }   
    }
    
}