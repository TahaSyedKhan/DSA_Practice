/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let st = [];
    for(let c of s) {
        if(c === '(' || c === '{' || c === '[') {
            st.push(c);
        } else {
            if(!st.length || (c === ')' && st[st.length - 1] !== '(') ||
                            (c === '}' && st[st.length - 1] !== '{') ||
                            (c === ']' && st[st.length - 1] !== '[')) {
                                return false;
                            }
                            st.pop();
        }
    }
    return !st.length;
};