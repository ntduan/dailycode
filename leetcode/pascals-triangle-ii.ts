/**
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 */

/**
 * 从后面往前加
 */
const getRow = rowIndex => {
  const array = new Array(rowIndex + 1).fill(0);
  for (let i = 1; i < rowIndex + 1; i++) {
    for (let j = i; j >= 1; j--) {
      array[j] = array[j] + array[j - 1];
    }
  }
  return array;
};
