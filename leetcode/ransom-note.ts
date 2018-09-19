/**
 * https://leetcode.com/problems/ransom-note/description/
 */

/**
 * 使用 hash 存储字母的数量。
 * 或者可以使用26位长的数组存储每个字母的数量。
 */
const canConstruct = (ransomNote, magazine) => {
  const letterMap = {};
  for (let i = 0; i < magazine.length; i++) {
    letterMap[magazine[i]] = (letterMap[magazine[i]] || 0) + 1;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!letterMap[ransomNote[i]]) return false;
    letterMap[ransomNote[i]] -= 1;
  }
  return true
};
