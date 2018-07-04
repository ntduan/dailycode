/**
 * 桶排序
 * @param nums
 */
const findMissing = (nums: number[]): number => {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] > 0 && nums[i] - 1 < nums.length && nums[i] !== nums[i] + 1 && nums[i] !== nums[nums[i] - 1]) {
      const j = nums[i] - 1;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  return 1;
};

export default findMissing;

