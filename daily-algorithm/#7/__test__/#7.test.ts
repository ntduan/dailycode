import encodedNum from '../#7';

describe.skip('#7', () => {
  it('测试', () => {
    expect(encodedNum(111)).toBe(3);
    expect(encodedNum(1111)).toBe(5);
    expect(encodedNum(11111)).toBe(8);
    expect(encodedNum(111117)).toBe(13);
    expect(encodedNum(17121)).toBe(6);
    expect(encodedNum(1712)).toBe(4);
  });
});
