/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
const queen = (n) => {
  const result = []
  const fn = (chessBoard, deep) => {
    // console.log(chessBoard, deep)
    if (deep == chessBoard.length) return result.push([...chessBoard])
    for (let i = 0; i < chessBoard.length; i++) {
      chessBoard[deep] = i // deep 层放子
      // 验证当前位置是否可用 (当前层和之前层是否冲突)
      let isOk = true
      for (let j = 0; j < deep; j++) {
        if (
          chessBoard[deep] == chessBoard[j] ||
          Math.abs(deep - j) == Math.abs(chessBoard[deep] - chessBoard[j])
        ) {
          isOk = false
          break
        }
      }
      if (isOk) fn(chessBoard, deep + 1)
    }
  }
  fn(Array(n).fill(0), 0)
  return result
}
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  return queen(n).length
}

// @lc code=end
