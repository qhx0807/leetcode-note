
/**
 * 219 存在重复元素 II
 * https://leetcode-cn.com/problems/contains-duplicate-ii/
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
  /**
   * 1 暴力循环
   * 双指针 i i+1
   */
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        if (j - i <= k) {
          return true
        }
      }
    }
  }
  return false

  /**
   * 2 使用some
   * FIXME: 超出时间限制!!
   */
  // for (let i = 0; i < nums.length; i++) {
  //   let bool = nums.some((el, index) => {
  //     return el === nums[i] && index !== i && Math.abs(index - i) <= k
  //   })
  //   if (bool) return true
  // }
  // return false
}
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 3))
