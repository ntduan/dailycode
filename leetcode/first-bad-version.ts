/**
 * https://leetcode.com/problems/first-bad-version/description/
 */

/**
 * 二分搜索
 */
var firstBadVersion = function(isBadVersion) {
  return function(n) {
    let [low, high] = [0, n];
    while (low < high) {
      const mid = low + ((high - low) >> 1);
      const midIsBad = isBadVersion(mid);
      const midPreIsBad = isBadVersion(mid - 1);
      if (midIsBad && !midPreIsBad) {
        return mid;
      } else if (midIsBad && midPreIsBad) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return low;
  };
};
