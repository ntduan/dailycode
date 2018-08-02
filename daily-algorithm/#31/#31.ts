// 使用插入排序

const median = nums => {
  const result = [];
  result[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const temp = nums[i];
    let j;
    for (j = i; j > 0 && nums[j - 1] > temp; j--) {
      nums[j] = nums[j - 1];
    }
    nums[j] = temp;

    const currentLength = i + 1;
    if (currentLength % 2) {
      result[i] = nums[Math.floor(currentLength / 2)];
    } else {
      result[i] = (nums[currentLength / 2 - 1] + nums[currentLength / 2]) / 2;
    }

  }

  return result;
};

export default median
