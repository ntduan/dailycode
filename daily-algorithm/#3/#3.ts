/**
 * @TODO 深度优先遍历
 */
class BinaryTree {
  data: any;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(data: any, left?: BinaryTree | null, right?: BinaryTree | null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  static serialize(node: BinaryTree): string {
    const unvisited: BinaryTree[] = [node];
    const visited: any[] = [];
    while (unvisited.length) {
      const current = unvisited.pop();
      if (current) {
        visited.push(current.data);
        unvisited.unshift(current.left);
        unvisited.unshift(current.right);
      } else {
        visited.push(null);
      }
    }
    return JSON.stringify(visited);
  }

  static deserialize(str: string): BinaryTree {
    const arr: any[] = JSON.parse(str);
    const node = new BinaryTree(arr[0]);
    const queue = [node];
    let i = 1;
    while (queue.length) {
      const node = queue.pop();
      if (arr[i]) {
        const p = new BinaryTree(arr[i]);
        node.left = p;
        queue.unshift(p);
      } else {
        node.left = null;
      }
      i += 1;
      if (arr[i]) {
        const p = new BinaryTree(arr[i]);
        node.right = p;
        queue.unshift(p);
      } else {
        node.right = null;
      }
      i += 1;
    }
    return node;
  }
}

export default BinaryTree;
