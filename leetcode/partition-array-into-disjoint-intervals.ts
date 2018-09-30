/**
 * https://leetcode.com/problems/partition-array-into-disjoint-intervals/description/
 */

/**
 * 动态规划
 */
var partitionDisjoint = function(A) {
  const dpMax = [A[0]];
  let index = 0;
  for (let i = 1; i < A.length; i++) {
    dpMax[i] = Math.max(A[i], dpMax[i - 1]);
    index = A[i] < dpMax[index] ? i : index;
  }
  return index + 1;
};
