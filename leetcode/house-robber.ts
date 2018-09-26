/**
 * https://leetcode.com/problems/house-robber/description/
 */

/**
 * 动态规划
*/
const rob = nums => {
  if (!nums.length) return 0;
  const dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
};
