class Stack {
    #arr;
    constructor() {
        this.#arr = []
    }

    push(element) {
        this.#arr.push(element);
    }

    pop() {
        this.#arr.pop();
    }

    top() {
        return this.#arr[this.#arr.length - 1];
    }
    isEmpty() {
        return this.#arr.length == 0;
    }
}

let s = new Stack();

s.push(10);
s.push(20);
s.pop();
s.top();
s.isEmpty();