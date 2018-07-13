/**
 * 爬楼梯扩展
 */

const climb = (n: number, steps: number[]): number => {
  const dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = 0;
    for (const step of steps) {
      if (step === i + 1) {
        dp[i] += 1;
      }
      if (i >= step) {
        dp[i] += dp[i - step];
      }
    }
  }

  return dp[dp.length - 1];
};

export default climb;
