/**
 * 选择排序
 * @param originalArray
 */
const SelectionSort = (originalArray: number[]): number[] => {
  const array = [...originalArray];
  for (let j = 0; j < array.length - 1; j++) {
    let min = j;
    for (let i = j + 1; i < array.length; i++) {
      if (array[i] < array[min]) {
        min = i;
      }
    }
    [array[j], array[min]] = [array[min], array[j]];
  }
  return array;
};

export default SelectionSort;
