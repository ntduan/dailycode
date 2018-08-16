// [9, 11, 8, 5, 7, 10]
// min = 9 p = 2
// min = 8 p = 2
// min = 5 p = 2
// min = 5 p = 2
// min = 5 p = 10

// 动态规划
const sell = nums => {
  let min = Number.MAX_SAFE_INTEGER;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(nums[i], min);
    result = Math.max(nums[i] - min, result);
  }
  return result;
};

export default sell;
