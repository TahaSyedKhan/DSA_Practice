class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head == null;
    }
    addAtHead(data) {
        // 1. if the LL is empty create the new node and assign it as both head and tail;
        if(this.isEmpty()) {
            let newNode = new Node(data);
            this.head = newNode;
            this.tail = newNode;
        } else {
            // 2. LL is has already elements, create new node;
            let newNode = new Node(data);
            // a. remeber the previous head
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;

        }
    }
    removeAtHead() {
        // 1. if LL is empty then there is nothing to remove
        if(this.isEmpty()) {
            return
            // 2. if LL has only one element
        } else if(this.head.next == null) {
            this.head = null;
            this.tail = null;
            // 3. if LL has 2 or more than 2 elements
        } else {
            let newHead = this.head.next;
            this.head.next = null;
            newHead.prev = null;
            this.head = newHead;
        }
    }
    addAtTail(data) {
        if(this.isEmpty()) {
            this.addAtHead(data);
        } else {
            let newTail = new Node(data);
            this.tail.next = newTail;
            newTail.prev = this.tail;
            this.tail = newTail;
        }

    }
    removeAtTail() {
        if(this.isEmpty()) {
            return;
        } else if(this.head.next == null) {
            this.head = null;
            this.tail = null;
        } else {
            let newTail = this.tail.prev;
            this.tail.prev = null;
            this.tail = newTail;
            newTail.next = null;
        }
    }
}

class Deque {
    constructor() {
        this.Dll = new DoublyLinkedList();
    }

    isEmpty() {
        this.Dll.isEmpty();
    }
    addAtFront(data) {
        this.Dll.addAtHead(data);
    }
    addAtBack(data) {
        this.Dll.addAtTail(data);
    }

    removeAtFront() {
        this.Dll.removeAtHead();
    }

    removeAtBack() {
        this.Dll.removeAtTail();
    }
    getFront() {
        if(this.Dll.head) {
            return this.Dll.head.data;
        }
    }
    getBack() {
        if(this.Dll.tail) {
            return this.Dll.tail.data;
        }
    }
}