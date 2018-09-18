# 二分搜索

对于已排序的数组，从中间开始搜索，如果中间元素恰好是需要查找的元素，则结束搜索。如果中间元素大于需要查找的元素，则在数组前半段部分搜索。
如果中间元素小于需要查找的元素，则在数组后半段部分搜索。如此反复。

递归实现：

```js
const binarySearch = (nums, target, start = 0, end = nums.length - 1) => {
  if(start > end) return -1
  const mid = Math.floor(start + (end - start) / 2)
  if(nums[mid] === target) return mid
  if(nums[mid] < target) return binarySearch(nums, target, mid + 1, end)
  if(nums[mid] > target) return binarySearch(nums, target, start, mid - 1)
}
```

循环实现：

```js
const binarySearch = (nums, target) => {
  let [low, high] = [0, nums.length - 1]
  while(low <= high) {
    const mid = low + ((high - low) >> 2)
    if(nums[mid] < target) {
      low = mid + 1
    } else if(nums[mid] > target) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
```