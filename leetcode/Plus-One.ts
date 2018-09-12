/**
 * https://leetcode.com/problems/plus-one/description/
 */

const plusOne = function(digits: number[]): number[] {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (!carry) break;
    digits[i] = digits[i] + 1;
    if (digits[i] >= 10) {
      digits[i] = digits[i] - 10;
      carry = 1;
    } else {
      carry = 0;
    }
  }
  if (carry) {
    digits.unshift(carry);
  }
  return digits;
};
