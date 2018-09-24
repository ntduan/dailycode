/**
 * https://leetcode.com/problems/self-dividing-numbers/description/
 */

/**
 * 暴力破解
 */
const selfDividingNumbers = (left, right) => {
  let result = [];
  for (let n = left; n <= right; n++) {
    if (
      String(n)
        .split('')
        .every(i => n % Number(i) === 0)
    ) {
      result.push(n);
    }
  }
  return result;
};
