/**
 * https://leetcode.com/problems/valid-mountain-array/
 */

var validMountainArray = function(A) {
  let i = 0;
  while (i < A.length - 1 && A[i] < A[i + 1]) i++;
  if (i === A.length - 1 || i === 0) return false;
  while (i < A.length - 1 && A[i] > A[i + 1]) i++;
  return i === A.length - 1;
};
