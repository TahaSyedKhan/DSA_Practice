function canWePlaceCows(stalls, mid, k) {
    let countCows = 1; 
    let last = stalls[0];

    for(let i = 0; i < stalls.length; i++) {
        if(stalls[i] - last >= mid) {
            countCows++
            last = stalls[i];
        }
        if(countCows >= k) return true;
    }
    return false;
}
function aggressiveCows(stalls, k) {
    stalls.sort((a, b) => a - b);
    let n = stalls.length;
    let low = 1, high = stalls[n-1] - stalls[0];

    while(low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if(canWePlaceCows(stalls, mid , k) == true) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high;
}
