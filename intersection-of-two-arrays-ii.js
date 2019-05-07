/**
 * 349.两个数组的交集 II
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
const intersect = (nums1, nums2) => {
  let arr = []
  nums1.forEach(v => {
    if (~nums2.indexOf(v)) {
      arr.push(v)
      nums2.splice(nums2.indexOf(v), 1)
    }
  })
  return arr
}

console.log(intersect([1, 2, 2, 3], [1, 2, 2]))
