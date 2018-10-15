/**
 * https://leetcode.com/problems/sort-array-by-parity-ii/description/
 */

/**
 * 双指针
 */
var sortArrayByParityII = function(A) {
  let [i, j] = [1, 0];
  while (j < A.length) {
    if (A[j] % 2 === 1) {
      while (i < A.length && A[i] % 2 !== 0) {
        i += 2;
      }
      [A[i], A[j]] = [A[j], A[i]];
    }
    j += 2;
  }
  return A;
};
