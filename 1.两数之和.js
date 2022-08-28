/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

/**
 * 通过一次循环, 将数组转化为对象 {值:下标}
 * 通过 (target - 当前值) 得到期待的另一个值, 通过有无属性判断期待值是否存在
 */

var twoSum = function (nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(target - nums[i])) return [obj[target - nums[i]], i]
    obj[nums[i]] = i
  }
  return []
}

// es6代码简洁一点, 内存占用多一点
var twoSum = function (nums, target) {
  let obj = {}
  for ([index, value] of nums.entries()) {
    if (obj.hasOwnProperty(target - value)) return [obj[target - value], index]
    obj[value] = index
  }
  return []
}
// @lc code=end
