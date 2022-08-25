/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const obj = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  if (!s || s.length < 1) return false

  let arr = []
  for (let i of s) {
    if (arr.length <= 0) {
      if (obj[i]) return false
      arr.push(i)
    } else {
      if (arr[arr.length - 1] == obj[i]) arr.pop()
      else arr.push(i)
    }
  }
  return arr.length == 0
}
// @lc code=end
