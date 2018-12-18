/**
 * https://leetcode.com/problems/jump-game/
 */

/**
 * 贪心
 */
var canJump = function(nums) {
  let jumpGoodIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > jumpGoodIndex) return false;
    jumpGoodIndex = Math.max(i + nums[i], jumpGoodIndex);
    if (jumpGoodIndex >= nums.length - 1) {
      return true;
    }
  }
  return false;
};
