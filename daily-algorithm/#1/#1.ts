/**
 * 两数之和
 * 使用 hash 缓存，时间复杂度 O(n)
 */

const twoSum = (nums: number[], target: number): number[] | null => {
  const hashMap = {};
  for (const num of nums) {
    const remainValue = target - num;
    if (hashMap[remainValue] !== undefined) {
      return [remainValue, num];
    }
    hashMap[num] = true;
  }
  return null;
};

export default twoSum;
