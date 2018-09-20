/**
 * https://leetcode.com/problems/to-lower-case/description/
 */

/**
 * 内置函数
*/
// const toLowerCase = str => {
//   return str.toLowerCase()
// };

/**
 * 根据 ASIIC
 */
const toLowerCase = str => {
  let s = ''
  for(let i = 0; i < str.length; i++) {
    s += String.fromCharCode(str[i].charCodeAt(0) - 32)
  }
  return s
};
