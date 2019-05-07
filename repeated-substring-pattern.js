/**
 * 459.重复的子字符串
 * https://leetcode-cn.com/problems/repeated-substring-pattern/
 * @param {string} s
 * @returns {boolean}
 * @example
 * "adab" => true; "aba" => false
 */
const repeatedSubstringPattern = (s) => {
  // 正则
  // + 匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。
  // $ 匹配输入字符串结尾的位置。如果设置了 RegExp 对象的 Multiline 属性，$ 还会与 \n 或 \r 之前的位置匹配。
  return /^(\w+)\1+$/.test(s)
}

console.log(repeatedSubstringPattern('abab'))
