/**
 * pid 指父辈 id，如果 pid 为 0，则指根元素。要求为每一项加上 level，表示该项在树里面所表示的层级。
 */
const data = [
  { id: 267, pid: 0, name: '测试父标签2' },
  { id: 266, pid: 264, name: '测试子标签1' },
  { id: 13104, pid: 265, name: 'gtfgg' },
  { id: 13102, pid: 268, name: '111' },
  { id: 13103, pid: 13102, name: '222' },
  { id: 13105, pid: 13104, name: 'gfdgfdg' },
  { id: 13107, pid: 13106, name: '2' },
  { id: 13108, pid: 13107, name: '3' },
  { id: 13109, pid: 13108, name: '4' },
  { id: 264, pid: 0, name: '测试父标签' },
  { id: 265, pid: 264, name: '测试父标签100' },
  { id: 268, pid: 267, name: '测试子标签21' },
  { id: 13106, pid: 0, name: '1' },
  { id: 270, pid: 0, name: '哈哈哈' },
];

/**
 * 运用了广度优先遍历
*/
const transform = list => {
  const pidMap = list.reduce((result, current) => {
    result[current.pid] = (result[current.pid] || []).concat(current);
    return result;
  }, {});
  let visite = [].concat(pidMap[0].map(item => ((item.level = 1), item)));
  while (visite.length) {
    const current = visite.shift();
    if (pidMap[current.id]) {
      visite = visite.concat(pidMap[current.id].map(item => ((item.level = current.level + 1), item)));
    }
  }
  console.log(list);
  return list;
};

