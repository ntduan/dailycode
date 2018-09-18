/**
 * https://leetcode.com/problems/majority-element/description/
 */

/**
 * hash 略
 */

/**
 * Majority Voting Algorithm
 * 多数投票算法
 */
const majorityElement = nums => {
  let [candidate, count] = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count += 1;
    } else if (count === 0) {
      [candidate, count] = [nums[i], 1];
    } else {
      count -= 1;
    }
  }
  return candidate;
};
