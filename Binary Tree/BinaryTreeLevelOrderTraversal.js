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

class Queue {
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

var levelOrder = function(root) {
    let qu = new Queue;
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
        if(curr == null) {
            // curr is null
            if(!qu.isEmpty()) {
                // and queue is not empty
                result.push(levelArray);
                qu.enqueue(null);
                levelArray = new Array();
            } else { 
                // curr is null and queue is also empty
                result.push(levelArray);
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