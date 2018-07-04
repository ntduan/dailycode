/**
 * 剩余数的乘积
 * 1.先得出总乘积；2.分别除以每一个数字。时间复杂度 O(n)
 * @param nums
 */

// const product = (nums: number[]): number[] | null => {
//   const totalProduct = nums.reduce((r, n) => r * n, 1);
//   return nums.map(n => totalProduct / n);
// };

/**
 * 不使用除法
 * https://stackoverflow.com/questions/2680548/given-an-array-of-numbers-return-array-of-products-of-all-other-numbers-no-div
 * 遍历构造数组 [1,              n[0],              n[0] * n[1],       ... ,n[0] * n[1] * n[2], n[0] * ... * n[i - 1]]
 * 遍历构造数组 [n[1]* ... n[i], n[2] * ... * n[i], n[3] * ... * n[i], ... ,1]
 */
const product = (nums: number[]): number[] | null => {
  const productsBelow = [];
  const result = [];

  let init = 1;
  for (let i = 0; i < nums.length; i++) {
    productsBelow[i] = init;
    init *= nums[i];
  }

  init = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = init * productsBelow[i];
    init *= nums[i];
  }

  return result;
};

export default product;
