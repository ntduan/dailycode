/**
 * https://leetcode.com/problems/power-of-three/description/
 */

/**
 * 三进制
 */
var isPowerOfThree = function(n) {
  return !!n.toString(3).match(/^10*$/);
};
