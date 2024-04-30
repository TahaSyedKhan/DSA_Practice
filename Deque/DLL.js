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

    display() {
        // head to tail
            let temp = this.head;
            while(temp != null) {
                console.log(temp.data);
                temp = temp.next;
            }

            console.log('***************');
        // tail to head 
        temp = this.tail;
        while(temp != null) {
            console.log(temp.data);
            temp = temp.prev;
        }
    }
}

let DLL = new DoublyLinkedList();

DLL.addAtHead(10);
DLL.addAtHead(9);
DLL.addAtHead(8);
DLL.addAtTail(11);
DLL.addAtTail(12);
DLL.removeAtHead();
DLL.removeAtTail();

DLL.display();