/**
 * https://leetcode.com/problems/rotate-image/description/
 */

/**
 * 先逆，再对角线交换
 */
const rotateImage = function(matrix) {
  matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};
