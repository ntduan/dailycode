/**
 * https://leetcode.com/problems/single-element-in-a-sorted-array/description/
 */

/**
 * [1,1,3,4,4,2,2,5, 5]
 * [1,1,2,2,5] ,2,3,3,4, 4,8]
 * [1,1,2,2,3,3,4]
 * 二分查找，当 n 为奇数的时候，如果 n + 1 不等于 n，说明它之前有单个元素，否则则是之后。
 */

const singleNonDuplicate = nums => {
  let [low, high] = [0, nums.length - 1];
  while (low <= high) {
    const mid = low + ((high - low) >> 1);
    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid + 1]) {
        low = mid + 2
      } else {
        high = mid - 1
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        low = mid + 1
      } else {
        high = mid - 2
      }
    }
  }
  return nums[low]
};
