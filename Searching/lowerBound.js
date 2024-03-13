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

console.log(lowerBound([1, 1, 2, 3, 3, 3, 3 , 4], 4));