import findMissing from '../#4';

describe.skip('#4', () => {
  it('基本测试', () => {
    expect(findMissing([3, 4, -1, 1])).toBe(2);
    expect(findMissing([1, 2, 0])).toBe(3);
    expect(findMissing([-2, -3, -1])).toBe(1);
  });
});
