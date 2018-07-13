import climb from '../#12';

describe.skip('#12', () => {
  it('测试', () => {
    expect(climb(4, [1, 2])).toBe(5);
    expect(climb(4, [2])).toBe(1);
    expect(climb(10, [2, 5])).toBe(2);
  });
});
