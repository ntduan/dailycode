/**
 * https://leetcode.com/problems/climbing-stairs/description/
 */

/**
 * 动态规划
 * f(1) = 1
 * f(2) = 2
 * f(3) = fn(2) + fn(1) = 3
 * ...
 * f(n) = fn(n - 1) + f(n - 2)
 */
// const climbStairs = n => {
//   const dp = [1, 2];
//   for (let i = 2; i < n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n - 1];
// };


/**
 * 优化
*/
const climbStairs = n => {
  if(n === 1) return 1
  if(n === 2) return 2

  let oneBefore = 1
  let twoBefore = 2
  let result
  for (let i = 3; i <= n; i++) {
    result = oneBefore + twoBefore
    oneBefore = twoBefore
    twoBefore = result
  }
  return result;
};