/**
 * 冒泡排序
 * 设置一个变量监控是否有交换，没有说明数组是已排序的。
 * 优势为最好复杂度为 O(N)，
 * @param originalArray
 */
const BubbleSort = (originalArray: number[]): number[] => {
  const array = [...originalArray];
  let swapped = false; // 优化
  for (let j = 0; j < array.length; j++) {
    swapped = false;
    for (let i = 1; i < array.length - j; i++) {
      if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        swapped = true;
      }
    }
    if (!swapped) {
      return array;
    }
  }
  return array;
};

export default BubbleSort;
