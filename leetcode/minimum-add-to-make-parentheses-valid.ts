/**
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/
 */

/**
 * 栈
*/
var minAddToMakeValid = function(S) {
  if (!S.length) return 0;
  const matchMap = {
    ')': '(',
  };
  const stack = [];
  let i = 0;
  while (i < S.length) {
    if (stack[stack.length - 1] && matchMap[S[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
    i += 1;
  }
  return stack.length;
};
