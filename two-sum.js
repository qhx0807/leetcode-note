/**
 * 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let rest = target - nums[i]
    if (nums.includes(rest) && nums.indexOf(rest) !== i) {
      return [i, nums.indexOf(rest)]
    }
  }
}

export default twoSum
