/**
 * 删除排序数组中的重复项
 * FIXME: 必须在原地修改输入数组!
 * @param {number[]} nums
 * @returns {number}
 * @example
 * // returns 5
 * removeDuplicates([0,0,1,1,1,2,2,3,3,4])
 * TODO:
 * -[x] 数组去重
 */

const removeDuplicates = (nums) => {
  /**
   * 输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
   * nums[i] = 123 是生效的。
   */
  if (nums.length === 0) return 0

  /**
   * 推荐的 双指针法
   * 内存消耗: 36.8 MB
   * 执行用时: 112 ms
   * let i = 0
   * for (let j = 0; j < nums.length; j++) {
   *  if (nums[j] != nums[i]) {
   *    i++
   *    nums[i] = nums[j]
   *  }
   * }
   * return i + 1
   */

  /**
   * 先去重再复制
   * 内存消耗: 37.4 MB,
   * 执行用时: 124 ms
   */
  const arr = [...new Set(nums)]
  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i]
  }
  return arr.length
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
