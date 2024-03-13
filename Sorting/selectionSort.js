function selectionSort(arr) {
    for(let i = 0;  i < arr.length; i++) {
        let min = findMinEle(arr, i);
        if(min != i) {
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        }
    }
    // console.log(arr);
}

function findMinEle(arr, i) {
    let idx_of_min = i;

    for(let j = i+1; j < arr.length; j++) {
        if(arr[j] < arr[idx_of_min]) {
            idx_of_min = j;
        }
    }
    return idx_of_min;
}

const arr = [5, 4, 3, 2, 1];
selectionSort(arr);
console.log(arr);

