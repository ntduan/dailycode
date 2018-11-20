/**
 * https://leetcode.com/problems/product-of-array-except-self/submissions/
 */

var productExceptSelf = function(nums) {
  let left = [1],
    leftProduct = 1;
  for (let i = 1; i < nums.length; i++) {
    leftProduct *= nums[i - 1];
    left[i] = leftProduct;
  }
  let result = [1],
    rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i !== nums.length - 1) rightProduct *= nums[i + 1];
    result[i] = left[i] * rightProduct;
  }
  return result;
};
