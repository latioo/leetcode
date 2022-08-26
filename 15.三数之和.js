/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
  1.第一直觉先按升序排列，然后做3层循环，从左到右依次取数
  2.如果第一个数>0，和不可能=0  -> 优化点1

  因为题目要求不能有重复组合，所以：

  3.如果第一层循环的数nums[n]等于nums[n-1], 不可能有新组合 -> 去重点1
  4.类似第3点，第2，3层循环也需要“去重”，只不过不能用简单的 n-1，而是要记录上一次匹配的值
  */

// 3层循环
var threeSum = function (nums) {
  nums.sort((a, b) => a - b) // 升序
  let rst = []
  for (let i = 0; i < nums.length - 2; i++) {
    // 优化点1
    if (nums[i] > 0) break
    // 去重点1
    if (nums[i] == nums[i - 1]) continue
    let lastJ
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[j] == lastJ) continue
      let lastK
      for (let k = nums.length - 1; k > j; k--) {
        if (nums[k] == lastK) continue
        if (nums[i] + nums[j] + nums[k] == 0) {
          lastJ = nums[j]
          lastK = nums[k]
          rst.push([nums[i], nums[j], nums[k]])
          break
        }
      }
    }
  }
  return rst
}

/**
 *  思考一下，第三层循环 k 合格时，回到第二层，第二层循环取下一个值（这个值比上次大了），
 *  此时第三层根本不必从最后一个找起，合格的值必定在 k 左侧
 *
 *  再进一步思考，第二三层循环其实可以合并成一次循环，一次最左和最右的双向奔赴
 */

// 2层循环
var threeSum = function (nums) {
  nums.sort((a, b) => a - b) // 升序
  let rst = []
  for (let i = 0; i < nums.length - 2; i++) {
    // 优化点1
    if (nums[i] > 0) break
    // 去重点1
    if (nums[i] === nums[i - 1]) continue
    let j = i + 1
    let k = nums.length - 1
    let lastJ, lastK
    while (j < k) {
      if (lastJ === nums[j]) j++
      else if (lastK === nums[k]) k--
      else {
        const sum = nums[i] + nums[j] + nums[k]
        if (sum === 0) {
          rst.push([nums[i], nums[j], nums[k]])
          lastJ = nums[j]
          lastK = nums[k]
          j++
          k--
        } else if (sum > 0) k--
        else j++
      }
    }
  }
  return rst
}
/**
 [-1,0,1,2,-1,-4,2,2,2,2]
 */

// @lc code=end
