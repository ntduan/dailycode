/**
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
 * 类似
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
 */

/**
 * 桶排序，遍历 nums 将 nums[nums[i] - 1] 标记为负数。
 * [4,-3,-2,-7,8,2,3,1]
 */
const findDuplicates = nums => {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    } else {
      result.push(index + 1)
    }
  }
  return result
};
