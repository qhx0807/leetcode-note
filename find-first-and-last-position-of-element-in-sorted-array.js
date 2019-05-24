/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {

  return [nums.indexOf(target), nums.lastIndexOf(target)]

  // TODO: 二分查找
}

console.log(searchRange([5, 7, 7, 8, 8, 9], 8))
