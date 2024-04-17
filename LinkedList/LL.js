var Node = function(data) {
    this.data = data;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
}

MyLinkedList.prototype.get = function(index) {
    if(this.head == null) return;

    let i = 0;
    let temp = this.head;
    while(i < index) {
        temp = temp.next;
    }
    if(i != index) return;
    return temp.data;
}

MyLinkedList.prototype.addAtHead = function(val) {
    if (this.head == null) {
        this.head = new Node(val);
    } else {
        let n = new Node(val);
        n.next = this.head;
        this.head = n
    }
}

MyLinkedList.prototype.addAtTail = function(val) {
    if (this.head == null) {
        this.head = new Node(val);
    }
    let temp = this.head;
    while(temp.next != null) {
        temp = temp.next;
    }
    let n = new Node(val);
    temp.next = n;
}

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(this.head == null) return;
    let prev = null;
    let nodeToBeDel = this.head;
    let i = 0;

    while(i < index && nodeToBeDel != null) {
        prev = nodeToBeDel;
        nodeToBeDel = nodeToBeDel.next;
        i++
    }
    if(i != index) return;
    let newNext = nodeToBeDel.next;
    prev.next = newNext;
    nodeToBeDel.next = null;
}

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(this.head == null) {
        this.head = new Node(val);
        return;
    }

    let i = 0;
    let prev = null;
    let temp = this.head;

    while(i < index && temp != null) {
        prev = temp;
        temp = temp.next;
        i++
    }
    if(i != index) return;
    let n = new Node(val);
    prev.next = n;
    n.next = temp;
    return;
} 