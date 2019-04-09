/**
 * 136 只出现一次的数字
 * https://leetcode-cn.com/problems/single-number/
 * TODO: 异或运算
 * 相同为 0， 2 ^ 2 = 0
 * 不同为真： 1 ^ 2 = 3
 * 0 ^ n = n
 * @param {number[]} nums
 * @returns {number}
 */
const singleNumber = (nums) => {
  let a = 0
  for (let i = 0; i < nums.length; i++) {
    a ^= nums[i]
  }
  return a
}

console.log(singleNumber([1, 2, 2]))
