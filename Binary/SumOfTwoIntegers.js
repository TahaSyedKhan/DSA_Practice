/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while(b != 0) {
        let tmp = (a & b) << 1;  // & for carry 
        a = (a ^ b); //xor logic
        b = tmp;
    }
    return a;
};