/**
 * 插入排序
 * @param originalArray
 */
const ShellSort = (originalArray: number[]): number[] => {
  const array = [...originalArray];
  let h = 1;
  const hArray = [h];
  while (h * 3 < array.length) {
    h = 3 * h + 1;
    hArray.push(h);
  }
  for (const gap of hArray) {
    for (let i = gap; i < array.length; i++) {
      const temp = array[i];
      let j;
      for (j = i; j > 0 && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }
      array[j] = temp;
    }
  }
  return array;
};

export default ShellSort;
