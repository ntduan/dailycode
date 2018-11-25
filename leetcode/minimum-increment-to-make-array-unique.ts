/**
 * https://leetcode.com/problems/minimum-increment-to-make-array-unique/
 */

var minIncrementForUnique = function(A) {
  let count = 0;

  const numMap = {};

  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    numMap[A[i]] = numMap[A[i]] ? numMap[A[i]] + 1 : 1;
  }

  for (const key of Object.keys(numMap)) {
    let findKey = +key;
    while (numMap[key] > 1) {
      while (numMap[findKey]) {
        findKey = 1 + +findKey;
      }
      count += findKey - +key;
      numMap[findKey] = 1;
      numMap[key] -= 1;
    }
  }

  return count;
};
