/**
 * https://leetcode.com/problems/valid-palindrome/description/
 */

const isPalindromeStrI = function(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let low = 0;
  let high = s.length - 1;
  while (high > low) {
    if (s[low] === s[high]) {
      high--;
      low++;
    } else {
      return false;
    }
  }
  return true;
};
