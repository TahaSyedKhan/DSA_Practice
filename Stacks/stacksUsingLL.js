var Node = function(data) {
    this.data = data;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
}

MyLinkedList.prototype.addAtHead = function(val) {
    if(this.head == null) {
        this.head == new Node(val);
    } else {
        let n = new Node(val);
        n.next = this.head;
        this.head = n;
    }
}

MyLinkedList.prototype.deleteAtHead = function() {
    if(this.head == null) return;

    let newHead = this.head.next;
    head.next = null;

    return newHead;
}

class Stack {
    #LL;

    constructor() {
        this.#LL = new MyLinkedList();
    }
    push(element) {
        this.#LL.addAtHead(element);
    }
    pop() {
        this.#LL.deleteAtHead();
    }

    top() {
        return this.#LL.head;
    }
    isEmpty() {
        return this.#LL.head == null;
    }
}

let s = new Stack();

s.push(10);
s.push(20);
s.pop();
s.top();