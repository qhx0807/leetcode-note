/**
 * 78. 子集
 * https://leetcode-cn.com/problems/subsets/
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * @param {number[]} nums
 * @returns {number[][]}
 */
const subsets = (nums) => {
  let arr = []
  for (let i = 0; i < (1 << nums.length); i++) {
    let tmp = []
    for (let j = 0; j < nums.length; j++) {
      if ((i & (1 << j)) !== 0) {
        tmp.push(nums[j])
      }
    }
    arr.push(tmp)
  }
  return arr
}
console.log(subsets([1, 2, 3]))
// 执行用时 : 84 ms, 在Subsets的JavaScript提交中击败了97.58% 的用户
// 内存消耗 : 35 MB, 在Subsets的JavaScript提交中击败了53.90% 的用户
/**
 * 二进制枚举子集
 * 与运算(&)：两者都为 1 时，结果即为 1，否则为 0
 * 或运算(|)：两者都为 0 时，结果即为 0，否则为 1
 * 异或运算(^)：是两者同为 0 或 1 时，结果即为 0，否则为 1
 * A << B，表示把A转化为二进制后向左移动B位（在末尾添加B个0）。
 * A >> B，表示把A转化为二进制后向右移动B位（删除末尾的B位）。
 * 2 << 2，2转化为二进制则是10，那么就是10左移动2位，就变成了二进制1000，转化为十进制是8，所以2 << 2 = 8
 */

// 2的4次方
console.log(1 << 4)
console.log(Math.pow(2, 4))

/**
 * 子集
 * @param {number[]} nums
 * @returns {number[][]}
 */
/**
 * 二进制
 */
const subsets1 = (nums) => {
  // 子集数量 max
  // 数组长度 len
  const len = nums.length
  const max = 1 << len
  let arr = []
  for (let i = 0; i < max; i++) {
    let b = i.toString(2)
    while (b.length < len) {
      b = '0' + b
    }
    b = b.split('')
    let c = []
    for (let j = 0; j < b.length; j++) {
      if (b[j] === '1') { c.push(nums[j]) }
    }
    arr.push(c)
  }
  return arr
}
// 执行用时 : 88 ms, 在Subsets的JavaScript提交中击败了97.28% 的用户
// 内存消耗 : 35.5 MB, 在Subsets的JavaScript提交中击败了24.12% 的用户
console.log(subsets1([0]))
// 0 0 0
// 0 0 1
// 0 1 0
// 0 1 1
// 1 0 0
// 1 0 1
// 1 1 0
// 1 1 1
