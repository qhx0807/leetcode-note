/**
 * 67. 二进制求和
 * https://leetcode-cn.com/problems/add-binary/
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
const addBinary = (a, b) => {
  // js 二进制转10进制
  // 不能这样做，会溢出
  // return (parseInt(a, 2) + parseInt(b, 2)).toString(2)

  // 模拟进位
  let arr = []
  let carry = 0
  let len = a.length > b.length ? a.length : b.length
  while (a.length < len) { a = '0' + a } // 把 a b 弄一样长，方便做加法
  while (b.length < len) { b = '0' + b }
  for (let i = len - 1; i >= 0; i--) {
    let sum = Number(a[i]) + Number(b[i]) + carry
    if (sum >= 2) {
      arr.push(sum % 2)
      carry = 1
    } else {
      carry = 0
      arr.push(sum)
    }
  }
  return carry === 0 ? arr.reverse().join('') : carry + arr.reverse().join('')
}

console.log(addBinary('11', '1'))

/**
 *   1 0 1 0
 * + 1 0 1 1
 * ___________
 * 1 0 1 0 1
 *
 *     2 0 2 1
 * ____________
 *   1 0 1 0 1
 */

// 执行用时 : 88 ms, 在Add Binary的JavaScript提交中击败了97.85% 的用户
// 内存消耗 : 35.4 MB, 在Add Binary的JavaScript提交中击败了81.44% 的用户
