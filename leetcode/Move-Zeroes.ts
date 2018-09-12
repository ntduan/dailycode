/**
 * https://leetcode.com/problems/move-zeroes/description/
 */

/**
 * 双指针，一个记录 0 的数量
*/
// const moveZeroes = (nums: number[]): void => {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       j++;
//     } else if (j > 0) {
//       [nums[i], nums[i - j]] = [nums[i - j], nums[i]]
//     }
//   }
// };

/**
 * 双指针，一个快指针记录当前位置，一个慢指针记录发现的最后一个非 0 元素的位置
*/
const moveZeroes = (nums: number[]): void => {
  let j = 0;
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      j++;
    }
  }
};
