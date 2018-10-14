/**
 * https://leetcode.com/problems/happy-number/description/
*/

/**
 *  魔法数字
*/
var isHappy = function(n) {
  if(n === 1) return true
  const nextNumber = `${n}`.split('').reduce((r, n) => r + Math.pow(Number(n), 2), 0)
  return n > 6 ? isHappy(nextNumber) : false
};

/**
 * Floyd判圈算法
*/