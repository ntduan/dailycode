/**
 * https://leetcode.com/problems/unique-paths/
 */

/**
 * 动态规划
 */
var uniquePaths = function(m, n) {
  const dp = Array.from(new Array(n), _ => {
    return [...new Array(m)];
  });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }
  }

  return dp[n - 1][m - 1];
};
