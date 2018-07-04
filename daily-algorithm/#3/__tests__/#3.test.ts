import BinaryTree from '../#3';

describe.skip('#3', () => {
  it('测试二叉树结构', () => {
    const node = new BinaryTree('root', new BinaryTree('left', new BinaryTree('left.left')), new BinaryTree('right'));
    expect(node.left.left.data).toBe('left.left');
  });
  it('测试序列化反序列化', () => {
    const node = new BinaryTree('root', new BinaryTree('left', new BinaryTree('left.left')), new BinaryTree('right'));
    expect(BinaryTree.serialize(node)).toBe('["root","left","right","left.left",null,null,null,null,null]');
    expect(BinaryTree.deserialize(BinaryTree.serialize(node)).left.left.data).toBe('left.left');
  });
});
