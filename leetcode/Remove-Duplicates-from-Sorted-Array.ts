/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 * 注意这是已排序的数组。
 * 双指针，i 和 j 两个指针，分别指向最新的一项，和最后的不重复的那一项。
 * 遍历 nums，前 j 项都是不重复的元素，若第 i 项不等于第 j 项，因为这是一个已排序的数组，说明第 i 项是前面没有出现过的元素，将它赋值给 j + 1，此时 j 指针往后移动一位。
 */

const removeDuplicates = (nums: number[]): number => {
  let [i, j] = [1, 0];
  while (i < nums.length) {
    if (nums[i] !== nums[j]) {
      nums[j + 1] = nums[i];
      i++;
      j++;
    } else {
      i++;
    }
  }
  nums.length = j + 1;
  return nums.length;
};
