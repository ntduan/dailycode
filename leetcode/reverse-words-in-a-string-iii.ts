/**
 * https://leetcode.com/problems/c/description/
 */

const reverseWordsIII = s => {
  return s
    .split(' ')
    .map(str =>
      str
        .split('')
        .reverse()
        .join('')
    )
    .join(' ');
};
