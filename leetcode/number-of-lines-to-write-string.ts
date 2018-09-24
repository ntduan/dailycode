/**
 * https://leetcode.com/problems/number-of-lines-to-write-string/description/
 */

/**
 * 暴力破解
 */
const numberOfLines = (widths, S) => {
  let lines = 0;
  let width = 0;
  for (let i = 0; i < S.length; i++) {
    const index = S[i].charCodeAt(0) - 97;
    if (width + widths[index] > lines * 100) {
      width = lines * 100 + widths[index];
      lines += 1;
    } else {
      width += widths[index];
    }
  }
  return [lines, lines === 1 ? width : width % ((lines - 1) * 100)];
};
