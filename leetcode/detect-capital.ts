/**
 * https://leetcode.com/problems/detect-capital/description/
 */


/**
 * 正则
*/
const detectCapitalUse = (word) => {
  return new RegExp(['(^[A-Z]+$)', '(^[a-z]+$)', '(^[A-Z][a-z]*$)'].join('|')).test(word);
};
