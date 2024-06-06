/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    // let i = 0;

    // linear Search
    // while(arr[i] < arr[i+1]) {
    //     i++
    // };
    // return i;
    let n = arr.length;
    let l = 0;
    let r = n-1;

    // Binary Search
    while(l < r) {
        let mid = Math.floor(l+(r-l) / 2);
        if(arr[mid] < arr[mid+1]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return r;
};