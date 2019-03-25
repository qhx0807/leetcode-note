/**
 * 移除元素
 * 须在原地修改输入数组
 * @param {number[]} nums
 * @param {number} val
 * @returns {number}
 * @example
 * nums = [3, 2, 2, 3], val = 3
 * // returns [2, 2]
 */
const removeElement = (nums, val) => {
  if (nums.length === 0) return 0
  /**
   * 1. 原始的方法
   */
  // let arr = []
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== val) {
  //     arr.push(nums[i])
  //   }
  // }
  // if (arr.length === 0) return 0
  // for (let j = 0; j < arr.length; j++) {
  //   nums[j] = arr[j]
  // }
  // return arr.length

  /**
   * 2. 方法改进
   * 要从数组尾部开始遍历，才能splice不影响数组
   */
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === val) nums.splice(i, 1)
  }
  return nums.length

  /**
   * 3. 双指针法
   * 一个快指针，一个慢指针
   * TODO: 双指针，快慢指针
   */
  // let i = 0
  // for (let j = 0; j < nums.length; j++) {
  //   if (nums[j] !== val) {
  //     nums[i] = nums[j]
  //     i++
  //   }
  // }
  // return i
}

console.log(removeElement([3, 2, 2, 3], 3))
