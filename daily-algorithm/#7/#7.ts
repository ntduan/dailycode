/**
 * 动态规划
 * @param num
 */
const encodedNum = (num: number) => {
  const nums = ('' + num).split('');
  const dp = [1];
  for (let i = 1; i < nums.length; i++) {
    if (+(nums[i - 1] + nums[i]) > 26) {
      dp[i] = dp[i - 1];
    } else {
      if (i === 1) {
        dp[i] = dp[i - 1] + 1;
      } else {
        dp[i] = dp[i - 1] + dp[i - 2];
      }
    }
  }
  return dp[dp.length - 1];
};

export default encodedNum;
