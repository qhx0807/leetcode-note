/**
 * 有效的括号
 * @param {string} s
 * @returns {boolean}
 * @example
 * 输入: "()[]{}"
 * 输出: true
 */
const isValid = (s) => {
  let str = ''
  while (s.length > 0) {
    str = s
    s = s.replace('{}', '').replace('[]', '').replace('()', '')
    if (s === str) return false
  }
  return s === ''
}
console.log(isValid('()[]{}'))
