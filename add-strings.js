/**
 * 415. 字符串相加
 * https://leetcode-cn.com/problems/add-strings/
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 * 类似题目 67. 二进制求和（https://leetcode-cn.com/problems/add-binary/）
 * @param {string} num1
 * @param {string} num2
 * @returns {string}
 */
const addStrings = (num1, num2) => {
  // 模拟进位
  let arr = []
  let carry = 0
  let len = num1.length > num2.length ? num1.length : num2.length
  while (num1.length < len) { num1 = '0' + num1 } // 0 对齐
  while (num2.length < len) { num2 = '0' + num2 }
  for (let i = len - 1; i >= 0; i--) {
    let sum = Number(num1[i]) + Number(num2[i]) + carry
    if (sum >= 10) {
      arr.push(sum % 10)
      carry = 1
    } else {
      carry = 0
      arr.push(sum)
    }
  }
  return carry === 0 ? arr.reverse().join('') : carry + arr.reverse().join('')
}

console.log(addStrings('121', '999'))

/**
 * 扩展
 * 多个字符串相加
 * @param {string[]} strs
 * @returns {string}
 */
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

console.log(addMutStrings(['121', '999', '8922', '78']))

/**
 *    0 1 2 1
 *    0 9 9 9
 *    8 9 2 2
 * +  0 0 7 8
 * ———————————
 *
 */
