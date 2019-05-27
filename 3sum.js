/**
 * 15. 三数之和
 * https://leetcode-cn.com/problems/3sum/
 * 类似问题：1.两数之和(https://leetcode-cn.com/problems/two-sum/)
 * @param {number[]} nums
 * @returns {number[][]}
 */
const threeSum = (nums) => {
  let arr = []
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          arr.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }
  return arr
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))

// 优化
const threeSum1 = (nums) => {
  let arr = []
  let hash = {}
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (hash[nums[j]] !== undefined) {
        arr.push([nums[j]].concat(hash[nums[j]]))
        hash[nums[j]] = undefined
      } else {
        let mark = 0 - nums[i] - nums[j]
        hash[mark] = [nums[i], nums[j]]
      }
    }
  }
  return arr
}
console.log(threeSum1([-1, 0, 1, 2, -1, -4]))

var threeSum2 = function (nums) {
  let res = []
  let length = nums.length
  nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
  if (nums[0] <= 0 && nums[length - 1] >= 0) { // 优化1: 整个数组同符号，则无解
    for (let i = 0; i < length - 2;) {
      if (nums[i] > 0) break // 优化2: 最左值为正数则一定无解
      let first = i + 1
      let last = length - 1
      do {
        if (first >= last || nums[i] * nums[last] > 0) break // 两人选相遇，或者三人同符号，则退出
        let result = nums[i] + nums[first] + nums[last]
        if (result === 0) { // 如果可以组队
          res.push([nums[i], nums[first], nums[last]])
        }
        if (result <= 0) { // 实力太弱，把菜鸟那边右移一位
          while (first < last && nums[first] === nums[++first]) {} // 如果相等就跳过
        } else { // 实力太强，把大神那边右移一位
          while (first < last && nums[last] === nums[--last]) {}
        }
      } while (first < last)
      while (nums[i] === nums[++i]) {}
    }
  }
  return res
}
console.log(threeSum2([-1, 0, 1, 2, -1, -4]))
