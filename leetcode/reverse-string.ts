/**
 * https://leetcode.com/problems/reverse-string/description/
 */

const reverseString = s => {
  let reverseString = ''
  for(let i = 0; i < s.length; i++) {
    reverseString = s[i] + reverseString
  }
  return reverseString
};
