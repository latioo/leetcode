/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let rst = [[1]]
  for (let i = 2; i <= numRows; i++) {
    const last = rst[rst.length - 1]
    let temp = [1] // 第一列固定1
    for (let j = 1; j < i / 2; j++) {
      // 左右对称
      temp[j] = last[j - 1] + last[j]
    }
    for (let j = (i / 2) >> 0; j < i; j++) {
      temp[j] = temp[i - j - 1]
    }
    rst.push(temp)
  }
  return rst
}
// @lc code=end
