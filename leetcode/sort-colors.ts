/**
 * https://leetcode.com/problems/sort-colors/
 */

var sortColors = function(nums) {
  let position = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (i !== position) {
        [nums[i], nums[position]] = [nums[position], nums[i]];
      }
      position++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (i !== position) {
        [nums[i], nums[position]] = [nums[position], nums[i]];
      }
      position++;
    }
  }
  return nums;
};
