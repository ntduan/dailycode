/**
 * https://leetcode.com/problems/maximum-subarray/description/
 */

/**
 * 动态规划
 */
const maxSubArray = nums => {
  let [sum, max] = [0, Number.MIN_SAFE_INTEGER];
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    max = Math.max(sum, max);
  }
  return max;
};
