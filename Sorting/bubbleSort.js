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

const arr = [5, 4, 3, 2, 1];
bubbleSort(arr);
console.log(arr);