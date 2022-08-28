/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * 把矩阵想象成多个叠加的正方形, 就像 '回' 字
 * 每次转动一层,
 */
function rotate(matrix) {
  // 旋转 Math.floor(n/2) 次 (层数)
  for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
    // m为当前层单条边的长度
    let m = matrix.length - i * 2
    // 每次移动四个元素, 需重复 m-1 次
    for (let j = 0; j < m - 1; j++) {
      let a, b, c, d
      a = matrix[i][i + j]
      b = matrix[i + j][m - 1 + i]
      c = matrix[m - 1 + i][m - 1 + i - j]
      d = matrix[m - 1 + i - j][i]
      matrix[i][i + j] = d
      matrix[i + j][m - 1 + i] = a
      matrix[m - 1 + i][m - 1 + i - j] = b
      matrix[m - 1 + i - j][i] = c
    }
  }
}

// @lc code=end
