/**
 * 387.字符串中的第一个唯一字符
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @returns {number}
 */
const firstUniqChar = (s) => {
  /**
   * 字典
   * 用一个对象存每个字符出现的次数
   */
  let arr = s.split('')
  let dict = {}
  for (let i = 0; i < arr.length; i++) {
    if (dict[arr[i]]) {
      dict[arr[i]] += 1
    } else {
      dict[arr[i]] = 1
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (dict[arr[i]] === 1) {
      return i
    }
  }
  return -1
}

console.log(firstUniqChar('leetcode'))
