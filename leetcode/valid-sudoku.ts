/**
 * https://leetcode.com/problems/valid-sudoku/description/
 */

/**
 * @TODO 优化合并循环
 */

const isValidSudoku = board => {
  for (let i = 0; i < board.length; i++) {
    let jMap = {};
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') continue;
      if (jMap[board[i][j]]) return false;
      jMap[board[i][j]] = true;
    }
  }
  for (let j = 0; j < board[0].length; j++) {
    let iMap = {};
    for (let i = 0; i < board.length; i++) {
      if (board[i][j] === '.') continue;
      if (iMap[board[i][j]]) return false;
      iMap[board[i][j]] = true;
    }
  }
  for (const s1 of [0, 3, 6]) {
    for (const s2 of [0, 3, 6]) {
      let subMap = {};
      for (let i = s1; i < 3 + s1; i++) {
        for (let j = s2; j < 3 + s2; j++) {
          if (board[i][j] === '.') continue;
          if (subMap[board[i][j]]) return false;
          subMap[board[i][j]] = true;
        }
      }
    }
  }
  return true;
};
