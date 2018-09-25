/**
 * https://leetcode.com/problems/missing-number/description/
 */

/**
 * 公式
*/
const missingNumber = (nums) => {
  const sum1 = (nums.length * (nums.length + 1)) / 2;
  const sum2 = nums.reduce((a, b) => a + b);
  return sum1 - sum2;
};

/**
 * 位运算
 * 略
*/
