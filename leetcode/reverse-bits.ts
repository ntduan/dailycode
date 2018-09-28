/**
 * https://leetcode.com/problems/reverse-bits/description/
 */

const reverseBits = n => {
  let bit = 31;
  let result = 0;
  while (n > 0) {
    result += (n % 2) * Math.pow(2, bit--);
    n = Math.floor(n / 2);
  }
  return result;
};
