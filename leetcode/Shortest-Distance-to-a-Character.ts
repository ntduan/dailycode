/**
 * https://leetcode.com/problems/shortest-distance-to-a-character/description/
 */

/**
 * 遍历得到目标c的位置。
 * 在遍历，求出每一点到c的距离中的最小值。
 */
// const shortestToChar = (S: string, C: string) => {
//   const result = [];
//   const targetIndex = [];
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] === C) targetIndex.push(i);
//   }
//   for (let j = 0; j < S.length; j++) {
//     const minD = targetIndex.reduce((result, index) => {
//       result = Math.min(Math.abs(index - j), result);
//       return result;
//     }, Number.MAX_SAFE_INTEGER);
//     result[j] = minD;
//   }
//   return result;
// };

/**
 * “loveleetcode”
 * 从左到右遍历一遍，得到该位置到最近的左边的 c 的距离。[0, 0, 0, 3, 1, 5, 6, 1, 2, 3, 4, 11]
 * 再从右到左遍历一遍，得到该位置到最近的右边的 c 的距离, 求左边距离和右边距离中的最小值
 */
const shortestToChar = (S: string, C: string) => {
  const result = [];

  let leftPosition = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) leftPosition = i;
    result[i] = i - leftPosition;
  }

  let rightPosition = Number.MAX_SAFE_INTEGER;
  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] === C) rightPosition = i;
    result[i] = Math.min(rightPosition - i, result[i]);
  }

  return result;
};
