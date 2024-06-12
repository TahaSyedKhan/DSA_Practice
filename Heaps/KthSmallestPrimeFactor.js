/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
class Heap {
    constructor(cmp) {
        this.arr = [];
        this.cmp = cmp;
    }

    upheapify(idx) {

        while(idx > 0) {
            let pi = Math.floor((idx-1)/2);
            if(this.cmp(this.arr[pi] , this.arr[idx])) {

                let temp = this.arr[pi];
                this.arr[pi] = this.arr[idx];
                this.arr[idx] = temp;

                idx = pi;
            } else {
                break;
            }
        }
    }
    get() {
        return this.arr[0];
    }
    insert(data) {
        // 1. push the element in the array;
        this.arr.push(data);

        // 2. upheapify();
        this.upheapify(this.arr.length-1);
    }

    downheapify(idx) {
        while(idx < this.arr.length-1) {
            let lc = 2*idx + 1;
            let rc = 2*idx + 2;
            let maxEle = idx;

            if(lc < this.arr.length && this.cmp(this.arr[maxEle] , this.arr[lc])) {
                maxEle = lc;
            }
            if(rc < this.arr.length && this.cmp(this.arr[maxEle] , this.arr[rc])) {
                maxEle = rc;
            }

            if(idx == maxEle) {
                break;
            } else {
                let temp = this.arr[idx];
                this.arr[idx] = this.arr[maxEle];
                this.arr[maxEle] = temp;

                idx = maxEle;
            }
        }
    }
    remove() {
        if(this.arr.length == 0) return 0;
        let temp = this.arr[0];
        this.arr[0] = this.arr[this.arr.length-1];
        this.arr[this.arr.length-1] = temp;

        this.arr.pop();

        this.downheapify(0);
    }

    display() {
        console.log(this.arr);
    }
}

class triplet {
    constructor(ne, de, v) {
        this.ne = ne; // numerator
        this.de = de; // denominator
        this.v = v   // value
    }
}
var kthSmallestPrimeFraction = function(arr, k) {
    let n = arr.length;

    // compare elements in MinHeap based on their fraction values
    let minHeap = new Heap((t1, t2) => {
        return t1.v > t2.v;
    })
    // insert a triplet of numinator, denominator, and fraction into minHeap 
    for(let i = 0; i < n; i++) {
        minHeap.insert(new triplet(0, i, arr[0] / arr[i]));
    }
    // remove elements from minHeap K-1 times, so you will Kth element on top of the MinHeap
    for(let i = 0; i < k - 1; i++) {
        let ele = minHeap.get();
        minHeap.remove();

        // check if the elements numinator < arr.length, that means there are other fractions available in array, insert them into MinHeap
        if(ele.ne < n - 1) {
            minHeap.insert(new triplet(ele.ne+1, ele.de, arr[ele.ne+1] / arr[ele.de]));
        }
    }
    // return the top elements numinator and denominator in the form of array
    return [arr[minHeap.get().ne], arr[minHeap.get().de]];
};