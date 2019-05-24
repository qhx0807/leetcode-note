/**
 * 43. 字符串相乘
 * https://leetcode-cn.com/problems/multiply-strings/
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 * 415.字符串相加(https://leetcode-cn.com/problems/add-strings/)
 * 多个字符串相加
 * @param {string} num1
 * @param {string} num2
 * @returns {string}
 */
const multiply = (num1, num2) => {
  if (num1 === '0' || num2 === '0') return '0'
  let arr = []
  for (let i = num2.length - 1; i >= 0; i--) {
    let item = []
    let carry = 0
    for (let j = num1.length - 1; j >= 0; j--) {
      let sum = Number(num1[j] * num2[i] + carry)
      if (sum >= 10) {
        carry = Math.floor(sum / 10)
        item.push(sum % 10)
      } else {
        carry = 0
        item.push(sum)
      }
    }
    if (carry > 0) item.push(carry)
    item.reverse()
    for (let k = i; k < num2.length - 1; k++) {
      item.push(0)
    }
    arr.push(item.join(''))
  }
  console.log(arr)
  return addMutStrings(arr)
}

const addMutStrings = (strs) => {
  let arr = []
  let carry = 0
  let len = strs.reduce((prev, cur) => prev.length > cur.length ? prev : cur).length
  for (let i = 0; i < strs.length; i++) {
    while (strs[i].length < len) {
      strs[i] = '0' + strs[i]
    }
  }
  for (let j = len - 1; j >= 0; j--) {
    let sum = carry
    for (let i = 0; i < strs.length; i++) {
      sum += Number(strs[i][j])
    }
    if (sum >= 10) {
      arr.push(sum % 10)
      carry = Math.floor(sum / 10)
    } else {
      arr.push(sum)
      carry = 0
    }
  }
  return carry === 0 ? arr.reverse().join('') : carry + arr.reverse().join('')
}

console.log(multiply('9', '9'))

// FIXME:
// 执行用时 : 252 ms, 在Multiply Strings的JavaScript提交中击败了16.67% 的用户
// 内存消耗 : 41.3 MB, 在Multiply Strings的JavaScript提交中击败了13.45% 的用户
/**
 *      1 2 3
 *   x  4 5 6
 * _____________
 *      7 3 8
 *    6 1 5
 *  4 9 2
 * _____________
 *  5 6 0 8 8
 */
