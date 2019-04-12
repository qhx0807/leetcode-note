/**
 * 3.无重复字符的最长子串
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @returns {string}
 */
const lengthOfLongestSubstring = (s) => {
  if (!s) return ''
  let arr = []
  let lenarr = []
  for (let i = 0; i < s.length; i++) {
    let letter = s.charAt(i)
    if (arr.includes(letter)) {
      // 若数组中已存在 则重新开始 删除之前全部的元素
      arr.splice(0, (arr.indexOf(letter) + 1))
    }
    arr.push(letter)
    lenarr.push(arr.length)
  }
  return Math.max(...lenarr)
}
/**
 * 执行用时 : 140 ms, 在Longest Substring Without Repeating Characters的JavaScript提交中击败了90.63% 的用户
 * 内存消耗 : 37.8 MB, 在Longest Substring Without Repeating Characters的JavaScript提交中击败了85.21% 的用户
 */

console.log(lengthOfLongestSubstring('aabaab!bb'))
