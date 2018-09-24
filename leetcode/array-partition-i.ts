/**
 * https://leetcode.com/problems/array-partition-i/description/
*/

/**
 * 先排序，然后求索引是奇数的数的和
*/
const arrayPairSum = (nums) => {
  nums.sort((a, b) => a - b)
  let result = 0
  for(let i = 0; i < nums.length; i = i + 2) {
    result += nums[i]
  }
  return result
};