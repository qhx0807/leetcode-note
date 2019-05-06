/**
 * 217.存在重复元素
 * https://leetcode-cn.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @returns {boolean}
 * @example
 * 输入：[1,2,3,1]， 输出：true
 */
const containsDuplicate = nums => {
  /**
   * Set()
   */
  // if (nums.length <= 1) return false
  // return !([...new Set(nums)].length === nums.length)

  /**
   * 排序
   */
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true
    }
  }
  return false
}

console.log(containsDuplicate([3, 1, 2, 4]))
