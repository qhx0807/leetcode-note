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

// https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%90%9C%E7%B4%A2%E7%AE%97%E6%B3%95
var arr = [1, 3, 5, 7, 9, 10, 11, 12, 14, 15, 19, 20]
function binarySearch (arr, val) {
  var low = 0
  var high = arr.length - 1
  while (low <= high) {
    var mid = parseInt((low + high) / 2)
    if (val === arr[mid]) {
      return mid
    } else if (val > arr[mid]) {
      low = mid + 1
    } else if (val < arr[mid]) {
      high = mid - 1
    }
  }
  return -1
}
console.log(binarySearch(arr, 11))
