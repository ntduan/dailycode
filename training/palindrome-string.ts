/**
 * 是否回文字符串
 */

/**
 * 逆序后对比
 */

// const isPalindromeStr = str => {
//   return str.split('').reverse().join('') === str
// }

/**
 * 从两头往中间对比
 */
// const isPalindromeStr = str => {
//   let [front, back] = [0, str.length - 1]

//   while(back > front) {
//     if(str[++front] !== str[--back]) return false
//   }
//   return true
// }

/**
 * 从中间往两头靠
 */
// const isPalindromeStr = str => {
//   // 注意怎么取得中间值的
//   let mid1 = (str.length >> 1) - 1
//   let mid2 = str.length % 2 ? mid1 + 2 : mid1 + 1
//   for(let i = 0; mid2 + i < str.length; i++) {
//     if(str[mid1 - i] !== str[mid2 + i]) return false
//   }
//   return true;
// };

/**
 * 递归判断是否回文字符串
 */

const isPalindromeStr = (str, forward = 0, backward = str.length - 1) => {
  if (forward >= backward) return true;
  if (str[forward] !== str[backward]) return false;
  return isPalindromeStr(str, forward + 1, backward - 1);
};
