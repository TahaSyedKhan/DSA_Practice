class MaxHeap {
    constructor() {
        this.arr = [];
    }

    upheapify(idx) {
        // upheapify will go up to root of the heap
        while(idx > 0) {
            let pi = Math.floor((idx-1)/2);
            // parent is greater than child so we need to swap
            if(this.arr[pi] < this.arr[idx]) {
                let temp = this.arr[pi];
                this.arr[pi] = this.arr[idx];
                this.arr[idx] = temp;

                // now check for parent's parent
                idx = pi;
            } else {
                // if everything is good come out of the loop;
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
        // downheapify will go upto leaf nodes
        while(idx < this.arr.length-1) {

            //1. calculate the left child and right child
            let lc = 2*idx + 1;
            let rc = 2*idx + 2;
            let maxEle = idx;

            //2. check which one is greater among lc rc and root
            if(lc < this.arr.length && this.arr[maxEle] < this.arr[lc]) {
                maxEle = lc;
            }
            if(rc < this.arr.length && this.arr[maxEle] < this.arr[rc]) {
                maxEle = rc;
            }

            // if only the root is greater then we are good to go
            if(idx == maxEle) {
                break;
            } else {
                // swap the elements
                let temp = this.arr[idx];
                this.arr[idx] = this.arr[maxEle];
                this.arr[maxEle] = temp;

                // check for child's child.
                idx = maxEle;
            }
        }
    }
    remove() {
        if(this.arr.length == 0) return 0;

        //1. we have to swap the root element and last leaf element
        let temp = this.arr[0];
        this.arr[0] = this.arr[this.arr.length-1];
        this.arr[this.arr.length-1] = temp;

        //2. pop the last elemnt
        this.arr.pop();

        //3. downheapify();
        this.downheapify(0);
    }

    display() {
        console.log(this.arr);
    }
}

let hp = new MaxHeap();
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