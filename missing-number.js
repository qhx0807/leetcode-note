/**
 * 268.缺失数字
 * 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
 * https://leetcode-cn.com/problems/missing-number/
 * @param {number[]} nums
 * @returns {number}
 */
const missingNumber = (nums) => {
  if (nums.length === 0) return null
  /**
   * 求和
   */
  // let sum1 = nums.reduce((pre, cur) => pre + cur)
  // let sum2 = 0
  // for (let i = 0; i < nums.length + 1; i++) {
  //   sum2 += i
  // }
  // return sum2 - sum1

  /**
   * 边加边减
   */
  let sum = 0
  for (let i = 1; i < nums.length + 1; i++) {
    sum = sum + i - nums[i - 1]
  }
  return sum

  /**
   * TODO: 异或
   */
  // let sum = nums.length
  // for (let i = 0; i < nums.length; i++) {
  //   sum ^= nums[i]
  //   sum ^= i
  // }
  // return sum
}

console.log(missingNumber([3, 0, 1]))
