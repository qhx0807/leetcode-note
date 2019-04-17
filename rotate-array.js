/**
 * 189.旋转数组
 * https://leetcode-cn.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @returns {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  let i = 0
  while (i < k) {
    nums.unshift(nums.pop())
    i++
  }
  return nums
}
let arr = [1, 2, 3, 4]
rotate(arr, 2)
console.log(arr)
