/**
 * 28.实现strStr()
 * https://leetcode-cn.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 */
const strStr = (haystack, needle) => {
  /**
   * 实际上直接调用 indexOf() 方法即可
   * TODO:
   * - KMP算法
   */
  if (!needle) return 0 // 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
  return haystack.indexOf(needle)
}

console.log(strStr('hellow', 'll'))
