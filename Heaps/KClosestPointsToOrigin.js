/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
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
class point {
    constructor(xi, yi) {
        this.x = xi;
        this.y = yi;
        this.dist = Math.sqrt(xi*xi + yi*yi); // store Euclidean Distance
    }
}
var kClosest = function(points, k) {
    const hp = new Heap((pointA, pointB) => {
    return pointA.dist > pointB.dist; // min Heap
    });
    for(let i = 0; i < points.length; i++) {
    const p = new point(points[i][0], points[i][1]);
    hp.insert(p);
    }
    let result = [];
    while(k > 0) {
    k--;
    let val = [hp.get().x, hp.get().y];
    result.push(val);
    hp.remove();
    }
    return result;
};