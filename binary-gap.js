/**
 * 868. 二进制间距
 * https://leetcode-cn.com/problems/binary-gap/
 * @param {number} N
 * @returns {number}
 */
const binaryGap = (N) => {
  let b = N.toString(2)
  let arr = []
  let result = 0
  for (let i = 0; i < b.length; i++) {
    if (b[i] === '1') { arr.push(i) }
  }
  if (arr.length < 2) return 0
  // 取数组相邻值之间的最大差值
  for (let i = 0; i < arr.length - 1; i++) {
    result = Math.max(result, arr[i + 1] - arr[i])
  }
  return result
}

console.log(binaryGap(8))

// 执行用时 : 92 ms, 在Binary Gap的JavaScript提交中击败了98.39% 的用户
// 内存消耗 : 34.2 MB, 在Binary Gap的JavaScript提交中击败了8.70% 的用户
