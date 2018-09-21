/**
 * https://leetcode.com/problems/flipping-an-image/description/
 */

const flipAndInvertImage = A => {
  return A.map(a => a.reverse().map(b => (b === 1 ? 0 : 1)));
};
