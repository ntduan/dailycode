/**
 * https://leetcode.com/problems/range-sum-of-bst
 */

// 递归遍历
const rangeSumBST = function(root, L, R) {
  let result = 0;
  const dfs = (node, L, R) => {
    if (node) {
      if (node.val > L) {
        dfs(node.left, L, R);
      }
      if (node.val >= L && node.val <= R) {
        result += node.val;
      }
      if (node.val < R) {
        dfs(node.right, L, R);
      }
    }
  };
  dfs(root, L, R);
  return result;
};
