/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * 思路：每按一个数字，就把所有组合枚举出来，做3层循环
 *
 * 第一层是数字串
 * 第二三层循环是新字母们和原有结果的笛卡儿积
 */

var letterCombinations = function (digits) {
  if (!digits.length) return []
  const obj = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  let start = []
  let end = ['']
  for (let num of digits) {
    const str = obj[num]
    start = end
    end = []
    for (let s of str) {
      for (let item of start) {
        end.push(item + s)
      }
    }
  }
  return end
}
// @lc code=end
