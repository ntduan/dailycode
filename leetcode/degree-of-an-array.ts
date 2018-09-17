/**
 * https://leetcode.com/problems/contains-duplicate/description/
 */

/**
 * 三个哈希表，
 * 一个存储数量，一个存储最左出现的 index，一个存储最右出现的 index。
 *
*/
const findShortestSubArray = (nums: number[]): number => {
  const left = {};
  const right = {};
  const count = {};

  let degree = 0;

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = (count[nums[i]] || 0) + 1;
    left[nums[i]] = Math.min(left[nums[i]] !== undefined ? left[nums[i]] : nums.length, i);
    right[nums[i]] = Math.max(right[nums[i]] !== undefined ? right[nums[i]] : -1, i);
    degree = Math.max(count[nums[i]], degree);
  }

  let minLength = nums.length;
  for (const key of Object.keys(count)) {
    if (count[key] === degree) {
      minLength = Math.min(minLength, right[key] - left[key] + 1);
    }
  }

  return minLength;
};
