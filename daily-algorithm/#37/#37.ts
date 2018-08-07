const powerSet = nums => {
  const result = [[]];
  for (const num of nums) {
    const newSet = [[num]];
    for (const sub of result) {
      newSet.push(sub.concat(num));
    }
    result.concat(newSet);
  }
  return result;
};

export default powerSet;
