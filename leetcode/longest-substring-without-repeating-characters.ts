/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * 滑动窗口算法
 */
var lengthOfLongestSubstring = function(s) {
  let map = {};
  let i = 0;
  let j = 0;
  let ans = 0;
  while (i < s.length && j < s.length) {
    if (!map[s[j]]) {
      map[s[j]] = true;
      j++;
      ans = Math.max(ans, j - i);
    } else {
      map[s[i]] = false;
      i++;
    }
  }
  return ans;
};
