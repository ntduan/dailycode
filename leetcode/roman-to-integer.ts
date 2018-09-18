/**
 * https://leetcode.com/problems/roman-to-integer/description/
 */

const romanToInt = s => {
  const symbolMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  const sArr = s.split('');
  while (sArr.length) {
    if (symbolMap[sArr[0]] < symbolMap[sArr[1]]) {
      // 减法两个都弹出
      result += symbolMap[sArr[1]] - symbolMap[sArr[0]];
      sArr.shift();
    } else {
      // 加只弹出一个
      result += symbolMap[sArr[0]];
    }
    sArr.shift();
  }
  return result;
};
