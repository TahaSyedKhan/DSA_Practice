/**
 * @param {string} s
 * @return {number}
 */
function f(s, i, j) {
    if(i >= j) return true;
    if(s[i] == s[j]) return f(s, i+1, j-1);
    return false;
}
var countSubstrings = function(s) {
    let n = s.length;
    let c = 0;
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            if(f(s, i, j)) {
                c++
            }
        }
    }
    return c;
};