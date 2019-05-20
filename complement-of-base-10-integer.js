/**
 * 1009. 十进制整数的反码
 * https://leetcode-cn.com/problems/complement-of-base-10-integer/
 * @param {number} N
 * @returns {number}
 */
const bitwiseComplement = (N) => {
  // 6是110 那么他的反码是他与111异或得到的001。所以找到比N大的每位都为1的数，与N进行异或。
  let num = 1
  while (num < N) {
    num = (num << 1) + 1
  }
  return N ^ num
}
console.log(bitwiseComplement(0))
// 执行用时 : 112 ms, 在Complement of Base 10 Integer的JavaScript提交中击败了36.09% 的用户
// 内存消耗 : 33.6 MB, 在Complement of Base 10 Integer的JavaScript提交中击败了56.99% 的用户

const bitwiseComplement1 = (N) => {
  if (N === 0) return 1
  let i = 1
  while (i <= N) {
    i *= 2
  }
  return i - N - 1
}
console.log(bitwiseComplement1(5))
// 执行用时 : 84 ms, 在Complement of Base 10 Integer的JavaScript提交中击败了100.00% 的用户
// 内存消耗 : 34.2 MB, 在Complement of Base 10 Integer的JavaScript提交中击败了5.38% 的用户
