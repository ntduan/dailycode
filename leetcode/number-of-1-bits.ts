/**
 * https://leetcode.com/problems/number-of-1-bits/description/
 */

/**
 * 循环
 */
// const hammingWeight = n => {
//   let count = 0;
//   while (n > 0) {
//     if (n % 2) count += 1;
//     n = Math.floor(n / 2);
//   }
//   return count
// };

/**
 * 转化为2进制
 */
const hammingWeight = n => {
  const str = n.toString(2);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') count += 1;
  }
  return count
};
