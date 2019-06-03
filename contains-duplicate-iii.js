/**
 * 220. 存在重复元素 III
 * https://leetcode-cn.com/problems/contains-duplicate-iii/
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @returns {boolean}
 */
const containsNearbyAlmostDuplicate = (nums, k, t) => {
  // 暴力双循环都行！...
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        if (j - i <= k) {
          return true
        }
      }
    }
  }
  return false
}

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0))
