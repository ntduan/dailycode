/**
 * https://leetcode.com/problems/symmetric-tree/description/
 */

/**
 * BFS
 */

var isSymmetric = function(root) {
  if (root == null) return true;
  let res = 0;
  const queue = [root];
  while (queue.length) {
    const length = queue.length;
    const level = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (node) {
        level.push(node.val);
        queue.push(node.left || null);
        queue.push(node.right || null);
      } else {
        level.push(null);
      }
    }
    let [low, high] = [0, level.length - 1];
    while (low < high) {
      if (level[low] !== level[high]) return false;
      low += 1;
      high -= 1;
    }
  }
  return true;
};

/**
 * @TODO 其他解法，优化时间复杂度
*/