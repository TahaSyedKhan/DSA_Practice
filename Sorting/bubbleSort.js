function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let is_swapped = false;
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                is_swapped = true;
            }
        }
        if(is_swapped == false) return;
    }
}

function recursiveBubbleSort(arr, n) {
    if(n == 1) {
        return arr;
    }
    for(let i = 0; i < n - 1; i++) {
        if(arr[i] > arr[i+ 1]) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    recursiveBubbleSort(arr, n-1);
}

const arr = [5, 4, 3, 2, 1];
let n = arr.length
recursiveBubbleSort(arr, n);
console.log(arr);