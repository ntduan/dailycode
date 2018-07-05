import cons, { car, cdr } from '../#5';

describe.skip('#5', () => {
  it('测试', () => {
    expect(car(cons(3, 4))).toBe(3);
    expect(cdr(cons(3, 4))).toBe(4);
  });
});
