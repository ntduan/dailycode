/**
 * https://leetcode.com/problems/reverse-words-in-a-string/description/
 */

/**
 * split
*/
const reverseWords = str => {
  return str.split(' ').filter(x => x).reverse().join(' ')
};

/**
 * 反转整个字符串，再反转单个字符串
*/
