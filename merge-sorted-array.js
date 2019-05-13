/**
 * 88. 合并两个有序数组
 * https://leetcode-cn.com/problems/merge-sorted-array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @returns {void}
 */
const merge = (nums1, m, nums2, n) => {
  for (let i = 0; i < nums2.length; i++) {
    nums1[m + i] = nums2[i]
  }
  nums1.sort((a, b) => a - b)
}
let arr1 = [1, 2, 3, 0, 0, 0]
let m = 3
let arr2 = [2, 5, 6]
let n = 3
merge(arr1, m, arr2, n)
console.log(arr1)
