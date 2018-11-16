/**
 * https://leetcode.com/problems/long-pressed-name/description/
*/

var isLongPressedName = function(name, typed) {
  let i = 0
  let j = 0
  while(i < name.length) {
      if(typed[j] === name[i]) {
          i += 1
          j += 1
      } else {
          if(i > 0 && typed[j] === name[i - 1]) {
              j += 1
          } else {
              return false
          }
      }
  }
  return true
};