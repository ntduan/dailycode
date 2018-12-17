/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 */

 /**
  * 插入排序
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const l1 = nums1.length;
  const l2 = nums2.length;
  for (let i = l1; i < l1 + l2; i++) {
    let temp = nums2[i - l1];
    nums1[i] = temp;
    let j;
    for (j = i; j > 0 && nums1[j - 1] > temp; j--) {
      nums1[j] = nums1[j - 1];
    }
    nums1[j] = temp;
  }
  if (nums1.length % 2 === 0) {
    return (nums1[nums1.length / 2] + nums1[nums1.length / 2 - 1]) / 2;
  } else {
    return nums1[Math.floor(nums1.length / 2)];
  }
};
