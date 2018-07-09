import nonAdjacentSum from '../#9';

describe('#9', () => {
  it('测试', () => {
    expect(nonAdjacentSum([2, 4, 6, 2, 5])).toBe(13);
    expect(nonAdjacentSum([5, 1, 1, 5])).toBe(10);
  });
});
