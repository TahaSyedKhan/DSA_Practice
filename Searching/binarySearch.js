function binarySearch(arr, x) {
    let n = arr.length;
    let low = 0; 
    let high = n - 1;

    while(low <= high) {
    let mid = Math.floor(low + high / 2);

    if(arr[mid] == x) {
        return mid;
    } else if (arr[mid] < x) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
    }
return -1;
}

console.log(binarySearch([1, 9 , 10, 12, 18], 12));