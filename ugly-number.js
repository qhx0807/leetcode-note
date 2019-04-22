
/**
 * 263.丑数
 * 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
 * 例如6、8都是丑数，但7、14不是，因为它们包含质因子7。
 * 习惯上我们把1当做是第一个丑数。
 * https://leetcode-cn.com/problems/ugly-number/
 * @param {number} num
 * @returns {boolean}
 */
const isUgly = (num) => {
  if (num === 0) return false
  while (num % 2 === 0) {
    num = num / 2
  }
  while (num % 3 === 0) {
    num = num / 3
  }
  while (num % 5 === 0) {
    num = num / 5
  }
  return num === 1
}

console.log(isUgly(33))
