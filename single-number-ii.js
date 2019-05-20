/**
 * 137. 只出现一次的数字 II
 * https://leetcode-cn.com/problems/single-number-ii/
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。
 * @param {number[]} nums
 * @returns {number}
 */
const singleNumber = (nums) => {
  // 将数组用set去重后求和的三倍减去原有数组除以2即为结果
  // let m = nums.reduce((a, b) => a + b)
  // let n = [...new Set(nums)].reduce((a, b) => a + b) * 3
  // return (m - n) / 2

  // 位运算
  let a = 0
  let b = 0
  for (let num of nums) {
    b = ~a & (b ^ num)
    a = ~b & (a ^ num)
  }
  return b
}

console.log(singleNumber([2, 2, 3, 2]))
