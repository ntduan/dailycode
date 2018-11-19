/**
 * https://leetcode.com/problems/invert-binary-tree/
 */

var invertTree = function(root) {
  if (!root) return root;
  [root.left, root.right] = [root.right, root.left];
  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);
  return root;
};
