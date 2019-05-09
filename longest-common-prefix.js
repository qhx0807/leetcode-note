/**
 * 14. 最长公共前缀
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * @example
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * @param {string[]} strs
 * @returns {string}
 */
const longestCommonPrefix = (strs) => {
  if (Array.isArray(strs) && strs.length < 1) {
    return ''
  }
  let str = ''
  const arr = strs[0].split('')
  for (let i = 0; i < arr.length; i++) {
    /**
     * FIXME: note:
     * strs.every(item => item.charAt(i) === arr[i]) 只是对应位置上的字符是否相等
     */
    if (strs.every(item => item.charAt(i) === arr[i])) {
      str += arr[i]
    } else {
      break
    }
  }
  return str
}

console.log(longestCommonPrefix(['aca', 'bca', 'cca']))

export default longestCommonPrefix
