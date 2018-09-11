/**
 * https://leetcode.com/problems/rotate-array/description/
 * k = 3 => [1, 2, 3, 4, 5, 6, 7] => [5, 6, 7, 1, 2, 3, 4]
 */

/**
 * 一步一步旋转，复杂度 n * k
 */
// const rotate = (nums: number[], k: number): void => {
//   const rotateOne = () => {
//     const temp = nums[nums.length - 1];
//     for (let i = nums.length - 1; i > 0; i--) {
//       nums[i] = nums[i - 1];
//     }
//     nums[0] = temp;
//   };
//   while (k > 0) {
//     rotateOne();
//     k--;
//   }
//   return nums;
// };

/**
 * 使用临时数组存储后 k 个数，移位再拼接
 */
// const rotate = (nums: number[], k: number): void => {
//   const temp = [];
//   k = k % nums.length
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (i >= nums.length - k) {
//       temp.unshift(nums[i]);
//     }
//     if (i >= k) {
//       nums[i] = nums[i - k];
//     }
//   }
//   for(let i = 0; i < k; i++) {
//     nums[i] = temp[i];
//   }
// };

/**
 * 整个数组逆序，然后以 k 作为分界线，再分别逆序
 */
const rotate = (nums: number[], k: number): void => {
  const reverse = (nums, start = 0, end = nums.length) => {
    while (end > start + 1) {
      [nums[start], nums[end - 1]] = [nums[end - 1], nums[start]];
      start++;
      end--;
    }
  };
  reverse(nums);
  reverse(nums, 0, k);
  reverse(nums, k);
};
