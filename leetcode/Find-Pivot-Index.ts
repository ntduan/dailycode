/**
 * https://leetcode.com/problems/find-pivot-index/description/
*/

/**
 * 先求出总和，然后遍历累加的左边的和，用总和减去当前值和左边的和就右边的和，比较他们的值。
*/
const pivotIndex = (nums: number[]): number => {
  const totalSum = nums.reduce((a, b) => a + b)
  let leftSum = 0
  for(let i = 0; i < nums.length; i++) {
    if(leftSum === totalSum - nums[i]) return i
    leftSum += nums[i]
  }
  return -1
};