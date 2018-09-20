/**
 * https://leetcode.com/problems/max-increase-to-keep-city-skyline/description/
 */

/**
 * grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
 * 求出 iMax jMax 再循环一次
 */
const maxIncreaseKeepingSkyline = grid => {
  let length = grid[0].length;
  let iMax = new Array(length).fill(0);
  let jMax = new Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      iMax[i] = Math.max(grid[i][j], iMax[i]);
      jMax[j] = Math.max(grid[i][j], jMax[j]);
    }
  }

  let result = 0;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      result += Math.min(iMax[i], jMax[j]) - grid[i][j];
    }
  }

  return result;
};
