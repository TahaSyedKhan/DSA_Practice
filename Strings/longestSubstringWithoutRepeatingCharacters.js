/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let maxLength = 0;
    let l = 0, r = 0;
    let hash = Array(356).fill(-1);
    while(r < n) {
        if(hash[s[r]] !== -1) {
            if(hash[s[r]] >= l) {
                l = hash[s[r]] + 1;
            }
        }
        let len = r - l + 1;
        maxLength = Math.max(maxLength, len);
        hash[s[r]] = r;
        r++
    }
    // for(let i = 0; i < n; i++) {
    //     let hash = Array(256).fill(0)
    //     for(let j = i; j < n; j++) {
    //         if(hash[s[j]] == 1) break;
    //         let len = j - i + 1;
    //         maxLength = Math.max(maxLength, len);
    //         hash[s[j]] = 1;
    //     }
    // }
    return maxLength;
    
};