/**
 * https://leetcode.com/problems/queue-reconstruction-by-height/
 */

var reconstructQueue = function(people) {
  people.sort((a, b) => {
    return a[0] - b[0];
  });
  let result = [];
  for (let i = 0; i < people.length; i++) {
    let index = 0;
    for (let j = 0; j < people.length; j++) {
      if (!result[j] && index === people[i][1]) {
        result[j] = people[i];
        break;
      }
      if (!result[j] || result[j][0] >= people[i][0]) index += 1;
    }
  }
  return result;
};
