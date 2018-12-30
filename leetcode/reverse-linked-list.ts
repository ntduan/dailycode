/**
 * https://leetcode.com/problems/reverse-linked-list/
 */

/**
 * 迭代
 */
// var reverseList = function(head) {
//   let prev;
//   let curr = head
//   while (curr != null) {
//     let nextTemp = curr.next
//     curr.next = prev
//     prev = curr
//     curr = nextTemp
//   }
//   return prev
// };

/**
 * 递归
*/

var reverseList = function(head) {
  if(head === null || head.next === null) return head
  let p = reverseList(head.next)
};