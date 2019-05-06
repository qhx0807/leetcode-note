/**
 * 231.2的幂次方
 * 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 * https://leetcode-cn.com/problems/power-of-two/
 * @param {number} n
 * @returns {boolean}
 */
const isPowerOfTwo = (n) => {
  /**
   * & 按位与运算符
   * 2的幂次方在二进制下，只有1位是1，其余全是0。例如:8---00001000。
   * 2的幂具有如下性质： -8 & 8 = 8
   */
  return (n > 0) && (n & -n) === n
}

console.log(isPowerOfTwo(1))
