/**
 * 287.寻找重复数
 * https://leetcode-cn.com/problems/find-the-duplicate-number/
 * 给定一个包含 n + 1 个整数的数组 nums，
 * 其数字都在 1 到 n 之间（包括 1 和 n），
 * 可知至少存在一个重复的整数。假设只有一个重复的整数，
 * 找出这个重复的数。
 * @todo 不能更改原数组（假设数组是只读的）
 * @param {number[]} nums
 * @returns {number}
 */
const findDuplicate = (nums) => {
  /**
   * 链表
   * 使用每个元素作为下标
   * 相同的元素指向的位置相同
   */
  let i = 0
  while (true) {
    let v = nums[i]
    if (v > 0) {
      nums[i] = -nums[i]
      i = v
    } else {
      return i
    }
  }

  /**
   * python
   * return (sum(nums)-sum(set(nums)))//(len(nums) - len(set(nums)))
   */
}
const arr = [1, 2, 3, 2]
console.log(findDuplicate(arr))
console.log(arr)
