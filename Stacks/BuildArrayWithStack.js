/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const arr = [];
    let i = 1;
    for(const ind in target) {
        const element = target[ind]
        while(i < element) {
            arr.push("Push");
            arr.push("Pop");
            i++;
        }
        arr.push("Push");
        i++;
    }
    return arr;
};