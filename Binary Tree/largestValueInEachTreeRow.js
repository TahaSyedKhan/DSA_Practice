
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    removeAtHead() {
        if(this.head == null) return;

        let newHead = this.head.next;
        this.head.next = null;
        this.head = newHead;

        if(this.head == null) {
            this.tail = null;
        }
    }

    addAtTail(data) {
        if(this.head == null) {
            let n = new Node(data);
            this.head = n;
            this.tail = n;
            return;
        } else {
            let n = new Node(data);
            this.tail.next = n;
            this.tail = n;
        }
    }

    isEmpty() {
        return this.head == null;
    }

    getHead() {
        if(this.head == null) return undefined;
        return this.head.data;
    }

    getTail(){
        if(this.tail == null) return undefined;
        return this.tail.data;
    }
}

class customQueue {
    constructor () {
        this.LL = new MyLinkedList();
    }

    enqueue(data) {
        this.LL.addAtTail(data);
    }

    dequeue() {
        this.LL.removeAtHead();
    }

    isEmpty() {
        return this.LL.isEmpty();
    }

    front() {
        return this.LL.getHead();
    }

    back() {
        return this.LL.getTail();
    }
}
var largestValues = function(root) {
    if(root == null) return [];
    let qu = new customQueue();
    qu.enqueue(root);
    qu.enqueue(null);
    const result = [];
    let levelArray = new Array();
    while(!qu.isEmpty()) {
        const curr = qu.front();
        qu.dequeue();
        if(curr == null) {
            if(!qu.isEmpty()) {
                result.push(Math.max(...levelArray));
                qu.enqueue(null);
                levelArray = new Array();
            } else {
                result.push(Math.max(...levelArray));
            }
        } else {
            levelArray.push(curr.val);
            if(curr.left) {
                qu.enqueue(curr.left);
            }
            if(curr.right) {
                qu.enqueue(curr.right);
            }
        }
    }
    return result;
};