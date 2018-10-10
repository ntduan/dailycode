# KMP 算法

KMP 可以使用线性的时间复杂度，查找一个子串所在的位置。

KMP 的算法的关键在于为查找的目标字符串创建一个部分匹配表 -- lps（longest proper prefix which is also suffix）。

该表的第 i 项表示，字符串 S 的 0 - i 的子字符串的前缀和后缀（不包含本身）的交集中的最长的字符串的长度。现在我们来计算 lps 表：

```javascript
// ABC ABCDAB ABCDABCDABDE
// 00001230120123012301200
const computeLPSArray = str => {
  const lps = [];
  lps[0] = 0; // 单个字符串没有前缀后缀
  let prefixIndex = 0;
  let i = 1;
  while (i < str.length) {
    if (str[prefixIndex] === str[i]) {
      lps[i] = prefixIndex + 1;
      prefixIndex += 1;
      i += 1;
    } else if (prefixIndex === 0) {
      lps[i] = 0;
      i += 1;
    } else {
      // 对于下面的字符串，当匹配最后一个 A 的时候：
      // AAACAAAA
      // 0120123？
      // 在 prefixIndex === C，i === length 的时候，
      // 由于 str[prefixIndex] !== str[i]，表示 (AAAC)AAAA !== AAAC(AAAA)。
      // 然后回退它的 prefixIndex 。它的前一个 prefixIndex === 3 表示 (AAA)CAAAA === AAAC(AAA)A。
      // 然后查找 prefixIndex 的前一个 index 的 lps 的值。
      // 它的值为 2 ，此时表示说明 (AA)ACAAAA === A(AA)CAAAA 又由于 (AAA)CAAAA === AAAC(AAA)A，
      // 所以 [(AA)A]CAAAA === [A(AA)]CAAAA === AAAC[A(AA)]A
      // 此时继续比较
      prefixIndex = lps[prefixIndex - 1];
    }
  }
  return lps;
};
```

然后根据 LPS 表求子串的位置：

```javascript
// ABC ABCDAB ABCDABCDABDE
// 查找：
// ABCDABD
// lps:
// 0000120

// 当 ' ' !== 'D' 的时候， targetIndex 从 0 开始匹配。
// 当 targetIndex === 0 且不匹配的时候，strIndex + 1。

const search = (str, target) => {
  if (target.length === 0) return 0;

  let [strIndex, targetIndex] = 0;

  const lps = computeLPSArray(target);

  while (strIndex < str.length) {
    if (str[strIndex] === target[targetIndex]) {
      // 匹配成功
      if (targetIndex === target.length - 1) return strIndex - target.length + 1;
      // 两个指针指针移动
      targetIndex += 1;
      strIndex += 1;
    } else if (targetIndex > 0) {
      targetIndex = lps[targetIndex - 1];
    } else {
      // 如果 targetIndex === 0
      strIndex += 1;
    }
  }

  return -1;
};
```
