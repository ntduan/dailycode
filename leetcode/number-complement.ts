/**
 * https://leetcode.com/problems/number-complement/description/
 */

/**
 * 异或
*/
var findComplement = function(num) {
  return num ^ (Math.pow(2, Math.floor(Math.log2(num)) + 1) - 1);
};
