/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length;
    let i = 0;
    let j = n - 1;

    let maxArea = 0;

    while (i < j) {
        let h = Math.min(height[i], height[j])
        let w = j - i;
        let area = h * w;

        maxArea = Math.max(maxArea, area);
        if(height[i] > height[j]) {
            j--
        } else {
            i++
        }
    }
    return maxArea;
};