/**
 * https://leetcode.com/problems/two-sum/description/
 */

/**
 * 使用 map，然后找到 tartget - nums[i] 是否存在
 */
const twoSum = function(nums: number[], target: number): number[] {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) continue
    if (numsMap.has(target - nums[i])) return [numsMap.get(target - nums[i]), i];
    numsMap.set(nums[i], i);
  }
  return [-1, -1];
};

/**
 * 如果数组是已排序的，双指针向中间靠拢
 */

// const twoSum = function(nums: number[], target: number): number[] {
//   let [i, j] = [0, nums.length - 1];
//   while (j > i) {
//     const sum = nums[i] + nums[j];
//     if (sum > target) {
//       j--;
//     } else if (sum < target) {
//       i++;
//     } else {
//       return [i, j];
//     }
//   }
// };
