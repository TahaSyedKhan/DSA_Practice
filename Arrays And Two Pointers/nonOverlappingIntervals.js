/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {

    intervals.sort((a,b)=>a[0] - b[0])

    let count = 0;
    let i = 0;
    let j = 1;

    let n = intervals.length;

    while( j < n) {
        if(intervals[i][1] <= intervals[j][0]) {
            i = j;
            j++
        } else if(intervals[i][1] <= intervals[j][1]) {
            j++;
            count++;
        } else if(intervals[i][1] > intervals[j][1]) {
            i = j;
            j++
            count++;
        }
    }

    return count;

    
};