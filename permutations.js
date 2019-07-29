/**
 * 46. 全排列
 * https://leetcode-cn.com/problems/permutations/
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * @param {number[]} nums
 * @returns {number[][]}
 * TODO:
 * 全排列
 * n个元素全排列的个数 = n!
 * 回溯算法：
 * 回溯算法的基本思想是：从一条路往前走，能进则进，不能进则退回来，换一条路再试。
 * https://pic.leetcode-cn.com/277b3fa8ceb88f2d7449c8d17cb5e82adaa8f8eacb9da1fd906a95753557cda0-46-1.png
 */
const permute = function (nums) {
  let res = []

  const foo = (arr, _nums) => {
    if (_nums.length === 0) {
      res.push(arr)
      return
    }
    for (let i = 0; i < _nums.length; i++) {
      foo([...arr, _nums[i]], _nums.slice(0, i).concat(_nums.slice(i + 1)))
    }
  }
  foo([], nums)
  return res
}

console.log(permute([1, 2, 3]))
