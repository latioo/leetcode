/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**

多次提交结果来看, 纯数字运算比转字符串内存上占优

 */
var isPalindrome = function (x) {
  if (x < 0) return false
  if (x == 0) return true
  if (x % 10 == 0) return false
  let temp = 0
  while (temp < x) {
    temp = temp * 10 + (x % 10)
    x = Math.floor(x / 10)
  }
  if (x == temp) return true
  return Math.floor(temp / 10) == x
}
// @lc code=end
