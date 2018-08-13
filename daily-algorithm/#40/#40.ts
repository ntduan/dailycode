/**
 * 排序后求解
 */
export default (nums) => {
  const nSum = nums.reduce((a, b) => a + b)
  nums.sort((a, b) => a - b)
  let i = 0
  for(let j = 1; j < nums.length; j++) {
    if(nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
}

// [1, 3, 3, 3]