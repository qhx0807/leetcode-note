
/**
 * 169 求众数
 * 定义：是一组数据中出现次数最多的数值，叫众数
 * 有时众数在一组数中有好几个。用 M 表示。
 * 理性理解：简单的说，就是一组数据中占比例最多的那个数。
 * @link {https://leetcode-cn.com/problems/majority-element/}
 * @param {number[]} nums
 * @returns {number}
 */
const majorityElement = (nums) => {
  /**
   * 方法1
   * 从第一个数开始count=1，
   * 遇到相同的就加1，
   * 遇到不同的就减1，
   * 减到0就重新换个数开始计数
   * 最后返回item
   */
  // let count = 1
  // let item = nums[0]
  // for (let i = 1; i < nums.length; i++) {
  //   if (item === nums[i]) {
  //     count++
  //   } else {
  //     count--
  //     if (count === 0) {
  //       item = nums[i + 1]
  //     }
  //   }
  // }
  // return item

  /**
   * 方法2
   * 将数组按大小排序
   */
  nums.sort((a, b) => a - b)
  console.log(nums)
  return nums[Math.floor(nums.length / 2)]
}

console.log(majorityElement([1, 2, 3, 2]))
