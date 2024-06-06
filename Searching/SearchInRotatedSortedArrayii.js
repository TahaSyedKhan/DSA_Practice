/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function findPivot(nums, l, r) {
    while(l < r && nums[l] == nums[l+1]){
        l++
    }
    while(l < r && nums[r] == nums[r-1]){
        r--
    }
    while(l < r) {
        let mid = Math.floor(l + (r-l) / 2);
        if(nums[mid] > nums[r]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return r;
}
function binarySearch(nums, l, r, t) {
    while(l <= r) {
        let mid = Math.floor(l + (r-l) / 2);

        if(nums[mid] == t) return true;

        if(nums[mid] < t) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return false
}
var search = function(nums, target) {
    let n = nums.length;
    let p = findPivot(nums, 0, n-1);

    if(binarySearch(nums, 0, p-1, target)) {
        return true
    }
    return binarySearch(nums, p, n-1, target)
};