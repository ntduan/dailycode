/**
 * https://leetcode.com/problems/subsets/
 */

/**
 * 回溯法
 */
var subsetsRecursive = function(nums, subsets = [[]], currentSubset = [], startAt = 0) {
  for (let i = startAt; i < nums.length; i++) {
    currentSubset.push(nums[i]);
    subsets.push([...currentSubset]);
    subsetsRecursive(nums, subsets, currentSubset, i + 1);
    currentSubset.pop();
  }
  return subsets;
};

var subsets = function(nums) {
  return subsetsRecursive(nums);
};
