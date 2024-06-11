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

let hp = new Heap((a, b) => {
    return a > b; // a < b for max Heap & a > b for min Heap.
});
hp.insert(9);
hp.insert(19);
hp.insert(2);
hp.insert(39);
hp.insert(29);
hp.insert(12);
hp.insert(-9);
hp.insert(6);

hp.display();

/**
 *                          39
 *                29                    12
 *       9               19       2            -9
 * 6
 * 
 */

hp.remove();
hp.display();