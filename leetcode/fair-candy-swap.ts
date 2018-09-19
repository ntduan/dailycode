/**
 * https://leetcode.com/problems/fair-candy-swap/description/
 */

/**
 * 将问题转化为求差值为 sumA - sumB 的元素
 * 使用 hash 表
 */
var fairCandySwap = function(A, B) {
  const sumA = A.reduce((a, b) => a + b);
  const sumB = B.reduce((a, b) => a + b);
  const exchange = (sumA - sumB) / 2;

  const mapA = {};
  for (let i = 0; i < A.length; i++) {
    mapA[A[i]] = true;
  }
  for (let i = 0; i < B.length; i++) {
    if (mapA[exchange + B[i]]) return [exchange + B[i], B[i]];
  }
};
