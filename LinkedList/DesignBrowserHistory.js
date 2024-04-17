/**
 * @param {string} homepage
 */
var Node = function(data) {
    this.data = data;
    this.head = null;
    this.prev = null;
}
var BrowserHistory = function(homepage) {
    this.curr = new Node(homepage);
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
        let n = new Node(url);
        this.curr.next = n;
        n.prev = this.curr;
        this.curr = n;
    
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(steps) {
        if(this.curr.prev) {
            this.curr = this.curr.prev;
        } else break;
        steps--;
    }
    return this.curr.data;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(steps) {
        if(this.curr.next) {
            this.curr = this.curr.next;
        } else break;
        steps--;
    }
    return this.curr.data;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */