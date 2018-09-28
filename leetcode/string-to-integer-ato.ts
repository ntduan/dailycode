/**
 * https://leetcode.com/problems/string-to-integer-atoi/description/
 */

const myAtoi = str => {
  let i = 0;
  let sign = 0;
  let resultStr = '';
  while (i < str.length) {
    if (!sign && str[i] === '-') {
      sign = -1;
    } else if (!sign && str[i] === '+') {
      sign = 1;
    } else if (!sign && str[i].match(/\d/)) {
      sign = 1;
      resultStr += str[i];
    } else if (sign && str[i].match(/\d/)) {
      resultStr += str[i];
    } else if (sign || str[i] !== ' ') {
      break;
    }
    i++;
  }
  let result = Number(resultStr) * sign;
  if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  if (result < -1 * Math.pow(2, 31)) {
    return -1 * Math.pow(2, 31);
  }
  return result;
};
