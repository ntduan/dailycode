/**
 * https://leetcode.com/problems/implement-strstr/description/
 */

/**
 * 暴力破解
 */

const strStr = function(haystack, needle) {
  if (needle === '') return 0;
  if (haystack.length < needle.length) return -1;
  for (let i = 0; i < haystack.length; i++) {
    let j;
    for (j = 0; j < needle.length; j++) {
      if (i + j >= haystack.length) return -1; // 判断是否超出haystack 长度，超出则不存在子字符串。
      if (haystack[i + j] !== needle[j]) break;
    }
    if (j === needle.length) return i;
  }
  return -1;
};
