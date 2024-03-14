/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low = 0;
    let high = x;
    let ans = -1;

    while(low <= high) {
        let mid = low + Math.floor((high-low) / 2);

        if(mid*mid == x) {
            return mid;
        } else if(mid*mid < x) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
};