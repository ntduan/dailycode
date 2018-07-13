/**
 * 暴力穷举
 */
const sub = (str, l) => {
  let maxLength = l;
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (j + 1 < maxLength) continue;
      const sub = str.substring(i, i + j + 1);
      const subChar = {};
      for (let k = 0; k < sub.length; k++) {
        if (subChar[sub[k]]) {
          subChar[sub[k]] += 1;
        } else {
          subChar[sub[k]] = 1;
        }
      }
      const d = Object.keys(subChar).length;
      if (d === l) {
        if (sub.length > maxLength) {
          maxLength = sub.length;
          result = [sub];
        } else if (sub.length === maxLength) {
          result.push([sub]);
        }
      }
    }
  }
  return result;
};

export default sub;
// a b c d
// 01 02  03
// ab abc abcd
// 12 13
// bc bcd
// 23
// cd
//
// abc abd acd
