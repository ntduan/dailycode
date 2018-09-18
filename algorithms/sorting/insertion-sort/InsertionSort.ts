/**
 * 插入排序
 * @param originalArray
 */
// const SelectionSort = (originalArray: number[]): number[] => {
//   const array = [...originalArray];
//   for (let i = 1; i < array.length; i++) {
//     // 条件不能是 array[j] < array[j - 1] 会导致多一次交换，不稳定。
//     for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
//       [array[j], array[j - 1]] = [array[j - 1], array[j]];
//     }
//   }
//   return array;
// };

/**
 * 优化版
 * 移动元素，避免了数组的交换
 */
const SelectionSort = (originalArray: number[]): number[] => {
  const array = [...originalArray];
  for (let i = 1; i < array.length; i++) {
    const temp = array[i];
    let j;
    for (j = i; j > 0 && array[j - 1] > temp; j--) {
      array[j] = array[j - 1];
    }
    array[j] = temp;
  }
  return array;
};

export default SelectionSort;
