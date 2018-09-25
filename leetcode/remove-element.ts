/**
 * https://leetcode.com/problems/remove-element/description/
 */

/**
 *  插入排序
 */
const removeElement = (nums, val) => {
  for (let i = 1; i < nums.length; i++) {
    const temp = nums[i];
    let j;
    for (j = i; nums[j - 1] === val && j > 0; j--) {
      nums[j] = nums[j - 1];
    }
    nums[j] = temp;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.length = i;
      return nums.length;
    }
  }
};
