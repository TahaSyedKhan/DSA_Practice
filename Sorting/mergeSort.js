function merge(arr, low , mid, high) {
    let result = [];
    let k = 0;
    let left = low, right = mid + 1;
    while(left <= mid && right <= high) {
        if(arr[left] <= arr[right]) {
            result[k] = arr[left];
            left++;
            k++;
        } else {
            result[k] = arr[right];
            right++;
            k++;
        }
    }
    while(left <= mid) {
        result[k] = arr[left]
        left++;
        k++;
    }
    while(right <= high) {
        result[k] = arr[right]
        right++;
        k++;
    }
    console.log(result);
    return result;
}
function mergeSort(arr, low, high) {
    if(low == high) return;

    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    return merge(arr, low, mid, high);
}

const arr = [5, 9, 5, 0, 1];
let sortedArray = mergeSort(arr, 0, arr.length - 1);
console.log(sortedArray);