/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let st1 = [];
    let st2 = [];

    for(let i = 0; i < s.length; i++) {
        if(s.length > 0 && s[i] == "#") {
            st1.pop();
        } else {
            st1.push(s[i]);
        }
    }
    
    for(let i = 0; i < t.length; i++) {
        if(t.length > 0 && t[i] == "#") {
            st2.pop();
        } else {
            st2.push(t[i]);
        }
    }

    while(st1.length > 0 && st2.length > 0) {
        if(st1[st1.length - 1] != st2[st2.length - 1]) {
            return false;
        } else {
            st1.pop();
            st2.pop();
        }
    }
    return (st1.length == 0) && (st2.length == 0);
};