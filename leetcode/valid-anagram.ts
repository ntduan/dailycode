/**
 * https://leetcode.com/problems/valid-anagram/description/
 */

/**
 * @TODO 把两个循环合并成一个
*/
const isAnagram = function(s, t) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) return false;
    map[t[i]] -= 1;
  }
  return !Object.keys(map).filter(x => map[x]).length;
};
