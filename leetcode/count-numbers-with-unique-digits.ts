/**
 * https://leetcode.com/problems/count-numbers-with-unique-digits/description/
 */

/**
 * 手动
 */
// const countNumbersWithUniqueDigits = n => {
//   switch (n) {
//     case 0:
//       return 1;
//     case 1:
//       return 10;
//     case 2:
//       return 91;
//     case 3:
//       return 739;
//     case 4:
//       return 5275;
//     case 5:
//       return 32491;
//     case 6:
//       return 168571;
//     case 7:
//       return 712891;
//     case 8:
//       return 2345851;
//     case 9:
//       return 5611771;
//     default:
//       return -1;
//   }
// };

const countNumbersWithUniqueDigits = n => {
  if (n == 0) return 1;
  if (n == 1) return 10;

  let [ans, base] = [10, 9];

  for (let i = 9, j = n - 1; i > 0 && j > 0; i--, j--) {
    base *= i;
    ans += base;
  }
  return ans;
};
