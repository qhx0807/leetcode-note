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
