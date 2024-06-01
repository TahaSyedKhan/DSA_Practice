// Node structure of trie 
class Node {
    constructor(data) {
        this.data = data;
        this.isTerminal = false;
        this.children = {};
    }
}
var Trie = function() {
    this.root = new Node(null);
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    for(let i = 0; i < word.length; i++) {
        let ch = word[i];
        // check if the character is present or not 
        if(curr.children[ch]) {
            curr = curr.children[ch];
        } else {
            // create a new node put that node into the children map
            let n = new Node(ch);
            curr.children[ch] = n;
            curr = curr.children[ch];
        }
    }
    curr.isTerminal = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root;
    for(let i = 0; i < word.length; i++) {
        let ch = word[i]
        // check the character is present or not 
        if(curr.children[ch]) {
            // if present move to the next
            curr = curr.children[ch];
        } else {
            // if not present return immediately false
            return false;
        }
    }
    // if there is a word but its terminal is not true then it is a substring of another word
    return curr.isTerminal;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
// search for a prefix
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    for(let i = 0; i < prefix.length; i++) {
        let ch = prefix[i]
        if(curr.children[ch]) {
            curr = curr.children[ch];
        } else {
            return false;
        }
    }
    return true; 
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */