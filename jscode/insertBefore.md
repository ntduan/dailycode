假设有一个数组 [A, B, C, D, E]，现在给定一个数组如 [E, C]，要求新插入一个 X，它的 index 必须小于 [E, C] 中最小的。

```javascript
// [A, B, C, D, E]
// 从后往前遍历，将元素往右移一位，直到 before 数组为空，则终止移动插入目标元素。
function insertBefore(arr, target, before) {
  before = new Set(before);
  let i = arr.length;
  while (i > 0) {
    i--;
    const current = arr[i];
    arr[i + 1] = current;
    if (before.has(current)) {
      before.delete(current);
      continue;
    }
    if (before.size > 0) {
      continue;
    }
    i++;
    break;
  }
  arr[i] = target;
  return arr;
}
```
