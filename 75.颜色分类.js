/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let cur = 0
  let count = nums.length
  while (cur < count) {
    if (nums[cur] == 0) nums.unshift(nums.splice(cur, 1)[0]) && cur++
    else if (nums[cur] == 1) cur++
    else if (nums[cur] == 2) nums.push(nums.splice(cur, 1)[0]) && count--
  }
}
// @lc code=end
