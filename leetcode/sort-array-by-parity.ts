/**
 * https://leetcode.com/problems/sort-array-by-parity/description/
 */

/**
 * 插入排序
 */
const sortArrayByParity = A => {
  const compare = (a, b) => a % 2 === 1 && b % 2 === 0;
  for (let i = 1; i < A.length; i++) {
    let temp = A[i];
    let j;
    for (j = i; compare(A[j - 1], temp) && j > 0; j--) {
      A[j] = A[j - 1];
    }
    A[j] = temp;
  }
  return A
};

/**
 * 快速排序
 * 略
*/
