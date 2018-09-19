/**
 * https://leetcode.com/problems/longest-uncommon-subsequence-i/description/
 */

const findLUSlength = (a, b) => {
  return a === b ? -1 : Math.max(a.length, b.length);
};
