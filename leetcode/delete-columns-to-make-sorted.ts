/**
 * https://leetcode.com/problems/delete-columns-to-make-sorted/
 */

var minDeletionSize = function(A) {
  const cLength = A[0].length;
  let min = 0;
  for (let i = 0; i < cLength; i++) {
    for (let j = 0; j < A.length - 1; j++) {
      if (A[j][i] > A[j + 1][i]) {
        min += 1;
        break;
      }
    }
  }
  return min;
};
