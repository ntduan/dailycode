/**
 * https://leetcode.com/problems/score-after-flipping-matrix/description/
 */

const matrixScore = A => {
  // 将第一列全变为1
  for (let i = 0; i < A.length; i++) {
    if (A[i][0] === 0) {
      for (let j = 0; j < A[i].length; j++) {
        A[i][j] = A[i][j] === 1 ? 0 : 1;
      }
    }
  }

  for (let j = 1; j < A[0].length; j++) {
    let zeroNo = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i][j] === 0) {
        zeroNo++;
      }
    }
    // 检查是否需要转化
    if (zeroNo > A.length - zeroNo) {
      for (let i = 0; i < A.length; i++) {
        A[i][j] = A[i][j] === 1 ? 0 : 1;
      }
    }
  }

  let scroe = 0;
  for (let i = 0; i < A.length; i++) {
    scroe += parseInt(A[i].join(''), 2);
  }

  return scroe;
};
