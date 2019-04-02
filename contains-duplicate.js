/**
 * 217 存在重复元素
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
const containsDuplicate = nums => {
  if (nums.length <= 1) return false
  const arr = [...new Set(nums)]
  console.log(arr)
  return !(arr.length === nums.length)
}

console.log(containsDuplicate([3, 1]))
