/**
 * https://leetcode.com/problems/contains-duplicate/description/
 */

/**
 * 插入排序查找
 */
// const containsDuplicate = (nums: number[]): boolean => {
//   for (let i = 0; i < nums.length; i++) {
//     const temp = nums[i];
//     let j;
//     for (j = i; nums[j - 1] >= temp && j > 0; j--) {
//       if (nums[j - 1] === temp) return true;
//       nums[j] = nums[j - 1];
//     }
//     nums[j] = temp;
//   }
//   return false;
// };

/**
 * 使用哈希表存储
 */
const containsDuplicate = (nums: number[]): boolean => {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i])) return true;
    numsMap.set(nums[i], i);
  }
  return false;
};
