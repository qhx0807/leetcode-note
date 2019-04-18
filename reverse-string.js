/**
 * 344.反转字符串
 * https://leetcode-cn.com/problems/reverse-string/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  /**
   * TODO:
   * reverse()可以改变原数组？
   */
  // s.reverse()

  /**
   * 双指针
   * es6
   */
  let i
  let j
  [i, j] = [0, s.length - 1]
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]]
    i++
    j--
  }
}

let arr = ['h', 'e', 'l', 'l', 'o']
reverseString(arr)
console.log(arr)
