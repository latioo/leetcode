/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**

其实还是穷举, 只不过是逐层放子, 出现冲突时就不再继续往下了

 */
const solveNQueens = (n) => {
  const result = []
  const queen = (chessBoard, deep) => {
    // console.log(chessBoard, deep)
    if (deep == chessBoard.length) return result.push([...chessBoard])
    for (let i = 0; i < chessBoard.length; i++) {
      chessBoard[deep] = i // deep 层放子
      // 验证当前位置是否可用 (当前层和之前层是否冲突)
      let isOk = true
      for (let j = 0; j < deep; j++) {
        if (chessBoard[deep] == chessBoard[j] || Math.abs(deep - j) == Math.abs(chessBoard[deep] - chessBoard[j])) {
          isOk = false
          break
        }
      }
      if (isOk) queen(chessBoard, deep + 1)
    }
  }
  queen(Array(n).fill(0), 0)
  return result.map((x) => x.map((m) => 'Q'.padStart(m + 1, '.').padEnd(n, '.')))
}
// @lc code=end
