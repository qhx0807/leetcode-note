/**
 * 229. 求众数 II
 * https://leetcode-cn.com/problems/majority-element-ii/
 * @param {number[]} nums
 * @returns {number[]}
 * 给定一个大小为 n 的数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素
 */
const majorityElement = (nums) => {
  let o = {}
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    // FIXME: o.hasOwnProperty(nums[i])
    if (o[nums[i]]) {
      o[nums[i]]++
    } else {
      o[nums[i]] = 1
    }
  }
  for (let x in o) {
    if (o[x] > (nums.length / 3)) {
      arr.push(x)
    }
  }
  return arr
}

console.log(majorityElement([1, 1, 1, 2, 2, 3, 3, 3]))

// 执行用时 : 92 ms, 在Majority Element II的JavaScript提交中击败了95.38% 的用户
// 内存消耗 : 36.5 MB, 在Majority Element II的JavaScript提交中击败了78.95% 的用户
