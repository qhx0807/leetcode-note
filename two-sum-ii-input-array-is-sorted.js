/**
 * 167.两数之和 II - 输入有序数组
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */
const twoSum = (numbers, target) => {
  /**
   * 暴力双循环
   * 超出时间限制！！
   */
  // for (let i = 0; i < numbers.length; i++) {
  //   for (let j = 0; j < numbers.length; j++) {
  //     if (numbers[i] + numbers[j] === target && i < j) {
  //       return [i + 1, j + 1]
  //     }
  //   }
  // }

  /**
   * 双指针
   */
  let i = 0
  let j = numbers.length - 1
  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1]
    } else if (numbers[i] + numbers[j] < target) {
      i++
    } else {
      j--
    }
  }
}

console.log(twoSum([1, 1, 3, 4], 2))
