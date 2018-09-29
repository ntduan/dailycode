/**
 * https://leetcode.com/problems/fizz-buzz/description/
 */

/**
 * 代码风格可以优化
 */
var fizzBuzz = function(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const num = i + 1;
    if (num % 3 === 0 && num % 5 === 0) {
      result[i] = 'FizzBuzz';
    } else if (num % 3 === 0) {
      result[i] = 'Fizz';
    } else if (num % 5 === 0) {
      result[i] = 'Buzz';
    } else {
      result[i] = '' + num;
    }
  }
  return result;
};
