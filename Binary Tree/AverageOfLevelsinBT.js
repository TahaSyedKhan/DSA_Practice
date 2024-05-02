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
 * @return {number[]}
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

var averageOfLevels = function(root) {
    let qu = new customQueue;
    // root is null we have nothing to traverse
    if(root == null) return [];
    // enqueue root into the queue
    qu.enqueue(root);
    // also enqueue null to keep the track of levels of BT
    qu.enqueue(null);
    let result = [];
    let levelArray = new Array();
    // queue is not empty
    while(!qu.isEmpty()) {
        // curr is front element of the queue
        const curr = qu.front();
        // store the element in the queue and dequeue it
        qu.dequeue();
        // calculate total sum of levels
        let levelArraySum = 0;
                for(let i = 0; i < levelArray.length; i++) {
                    levelArraySum += levelArray[i];
                }
        if(curr == null) {
            // curr is null
            if(!qu.isEmpty()) {
                // and queue is not empty
                result.push(levelArraySum / levelArray.length);
                qu.enqueue(null);
                levelArray = new Array();
            } else { 
                // curr is null and queue is also empty
                result.push(levelArraySum / levelArray.length);
            }
        } else {
            // curr is not null
            levelArray.push(curr.val);
            if(curr.left) {
                qu.enqueue(curr.left)
            }
            if(curr.right) {
                qu.enqueue(curr.right);
            }
        }
    }
    return result;
}