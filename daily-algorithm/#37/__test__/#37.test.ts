import powerSet from '../#37';

describe.skip('#31', () => {
  it('测试', () => {
    expect(powerSet([1, 2, 3])).toEqual([[], [1], [1, 2], [2], [3], [1, 3], [1, 2, 3], [2, 3]]);
  });
});
