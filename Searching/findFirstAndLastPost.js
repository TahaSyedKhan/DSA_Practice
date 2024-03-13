function lowerBound(arr, x) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    let ans = arr.length;
    while(low <= high) {
        let mid = low + Math.floor(high- low/2);
        if(arr[mid] < x) {
            low = mid + 1;
        } else {
            ans = mid; // candidate ans
            high = mid - 1;
        }
    }
    return ans;
}

function upperBound(arr, x) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    let ans = arr.length;
    while(low <= high) {
        let mid = low + Math.floor(high- low/2);
        if(arr[mid] <= x) {
            low = mid + 1;
        } else {
            ans = mid; // candidate ans
            high = mid - 1;
        }
    }
    return ans;
}
var searchRange = function(nums, target) {
    let lb = lowerBound(nums, target);
    let result = [2];
    if(lb == nums.length || nums[lb] != target) {
        result[0] = -1;
        result[1] = -1;
        return result;
    }
    let ub = upperBound(nums, target);
    result[0] = lb;
    result[1] = ub - 1;
    return result;
};