import median from '../#31';

describe.skip('#31', () => {
  it('测试', () => {
    expect(median([2, 1, 5, 7, 2, 0, 5])).toEqual([2, 1.5, 2, 3.5, 2, 2, 2]);
  });
});
