/**
 * https://leetcode.com/problems/can-place-flowers/description/
 */

/**
 * 贪心算法
 */
const canPlaceFlowers = (flowerbed, n) => {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] !== 1) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] !== 1)
    ) {
      count += 1;
      flowerbed[i] = 1;
    }
  }
  return count >= n;
};
