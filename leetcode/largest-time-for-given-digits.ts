/**
 * https://leetcode.com/problems/largest-time-for-given-digits/submissions/
 */

/**
 * 暴力破解
 */
var largestTimeFromDigits = function(A) {
  let result = [];
  const isValid = arr => {
    if (arr[0] === 2 && arr[1] < 4 && arr[2] < 6) return true;
    if (arr[0] < 2 && arr[2] < 6) return true;
    return false;
  };

  const compare = (a1, a2) => {
    if (!a2.length) return true;
    for (let i = 0; i < 4; i++) {
      if (a1[i] > a2[i]) {
        return true;
      } else if (a1[i] < a2[i]) {
        return false;
      }
    }
    return false;
  };

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (j === i) continue;
      for (let k = 0; k < A.length; k++) {
        if (k === i || k === j) continue;
        for (let h = 0; h < A.length; h++) {
          if (h === i || h === j || h === k) continue;
          const temp = [A[i], A[j], A[k], A[h]];
          if (isValid(temp)) result = compare(temp, result) ? temp : result;
        }
      }
    }
  }

  return result.length ? `${result[0]}${result[1]}:${result[2]}${result[3]}` : '';
};
