/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    if (n1 > n2) return findMedianSortedArrays(nums2, nums1);

    let low = 0, high = n1;
    let left = Math.floor((n1 + n2 + 1) /2);

    let n = n1 + n2;

    while(low <= high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = left - mid1;
         let l1 = Number.MIN_SAFE_INTEGER, l2 = Number.MIN_SAFE_INTEGER;
         let r1 = Number.MAX_SAFE_INTEGER, r2 = Number.MAX_SAFE_INTEGER;
         if(mid1 < n1) r1 = nums1[mid1];
         if(mid2 < n2) r2 = nums2[mid2];
         if(mid1 - 1 >= 0) l1 = nums1[mid1 - 1];
         if(mid2 - 1 >= 0) l2 = nums2[mid2 - 1];
         if(l1 <= r2 && l2 <= r1) {
            if(n % 2 == 1) return Math.max(l1, l2);
            return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
         } else if(l1 > r2) high = mid1 - 1;
         else low = mid1 + 1;
    }
    return 0;
};