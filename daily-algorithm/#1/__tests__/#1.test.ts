import twoSum from '../#1';

describe.skip('#1', () => {
  it('边界条件', () => {
    expect(twoSum([], 0)).toEqual(null);
  });
  it('基本测试', () => {
    expect(twoSum([1, 2, 3, 4, 5], 6)).toEqual([2, 4]);
    expect(twoSum([5, 2, 3, 1, 5], 10)).toEqual([5, 5]);
  });
});
