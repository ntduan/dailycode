/**
 * https://leetcode.com/problems/longest-common-prefix/description/
 */

/**
 * 匹配单个字符
*/
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  let prefix = '';
  const minLength = Math.min.apply(null, strs.map(s => s.length));
  for (let i = 0; i < minLength; i++) {
    const current = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== current) return prefix;
    }
    prefix = prefix + current;
  }
  return prefix;
};
