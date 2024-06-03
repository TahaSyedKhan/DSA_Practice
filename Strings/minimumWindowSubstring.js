/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let n = s.length;

    // if t.length is greater than s.length then it is impossible to find minimum window inside s of t
    if(t.length > n) return "";

    let i = 0;
    let j = 0;

    let mp = {};
    let minWindow =  Number.MAX_SAFE_INTEGER;

    // dtore all the elements of t into map
    for (let i = 0; i < t.length; i++) {
        let ch = t[i];
        if(mp[ch]) {
            mp[ch]++;
        } else {
            mp[ch] = 1;
        }
    }

    // maintain count required to check in
    let countRequired = t.length;
    let start_i = 0;

    while(j < n) {
        let c = s[j];
        // check if character has higher frequency than 0 than decrement its frequency and also count required
        // because we have find one character of t
            if(mp[c] > 0) {
            mp[c]--;
            countRequired--

            // and if it was not in map and also it is not character of t than store it in map and also set its frequency to -1
            // because we don't need it
            } else if(mp[c]) {
                mp[c]--;
            } else {
                mp[c] = -1;
            }

            // if our count required has reached 0, that means we have found one window 
            // and let us start to shrink it
            // to find a minimum window
        while(countRequired == 0) {
            // calculate the current window size
            let currWindow = j - i + 1;
            // update minimum window
            if(minWindow > currWindow) {
                minWindow = currWindow;

                // this start_i means where we have started our window
                start_i = i;
            }

            // we start shrinking by lefting one char 
            // so we are going to increment it in our map beacuse if we find it anywhere else in s we are going to handle it
            mp[s[i]]++

            // also we will update the count required for same above reason
            if(mp[s[i]] > 0) {
                countRequired++;
            }
            i++
        }
        j++
    }
    // if minimum window never gets updated return "" else return substrring from start_i to minWIndow size
    return minWindow ===  Number.MAX_SAFE_INTEGER ? "" : s.substr(start_i, minWindow);
};