/**
 * 58 最后一个单词的长度
 * trim() 方法会从一个字符串的两端删除空白字符。
 * 在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等)
 * 以及所有行终止符字符（如 LF，CR）
 * @param {string} s
 * @returns {number}
 */
const lengthOfLastWord = (s) => {
  if (!s) return 0
  // return s.trim().split(' ').pop().length

  /**
   * 方法2:
   * 从后面开始遍历 当 charAt(i) === ' '时
   */
  let str = s.trim()
  let count = 0
  for (let i = str.length - 1; i >= 0; i--, count++) {
    if (str.charAt(i) === ' ') return count
  }
  return count
}

console.log(lengthOfLastWord(' aaa'))
