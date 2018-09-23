/**
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
 */

/**
 * 二分查找
 * [1,2,3,4,5,6,5,4,3,2,1]
 * [18,29,38,59,98,100,99,98,90]
*/
const peakIndexInMountainArray = A => {
  let [low, high] = [0, A.length - 1]
  while(low < high) {
    const mid = low + ((high - low) >> 1)
    if(A[mid] < A[mid + 1] && A[mid] > A[mid - 1]) {
      low = mid + 1
    } else if(A[mid] > A[mid + 1] && A[mid] < A[mid - 1]) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return low
};
