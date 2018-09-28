/**
 * https://leetcode.com/problems/valid-parentheses/description/
 */


const isValid = s => {
  const match = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!stack.length) {
      stack.push(s[i]);
    } else {
      const peak = stack[stack.length - 1];
      if (match[s[i]] && match[s[i]] === peak) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }
  return !stack.length;
};
