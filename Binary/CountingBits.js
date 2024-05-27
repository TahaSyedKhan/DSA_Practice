/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = [];
    // function noOfOneBits(n) {
    //    let c = 0;
    //     for(i = 32; i > 0; i--) {
    //     if((n>>i)&1 == 1) {
    //         c++
    //     }
    // }
    // return c;
    // }
    // for(let i = 0; i < n + 1; i++) {
    //     result[i] = noOfOneBits(i);
    // }

    result[0] = 0;

    for(let i = 1; i <= n; i++) {
        if(i % 2 != 0) {
            result[i] = result[Math.floor(i/2)] + 1;
        } else {
            result[i] = result[i/2];
        }
    }

    return result;
};