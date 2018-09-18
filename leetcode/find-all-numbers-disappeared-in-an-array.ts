/**
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
 */

/**
 * 排序后查找
 */
// const findDisappearedNumbers = nums => {
//   if (!nums.length) return nums;
//   nums.sort((a, b) => a - b);
//   let result = [];
//   let [n, i] = [1, 0];
//   while (n <= nums.length) {
//     if (n < nums[i] || i >= nums.length) {
//       result.push(n);
//       n++;
//     } else if (n > nums[i]) {
//       i++;
//     } else {
//       n++;
//       i++;
//     }
//   }
//   return result;
// };

/**
 * 桶排序
 */
// const findDisappearedNumbers = nums => {
//   let i = 0
//   while(i < nums.length) {
//     if(nums[nums[i] - 1] !== nums[i]) {
//       [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
//     } else {
//       i++
//     }
//   }

//   let result = []
//   for(i = 0; i < nums.length; i++) {
//     if(i + 1 !== nums[i]) result.push(i + 1)
//   }

//   return result
// }

/**
 * 遍历 nums 将 nums[nums[i] - 1] 标记为负数。
 * 最后没被标记的位置就是所求。
 */

const findDisappearedNumbers = nums => {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    nums[index] = nums[index] > 0 ? -nums[index] : nums[index];
  }

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }

  return result;
};
