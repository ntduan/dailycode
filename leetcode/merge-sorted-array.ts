/**
 * https://leetcode.com/problems/merge-sorted-array/description/
 */

/**
 * 插入排序
 */
const merge = (nums1, m, nums2, n) => {
  for (let i = m; i < m + n; i++) {
    const temp = nums2[i - m];
    let j;
    for (j = i; nums1[j - 1] > temp && j > 0; j--) {
      nums1[j] = nums1[j - 1];
    }
    nums1[j] = temp;
  }
};
