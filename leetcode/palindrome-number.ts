/**
 * https://leetcode.com/problems/palindrome-number/description/
 */

/**
 * 转化为字符串
 */
// const isPalindrome = (x: number): boolean => {
//   const reverse = (str: string): string => {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//       result = str[i] + result;
//     }
//     return result;
//   };

//   const isPalindromeStr = (str: string): boolean => {
//     return reverse(str) === str;
//   };
//   return isPalindromeStr(x + '');
// };

/**
 * 数字回文，根据一半的数字，生成一个数字，然后比较。
 * https://leetcode.com/problems/palindrome-number/solution/
 */
const isPalindrome = x => {
  // 最后一位数字是 0 需要特殊处理
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  if (x < 10) return true;
  let halfReverse = 0;
  while (x > halfReverse) {
    halfReverse = halfReverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === halfReverse || x === Math.floor(halfReverse / 10);
};
