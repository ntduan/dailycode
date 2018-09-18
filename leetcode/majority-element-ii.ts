/**
 * https://leetcode.com/problems/majority-element-ii/description/
 */

/**
 * 多数投票算法
 */

// [1,1,1,3,3,2,2,2]

const majorityElementII = nums => {
  // candidate1、candidate2 设置不同的初始值
  let [count1, count2, candidate1, candidate2] = [0, 0, 0, 1];
  for (let i = 0; i < nums.length; i++) {
    if (candidate1 === nums[i]) {
      count1 += 1;
    } else if (candidate2 === nums[i]) {
      count2 += 1;
    } else if (count1 === 0) {
      [candidate1, count1] = [nums[i], 1];
    } else if (count2 === 0) {
      [candidate2, count2] = [nums[i], 1];
    } else {
      [count1, count2] = [count1 - 1, count2 - 1];
    }
  }

  // 检测 candidate1, candidate2 是否满足条件
  [count1, count2] = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    if (candidate1 === nums[i]) count1 += 1;
    if (candidate2 === nums[i]) count2 += 1;
  }

  const result = [];
  if (count1 > nums.length / 3) result.push(candidate1);
  if (count2 > nums.length / 3) result.push(candidate2);
  return result;
};
