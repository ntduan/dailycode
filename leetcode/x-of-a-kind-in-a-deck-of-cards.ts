/**
 * https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/description/
 */

var hasGroupsSizeX = function(deck) {
  const map = {};
  for (let i = 0; i < deck.length; i++) {
    map[deck[i]] = (map[deck[i]] || 0) + 1;
  }
  let min = Number.MAX_SAFE_INTEGER;
  let values = [];
  for (const key of Object.keys(map)) {
    min = Math.min(min, map[key]);
    values.push(key);
  }
  if (min < 2) return false;
  for (let i = 2; i <= min; i++) {
    let j;
    for (j = 0; j < values.length; j++) {
      if (values[j] % i !== 0) break;
    }
    if (j === values.length) return true;
  }

  return false;
};
