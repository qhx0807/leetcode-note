/**
 * 283. 移动零
 * https://leetcode-cn.com/problems/move-zeroes/
 * @param {number[]} nums
 * @returns {void} Do not return anything, modify nums in-place instead.
 * @example
 * [0,1,0,3,12] => [1,3,12,0,0]
 */
const moveZeroes = (nums) => {
  /**
   * 快慢指针
   */
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      j++
    }
  }
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0
  }
}
let arr = [0, 1, 0, 3, 12]
moveZeroes(arr)
console.log(arr)
