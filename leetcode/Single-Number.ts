/**
 * https://leetcode.com/problems/single-number/description/
 */

/**
 * 使用数学的方法，对于[a, b, a, b, c]总和为 2a+2b+c。数组去重得到 [a, b, c]，它的和：a+b+c,然后乘以 2 再减去 2a+2b+c，即是 c
 */
const singleNumber = (nums: number[]): number => {
  const sum = nums.reduce((a, b) => a + b);
  const sum1 = Array.from(new Set(nums)).reduce((a, b) => a + b);
  return sum1 * 2 - sum;
};

/**
 * 使用异或
 * 因为 a ^ a = 0，0 ^ c = c
 * 所以 a ^ b ^ a ^ b ^ c = a ^ a ^ b ^ b ^ c = c
 */
// const singleNumber = (nums: number[]): number => {
//   return nums.reduce((a, b) => a ^ b);
// };
