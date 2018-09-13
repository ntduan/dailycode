/**
 * https://leetcode.com/problems/find-the-duplicate-number/description/
 */

/**
 * 暴力查找
 */
// const findDuplicate = (nums: number[]): number => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === nums[i]) return nums[j];
//     }
//   }
//   return Number.MIN_SAFE_INTEGER;
// };

/**
 * 排序，略
*/

/**
 * hash表，略
*/

/**
 * https://leetcode.com/problems/find-the-duplicate-number/solution/?page=2
 * Floyd's Tortoise and Hare (Cycle Detection)
*/

//@TODO