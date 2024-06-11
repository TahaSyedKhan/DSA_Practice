/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class MaxHeap {
    constructor() {
        this.arr = [];
    }

    upheapify(idx) {

        while(idx > 0) {
            let pi = Math.floor((idx-1)/2);
            if(this.arr[pi] < this.arr[idx]) {

                let temp = this.arr[pi];
                this.arr[pi] = this.arr[idx];
                this.arr[idx] = temp;

                idx = pi;
            } else {
                break;
            }
        }
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

            if(lc < this.arr.length && this.arr[maxEle] < this.arr[lc]) {
                maxEle = lc;
            }
            if(rc < this.arr.length && this.arr[maxEle] < this.arr[rc]) {
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
}

var findKthLargest = function(nums, k) {
    let hp = new MaxHeap();

    for(let i = 0; i < nums.length; i++) {
        hp.insert(nums[i]);
    }
    for(let i = 1; i < k; i++) {
        hp.remove();
    }
    return hp.arr[0]
};