/**
 * https://leetcode.com/problems/search-insert-position/description/
 */

/**
 * 暴力破解
 */
// const searchInsert = (nums, target) => {
//   for(let i = 0; i < nums.length; i++) {
//     if(target === nums[i]) return i
//     if(target < nums[i]) return i
//   }
//   return nums.length
// };

/**
 * 递归二分查找
 */

// const searchInsert = (nums, target, start = 0, end = nums.length - 1) => {
//   const mid = Math.floor(start + (end - start) / 2);
//   if (nums[start] >= target) return start;
//   if (nums[end] < target) return end + 1;
//   if (nums[mid] === target) return mid;
//   if (nums[mid] > target) return searchInsert(nums, target, start, mid - 1);
//   if (nums[mid] < target) return searchInsert(nums, target, mid + 1, end);
// };

/**
 * 循环二分查找
*/
const searchInsert = (nums, target) => {
  let [low, high] = [0, nums.length - 1]
  while(low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if(nums[mid] < target) {
      low = mid + 1
    } else if(nums[mid] > target) {
      high = mid - 1
    }
  }
  return low
};
