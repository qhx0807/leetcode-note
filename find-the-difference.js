/**
 * 389.找不同
 * https://leetcode-cn.com/problems/find-the-difference/
 * @param {string} s
 * @param {string} t
 * @returns {character}
 * @example
 * s = "abcd", t = "abcde" 输出：e
 */
const findTheDifference = (s, t) => {
  /**
   * 查找替换
   */
  let i = 0
  let len = s.length
  while (i < len) {
    t = t.replace(s.charAt(i), '')
    i++
  }
  return t
}

console.log(findTheDifference('abcd', 'abcde'))
