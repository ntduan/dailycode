/**
 * https://leetcode.com/problems/unique-morse-code-words/description/
 */

/**
 * hash 表
*/
const uniqueMorseRepresentations = function(words) {
  const table = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const map = {};
  for (let i = 0; i < words.length; i++) {
    const transform = words[i]
      .split('')
      .map(s => table[letters.indexOf(s)])
      .join('');
    map[transform] = true;
  }
  return Object.keys(map).length;
};
