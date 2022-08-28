/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const result = new ListNode()
  let cur = result
  let carryflag = false
  while (l1 || l2) {
    let count = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carryflag
    carryflag = count >= 10
    cur.val = carryflag ? count % 10 : count
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
    if (l1 || l2 || carryflag) {
      cur.next = new ListNode()
      cur = cur.next
    }
  }
  if (carryflag) cur.val = 1
  return result
}
// @lc code=end
