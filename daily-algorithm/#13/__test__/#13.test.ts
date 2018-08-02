import sub from '../#13';

describe.skip('#13', () => {
  it('测试', () => {
    expect(sub('abcba', 2)).toEqual(['bcb']);
  });
});
