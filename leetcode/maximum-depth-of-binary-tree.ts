/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * BFC 每一层加1
 */
// const maxDepth = function(root) {
//   if (root == null) return 0;
//   let res = 0;
//   const queue = [root];
//   while (queue.length) {
//     const length = queue.length;
//     res += 1;
//     for (let i = 0; i < length; i++) {
//       const node = queue.shift();
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//   }
//   return res;
// };

/**
 * 递归
 */
const maxDepth = function(root) {
  if (root == null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
