# 多数投票算法

参考资料：https://gregable.com/2013/10/majority-vote-algorithm-find-majority.html

对于一个未排序的数组，[1, 0, 1, 2, 1, 1, 3]， 我们想要得到它当中过半的元素是什么（在该数组中是 1）。首先我们可以想到使用 hash 表，此时时间时间复杂度为 O(N)，空间复杂度也同样为 O(N)。

而 Boyer-Moore Majority Vote Algorithm 可以实现 O(1) 的空间复杂度。

它的实现是：

```js
const majorityElement = nums => {
  let [candidate, count] = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count += 1;
    } else if (count === 0) {
      [candidate, count] = [nums[i], 1];
    } else {
      count -= 1;
    }
  }
  return candidate;
};
```

如果存在多值，那么就是 candidate。可以再加一个循环检测 candidate 是否是多值。

对于 [1, 0, 1, 2, 1, 1, 3]，一开始 candidate 是 1，count 也是 1，然后会被 0 抵消掉，count 变成 0。 然后因为 count 是 0，所以 candidate 又被置为 1。
num 到 2 的时候，count 被抵消。然后连续 2 个 1 会使得 count 为 2。num 到 3 的时候，count 会被抵消一个，此时 candidate 是 1，count 也是 1。最终 candidate 就是可能的多数数字。
可以再循环一遍检查它的是否就是多数数字。

上面即是求出现次数大于 n / 2 的数字，推广到出现次数大于 n / 3 的数字时，由于可能有两个这样的数，我们使用两个变量来表示，具体代码是：

```js
const majorityElementII = nums => {
  // candidate1、candidate2 设置不同的初始值
  let [count1, count2, candidate1, candidate2] = [0, 0, 0, 1];
  for (let i = 0; i < nums.length; i++) {
    if (candidate1 === nums[i]) {
      count1 += 1;
    } else if (candidate2 === nums[i]) {
      count2 += 1;
    } else if (count1 === 0) {
      [candidate1, count1] = [nums[i], 1];
    } else if (count2 === 0) {
      [candidate2, count2] = [nums[i], 1];
    } else {
      [count1, count2] = [count1 - 1, count2 - 1];
    }
  }

  // 检测 candidate1, candidate2 是否满足条件
  [count1, count2] = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    if (candidate1 === nums[i]) count1 += 1;
    if (candidate2 === nums[i]) count2 += 1;
  }

  const result = [];
  if (count1 > nums.length / 3) result.push(candidate1);
  if (count2 > nums.length / 3) result.push(candidate2);
  return result;
};
```
