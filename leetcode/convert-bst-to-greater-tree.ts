/**
 * https://leetcode.com/problems/convert-bst-to-greater-tree/
 */

var convertBST = function(root) {
  if (!root) return root;
  let sum = 0;
  const dfs = root => {
    if (!root) return 0;
    dfs(root.right);
    sum = sum + root.val;
    root.val = sum;
    dfs(root.left);
    return root;
  };
  return dfs(root);
};
