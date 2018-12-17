/**
 * https://leetcode.com/problems/house-robber-iii/
 */

/**
 * 递归
 */
var robiii = function(root) {
  if (!root) return 0;
  let val = 0;
  if (root.left) {
    val += rob(root.left.left) + rob(root.left.right);
  }
  if (root.right) {
    val += rob(root.right.left) + rob(root.right.right);
  }
  return Math.max(rob(root.left) + rob(root.right), val + root.val);
};

/**
 * @todo 递归优化
 */

/**
 * @todo 贪心算法
 */
