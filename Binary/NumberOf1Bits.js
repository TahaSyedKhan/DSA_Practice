/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let c = 0;

    for(i = 32; i > 0; i--) {
        if((n>>i)&1 == 1) {
            c++
        }
    }
    return c;

    // while(n != 0) {
    //     c += n%2;
    //     n = n/2;
    // }

    //   return c;
};