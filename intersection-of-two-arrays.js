/**
 * 349.两个数组的交集
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
const intersection = (nums1, nums2) => {
  let arr = []
  /**
   * 双循环
   */
  // for (let i = 0; i < nums1.length; i++) {
  //   for (let j = 0; j < nums2.length; j++) {
  //     if (nums1[i] === nums2[j]) {
  //       arr.push(nums1[i])
  //     }
  //   }
  // }
  // return [...new Set(arr)]

  /**
   * includes()
   */
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) && !arr.includes(nums1[i])) {
      arr.push(nums1[i])
    }
  }
  return arr
}
let arr1 = [4, 9, 5]
let arr2 = [9, 4, 9, 8, 4]
console.log(intersection(arr1, arr2))
