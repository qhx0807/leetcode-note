/**
 * 205.同构字符串
 * https://leetcode-cn.com/problems/isomorphic-strings/
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 * @example
 * 输入： s = "egg", t = "add"  输出 true
 */
const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false
  let i = 0
  while (i < s.length) {
    if (s.indexOf(s.charAt(i)) !== t.indexOf(t.charAt(i))) {
      return false
    }
    i++
  }
  return true
}

console.log(isIsomorphic('egg', 'add'))

/**
 * 执行用时 : 96 ms, 在Isomorphic Strings的JavaScript提交中击败了98.66% 的用户
 * 内存消耗 : 34.9 MB, 在Isomorphic Strings的JavaScript提交中击败了95.92% 的用户
 */
