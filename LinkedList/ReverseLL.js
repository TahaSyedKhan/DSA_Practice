let temp = head;
    let prev = null;

    while(temp != null) {
        let front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    return prev;