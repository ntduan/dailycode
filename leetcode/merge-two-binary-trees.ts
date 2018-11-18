/**
 * https://leetcode.com/problems/merge-two-binary-trees/
 */

function TreeNode(val?) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * DFS
*/
var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) return null;
  const dfs = (t1, t2, t3) => {
    if (t1) t3.val = t1.val + (t3.val || 0);
    if (t2) t3.val = t2.val + (t3.val || 0);

    if ((t1 && t1.left) || (t2 && t2.left)) {
      t3.left = new TreeNode();
      dfs(t1 && t1.left, t2 && t2.left, t3.left);
    }
    if ((t1 && t1.right) || (t2 && t2.right)) {
      t3.right = new TreeNode();
      dfs(t1 && t1.right, t2 && t2.right, t3.right);
    }
  };
  const t3 = new TreeNode();
  dfs(t1, t2, t3);
  return t3;
};
