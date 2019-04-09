/**
 * 125 验证回文串
 * https://leetcode-cn.com/problems/valid-palindrome
 * @param {string} s
 * @returns {boolean}
 */
const isPalindrome = (s) => {
  // 先去掉字符串中的空格 符号 正则：/[^a-z\d]/ig
  const str = s.replace(/[^a-z\d]/ig, '').toLowerCase()
  return str === str.split('').reverse().join('')
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
