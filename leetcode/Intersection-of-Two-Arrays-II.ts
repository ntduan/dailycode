/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 */

/**
 * 使用一个哈希表存储，遍历 nums1，将他的元素存储于哈希表中，key是它的值，value是它出现的次数。
 * 定义一个空数组，然后遍历 nums2, 如果 nums2 中的值在哈希表中存在，且数量大于 0 ，则将这个 key 推入 result 中。数量 -1。
 */
// const intersect = (nums1: number[], nums2: number[]): number[] => {
//   const intersectMap = {};
//   for (let i = 0; i < nums1.length; i++) {
//     intersectMap[nums1[i]] = (intersectMap[nums1[i]] || 0) + 1;
//   }

//   let result = [];
//   for (let i = 0; i < nums2.length; i++) {
//     if (intersectMap[nums2[i]]) {
//       result.push(nums2[i]);
//       intersectMap[nums2[i]] = intersectMap[nums2[i]] - 1;
//     }
//   }

//   return result;
// };

/**
 * 排序后，双指针
 */

const intersect = (nums1: number[], nums2: number[]): number[] => {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  let [i, j] = [0, 0];
  let result = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      result.push(nums1[i]);
      i++;
      j++;
    }
  }
  return result;
};
