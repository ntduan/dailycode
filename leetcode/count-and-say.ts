/**
 * https://leetcode.com/problems/count-and-say/description/
 */

/**
 * 暴力破解，迭代
 */
const countAndSay = function(n) {
  const readOff = str => {
    let result = '';
    let pre = str[0];
    let count = 1;
    for (let i = 1; i < str.length; i++) {
      if (str[i] === pre) {
        count += 1;
      } else {
        result = `${result}${count}${pre}`;
        pre = str[i];
        count = 1;
      }
    }
    result = `${result}${count}${pre}`;
    return result;
  };
  let result = '1';
  for (let i = 2; i <= n; i++) {
    result = readOff(result);
  }
  return result;
};
