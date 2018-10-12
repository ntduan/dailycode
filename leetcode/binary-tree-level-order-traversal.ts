/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 广度优先，按层次遍历
 */
var levelOrder = function(root) {
  if (root == null) return [];
  let res = 0;
  const queue = [root];
  const result = [];
  while (queue.length) {
    const length = queue.length;
    const level = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
};
