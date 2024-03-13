function insertionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let ele = arr[i];
        let j;
        for( j = i -1; j >= 0;  j--){
            if(arr[j] > ele) {
                arr[j+1] = arr[j];
            } else {
                break;
            } 
        }
        arr[j + 1] = ele;
    }
}

const arr = [5, 4, 3, 2, 1];
insertionSort(arr);
console.log(arr);