/**
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/
 */

/**
 * 栈
 */
// var minAddToMakeValid = function(S) {
//   if (!S.length) return 0;
//   const matchMap = {
//     ')': '(',
//   };
//   const stack = [];
//   let i = 0;
//   while (i < S.length) {
//     if (stack[stack.length - 1] && matchMap[S[i]] === stack[stack.length - 1]) {
//       stack.pop();
//     } else {
//       stack.push(S[i]);
//     }
//     i += 1;
//   }
//   return stack.length;
// };

/**
 * O(1) 空间
 */
var minAddToMakeValid = function(S) {
  if (!S.length) return 0;

  let count = 0;
  let stack = 0;
  let i = 0;
  while (i < S.length) {
    if (S[i] === '(') {
      stack++;
    } else if (!stack) {
      // 如果是 ')' 则压入栈，不再匹配
      count++;
    } else {
      stack--;
    }
    i += 1;
  }
  return count + stack;
};
