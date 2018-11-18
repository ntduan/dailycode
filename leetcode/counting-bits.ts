/**
 * https://leetcode.com/problems/counting-bits/
 */

var countBits = function(num) {
  const result = [0];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) result[i] = result[(i - 1) / 2] + 1;
    if (i % 2 === 0) result[i] = result[i / 2];
  }
  return result;
};
