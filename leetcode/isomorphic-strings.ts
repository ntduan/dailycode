/**
 * https://leetcode.com/problems/isomorphic-strings/description/
 */

/**
 * 用一个 hash 记录，替换的字符，对比
 */
// const isIsomorphic = (s, t) => {
//   let replaceMap = {}
//   for(let i = 0; i < s.length; i++) {
//     if(replaceMap[t[i]] && replaceMap[t[i]] !== s[i]) return false
//     replaceMap[t[i]] = s[i]
//   }
//   replaceMap = {}
//   for(let i = 0; i < t.length; i++) {
//     if(replaceMap[s[i]] && replaceMap[s[i]] !== t[i]) return false
//     replaceMap[s[i]] = t[i]
//   }
//   return true
// };

/**
 * 合并成一个循环
 */
const isIsomorphic = (s, t) => {
  let replaceMapS = {};
  let replaceMapT = {};
  for (let i = 0; i < s.length; i++) {
    if (replaceMapS[t[i]] && replaceMapS[t[i]] !== s[i]) return false;
    if (replaceMapT[s[i]] && replaceMapT[s[i]] !== t[i]) return false;
    replaceMapS[t[i]] = s[i];
    replaceMapT[s[i]] = t[i];
  }
  return true;
};
