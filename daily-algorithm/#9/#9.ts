const nonAdjacentSum = (nums: number[]) => {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  let dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    [dp[0], dp[1]] = [dp[1], Math.max(dp[0] + nums[i], dp[1])];
  }
  return dp[dp.length - 1];
};

export default nonAdjacentSum;
