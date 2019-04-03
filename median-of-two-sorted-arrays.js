/**
 * 4 寻找两个有序数组的中位数
 * 中位数：
 * 统计学名词，是指将统计总体当中的各个变量值按大小顺序排列起来，
 * 形成一个数列，处于变量数列中间位置的变量值就称为中位数，用Me表示。
 * 当变量值的项数N为奇数时，处于中间位置的变量值即为中位数；
 * 当N为偶数时，中位数则为处于中间位置的2个变量值的平均数。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const arr = [].concat(nums1, nums2).sort((a, b) => a - b)
  let mediannum
  let len = arr.length / 2
  if (arr.length % 2 === 0) {
    mediannum = (arr[len] + arr[len - 1]) / 2
  } else {
    mediannum = arr[Math.floor(len)]
  }
  return mediannum
}

console.log(findMedianSortedArrays([0, 1, 2, 3, 4, 5], [2, 3, 4]))
