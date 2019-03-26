/**
 * 35 搜索插入位置
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
const searchInsert = (nums, target) => {
  /**
   * FIXME:
   */
  // if (~nums.indexOf(target)) {
  //   return nums.indexOf(target)
  // }
  // nums.push(target)
  // nums.sort((a, b) => a - b)
  // return nums.indexOf(target)

  /**
   * better
   * 已排序的数组 返回插入位置
   * nums[i] >= target 时插入
   */
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i
  }
  return nums.length
}

console.log(searchInsert([1, 3, 5, 6], 5))
