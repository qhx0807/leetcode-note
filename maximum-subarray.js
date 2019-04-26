/**
 * 53.最大子序和
 * https://leetcode-cn.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @returns {number}
 */
const maxSubArray = (nums) => {
  /**
   * 不会以两个负数开始
   */
  // let sum = nums[0]
  // let temp = nums[0]
  // for (let i = 1; i < nums.length; i++) {
  //   if (temp < 0) {
  //     temp = nums[i]
  //   } else {
  //     temp += nums[i]
  //   }
  //   sum = temp > sum ? temp : sum
  // }
  // return sum

  /**
   * 2
   */
  for (let i = 0; i < nums.length - 1; i++) {
    nums[i + 1] = nums[i + 1] + Math.max(0, nums[i])
    console.log(nums[i + 1])
  }
  return Math.max(...nums)
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(arr))
