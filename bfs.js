// var sortedArrayToBST = function(nums) {
//   function sort(nums, parent, side) {
//     const middleInx = Math.floor(nums.length / 2);
//     const node = new TreeNode(nums[middleInx]);
//     if (parent && side) {
//       parent[side] = node;
//     }
//     if (middleInx > 0) {
//       sort(nums.slice(0, middleInx), node, 'left');
//     }
//     if (nums.length > middleInx + 1) {
//       sort(nums.slice(middleInx + 1, nums.length), node, 'right');
//     }
//     return node;
//   }
//   return sort(nums);
// };

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// // console.log(sortedArrayToBST([-10,-3,0,5,9]))
// const bfs = tree => {
//   const visit = [];
//   const visited = [];
//   visit.push(tree);
//   while (visit.length) {
//     const node = visit.shift();
//     if(node) {
//       visited.push(node.val);
//       visit.push(node.left);
//       visit.push(node.right);
//     } else {
//       visited.push(null);
//     }
//   }
//   return visited
// };

// const result = bfs({
//   val: 0,
//   right: {
//     val: 9,
//     right: null,
//     left: { val: 5, right: null, left: null },
//   },
//   left: {
//     val: -3,
//     right: null,
//     left: { val: -10, right: null, left: null },
//   },
// });

// console.log(result)