/**
 * 1. 两数之和
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let rest = target - nums[i]
    if (nums.includes(rest) && nums.indexOf(rest) !== i) {
      return [i, nums.indexOf(rest)]
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9))

// 哈希表
const twoSum1 = (nums, target) => {
  let res = {}
  for (let i = 0; i < nums.length; i++) {
    res[target - nums[i]] = nums[i]
  }
  for (let j = 0; j < nums.length; j++) {
    if (res[nums[j]] !== undefined) {
      return [nums[j], res[nums[j]]]
    }
  }
}

console.log(twoSum1([2, 7, 11, 15], 9))

// 优化
const twoSum2 = (nums, target) => {
  let res = {}
  for (let i = 0; i < nums.length; i++) {
    if (res[nums[i]] !== undefined) {
      return [nums[i], res[nums[i]]]
    } else {
      res[target - nums[i]] = nums[i]
    }
  }
}

console.log(twoSum2([2, 7, 11, 15], 9))
