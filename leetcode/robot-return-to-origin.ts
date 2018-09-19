/**
 * https://leetcode.com/problems/robot-return-to-origin/description/
 */

/**
 * 分别判断垂直
 */
const judgeCircle = function(moves) {
  const map = { U: 0, D: 0, L: 0, R: 0 };
  for (let i = 0; i < moves.length; i++) {
    map[moves[i]] += 1;
  }
  return map.U === map.D && map.L === map.R
};
