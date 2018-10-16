# 广度优先搜索 BFS

广度优先搜索是从根节点开始，按层级遍历树的节点。所展开的节点会被加入到一个先进先出的队列中。

```javascript
const BFS = root => {
  const queue = [root];
  const visited = [];
  while (queue.length) {
    const current = queue.shift();
    visited.push(queue.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return visited;
};
```

输出层级的信息：

```javascript
const BFS = root => {
  const queue = [root];
  const visited = [];
  let i = 0;
  while (queue.length) {
    const width = queue.length;
    console.log(`第 ${++i} 层`);
    for (let i = 0; i < width; i++) {
      const current = queue.shift();
      visited.push(queue.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
  return visited;
};
```

> [维基百科](https://zh.wikipedia.org/zh/%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2)
