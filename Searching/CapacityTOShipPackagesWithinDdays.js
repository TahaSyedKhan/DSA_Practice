/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 function minCapacityToShip(weights, mid, d) {
    let tw = 0;
    let countDays = 0;
    for(let i = 0; i < weights.length; i++) {
        if(tw + weights[i] > mid) {
            countDays++;
            tw = 0;
        }
        tw += weights[i];
    }
    countDays++
    return countDays <= d;
 }
var shipWithinDays = function(weights, days) {
    let n = weights.length;
    let maxWeight = -1;
    let totalWeight = 1;

    for(let i = 0; i < n; i++) {
        totalWeight += weights[i];
        maxWeight = Math.max(maxWeight, weights[i]);
    }

    let low = maxWeight;
    let high = totalWeight;

    while(low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if(minCapacityToShip(weights, mid, days)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};