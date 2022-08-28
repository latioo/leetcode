/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**

记录子串起点和最大长度即可

for循环查找子串只需要记录起点下标, 空间最优
时间复杂度(最好) O(n)
时间复杂度(最坏) O(n^2)
空间复杂度 O(1)


Map (对象) 查找是空间换时间的方式, 不重复子串越长时间优势越明显
时间复杂度 O(n)
空间复杂度 O(n)
网站提供的测试用例没有很长的不重复子串, 自行测试中, 不重复子串够长时, Map查找时间上优势明显

 */
var lengthOfLongestSubstring1 = function (s) {
  RegExp.escape = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  }
  let max = 0,
    str = ''
  for (char of s) {
    str = str.replace(RegExp('.*' + RegExp.escape(char)), '') + char
    if (str.length > max) max = str.length
  }
  return max
}

var lengthOfLongestSubstring2 = function (str) {
  if (str.length <= 1) return str.length
  let start = 0,
    len = 0
  for (let i = 1; i < str.length; i++) {
    for (let j = start; j < i; j++) {
      if (str[j] == str[i]) {
        start = j + 1
        break
      }
    }
    let tempLen = i - start + 1
    if (tempLen > len) len = tempLen
  }
  return len
}

var lengthOfLongestSubstring3 = function (str) {
  if (str.length <= 1) return str.length
  let start = 0,
    len = 0,
    obj = {}
  for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i]) && obj[str[i]] >= start) {
      start = obj[str[i]] + 1
    }
    obj[str[i]] = i
    let tempLen = i - start + 1
    if (tempLen > len) len = tempLen
  }
  return len
}

var lengthOfLongestSubstring4 = function (str) {
  if (str.length <= 1) return str.length
  let start = 0,
    len = 0,
    obj = {}
  for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i]) && obj[str[i]] >= start) {
      start = obj[str[i]] + 1
    }
    obj[str[i]] = i
    let tempLen = i - start + 1
    if (tempLen > len) len = tempLen
    if (len >= str.length - start) return len
  }
  return len
}

var lengthOfLongestSubstring = lengthOfLongestSubstring2
// @lc code=end
