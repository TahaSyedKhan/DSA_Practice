/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
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
    isEmpty() {
        return this.arr.length == 0;
    }

    display() {
        console.log(this.arr);
    }
}
var mergeKLists = function(lists) {
    // a new list node from which we will start inserting new sorted elements
    let res = new ListNode(123);
    // t is temporary node which will iterate through new aorted list
    let t = res;

    // we create a minHeap which will store the minimum elements from list
    let minHeap = new Heap((n1, n2) => {
        return n1.val > n2.val;
    });

    // now will insert first element of all the lists
    for(let i = 0; i < lists.length; i++) {
        if(lists[i] != null) {
            minHeap.insert(lists[i]);
        }
    }

    // this will run until heap is not empty
    while(!minHeap.isEmpty()) {
        // get the top elemnt of minHeap in root
        let root = minHeap.get();

        // store it to the next of temporary(t) node of new res ListNode
        t.next = root;
        // and move it to the next
        t = t.next;

        // remove it from the minHeap
        minHeap.remove();

        // after inserting it into the new list and removing it from minHeap, we will go after its next node
        let nextNode = root.next;
        // and disconnect it from its previous list
        root.next = null;

        // if its next node is not null, then insert it into minHeap;
        if(nextNode != null) minHeap.insert(nextNode);
    }
    // and return res.next beacause our first node is dummy.
    return res.next;
};