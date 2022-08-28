/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**

每次跳跃使得下次能跳的最远

 */
const jump = (nums) => {
  let step = 0 // 当前步数
  let position = 0 // 当前位置(下标)
  while (position < nums.length - 1) {
    step++ //
    if (position + nums[position] >= nums.length - 1) break // 当前位置可到达最远处, 直接结束
    let longestDistance = 0 // 下次能跳的最远距离
    let tempPosition = 0 // (下次能跳的最远距离) 对应的下标
    // 寻找下一跳的下标
    for (let i = 1; i <= nums[position] && i < nums.length; i++) {
      const distance = nums[position + i] + i
      if (distance > longestDistance || distance >= nums.length - 1) {
        tempPosition = i
        longestDistance = distance
      }
    }
    position += tempPosition
  }
  // console.log({ step, position })
  return step
}
// @lc code=end
