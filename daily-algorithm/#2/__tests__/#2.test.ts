import product from '../#2';

describe.skip('#2', () => {
  it('基本测试', () => {
    expect(product([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
    expect(product([3, 2, 1])).toEqual([2, 3, 6]);
  });
});
