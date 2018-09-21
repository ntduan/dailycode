/**
 * https://leetcode.com/problems/hamming-distance/description/
 */

/**
 * 异或
*/
const hammingDistance = (x, y) => {
  return (x ^ y).toString(2).split('').reduce((a, b) => +a + +b, 0)
};
