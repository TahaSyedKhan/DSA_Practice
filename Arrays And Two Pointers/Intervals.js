/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
let res = [];

let i = 0;

while( i < intervals.length) {
    if(intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
    } else if(intervals[i][0] > newInterval[1]) {
        break;       
    } else {
        newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])]
    }
    i++;
}
res.push(newInterval);

while(i < intervals.length) {
    res.push(intervals[i]);
    i++;
}

return res;
};