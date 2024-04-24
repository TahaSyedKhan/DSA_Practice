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

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.front() , queue.back());
queue.dequeue();
console.log(queue.front() , queue.back());
