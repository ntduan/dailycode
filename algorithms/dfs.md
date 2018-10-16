# 深度优先搜索 DFS

深度优先搜索的算法思想是沿着树的深度遍历树的节点，尽可能深的搜索树的分支。

我们可以使用递归或者栈来实现这个算法。以二叉树为例。

递归：

```javascript
// 先序遍历， 先访问根节点，再访问左子树，再访问右子树
const DFS = root => {
  if (!root) return;
  console.log(root.val);
  DFS(root.left);
  DFS(root.right);
};
// 中序遍历， 先访问左子树，再访问根节点，再访问右子树
const DFS = root => {
  if (!root) return;
  DFS(root.left);
  console.log(root.val);
  DFS(root.right);
};
// 后序遍历， 先访问左子树，再访问右子树，再访问根节点
const DFS = root => {
  if (!root) return;
  DFS(root.left);
  DFS(root.right);
  console.log(root.val);
};
// 保存访问结果
const DFS = (root, visited = []) => {
  if (!root) return;
  visited.push(root.val);
  DFS(root.left, visited);
  DFS(root.right, visited);
  return visited;
};
```

递归实现性能可能会有问题，下面是栈的实现：

```javascript
// 先序遍历
const DFS = root => {
  if (!root) return [];
  const visited = [];
  const stack = [root];
  while (stack.length) {
    const current = stack.pop();
    visited.push(current.val);
    if (current.right) visited.push(current.right);
    if (current.left) visited.push(current.left);
  }
};
// 中序遍历
const DFS = root => {
  if (!root) return [];
  const visited = [];
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    visited.push(root.val);
    root = root.right;
  }
};

// 中序遍历
const DFS = root => {
  if (!root) return [];
  const visited = [];
  const stack = [];
  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      visited.push(root.val);
      root = root.right;
    }
  }
  return visited;
};

// 后序遍历
const DFS = root => {
  if (!root) return [];
  const visited = [];
  const stack = [];
  let lastNodeVisited = null;
  while (stack.length || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      const peekNode = stack[stack.length - 1];
      // if right child exists and traversing node
      // from left child, then move right
      if (peekNode.right && lastNodeVisited !== peekNode.right) {
        root = peekNode.right;
      } else {
        visited.push(peekNode.val);
        lastNodeVisited = stack.pop();
      }
    }
  }
  return visited
};
```

> [维基百科](https://zh.wikipedia.org/wiki/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2)
