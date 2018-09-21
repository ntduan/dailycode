/**
 * https://leetcode.com/problems/find-and-replace-pattern/description/
 */

/**
 * 与同构题类似
*/
const findAndReplacePattern = function(words, pattern) {
  const isMatch = (word, pattern) => {
    const length = word.length;
    const wordMap = {};
    const patternMap = {};
    for (let i = 0; i < length; i++) {
      if (wordMap[word[i]] && wordMap[word[i]] !== pattern[i]) return false;
      if (patternMap[pattern[i]] && patternMap[pattern[i]] !== word[i]) return false;
      wordMap[word[i]] === pattern[i];
      patternMap[pattern[i]] === word[i];
    }
    return true;
  };
  return words.filter(word => isMatch(word, pattern));
};
