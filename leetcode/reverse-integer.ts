/**
 * https://leetcode.com/problems/reverse-integer/description/
 */

const reverse = x => {
  const sign = x < 0 ? -1 : 1;
  const no = Number(
    String(Math.abs(x))
      .split('')
      .reverse()
      .join('')
  );
  return sign * (no > Math.pow(2, 31) ? 0 : no);
};
