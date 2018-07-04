import sort from '../BubbleSort';

describe('排序', () => {
  it('正确排序', () => {
    const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
    expect(sort(notSortedArr)).toEqual(sortedArr);
  });
});
