/**
 * https://leetcode.com/problems/string-compression/description/
 */

/**
 * 双指针
 */

var compress = function(chars) {
  // i 是快指针，j 是慢指针
  let [i, j] = [1, 0];
  let count = 0;
  while (i < chars.length || count) {
    if (i < chars.length && chars[i] === chars[j]) {
      count += 1;
      i++;
    } else {
      if (count > 0) {
        const str = `${count + 1}`;
        for (let s = 0; s < str.length; s++) {
          chars[++j] = str[s];
        }
      }
      if (i < chars.length) {
        chars[++j] = chars[i++];
      }
      count = 0;
    }
  }
  chars.length = j + 1;
  return chars.length;
};
