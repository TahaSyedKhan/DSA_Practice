/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

function minHoursToEatBanana(piles, mid, h) {
    let minHours = 0;
    for(let i = 0; i < piles.length; i++) {
    minHours += Math.ceil(piles[i] / mid)
    }
    return minHours <= h;
}
var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = Math.max(...piles);
    let ans = 1;

    while(low <= high) {
        let mid = low + Math.floor((high - low) / 2);

    if (minHoursToEatBanana(piles, mid, h)) {
        ans = mid;
        high = mid - 1;
    } else {
        low = mid + 1;
    }
    }
    return ans;
};