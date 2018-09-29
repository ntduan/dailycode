/**
 * https://leetcode.com/problems/pascals-triangle/description/
*/

/**
 * 从后面开始加
 */
var generate = function(numRows) {
  if (numRows === 0) return [];
  const result = [[1]];
  for (let i = 1; i < numRows; i++) {
    let row = new Array(i + 1).fill(1);
    for (let j = row.length - 2; j >= 1; j--) {
      row[j] = result[i - 1][j] + result[i - 1][j - 1];
    }
    result.push(row);
  }
  return result;
};
