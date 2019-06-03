/**
 * 171. Excel表列序号
 * 给定一个Excel表格中的列名称，返回其相应的列序号。
 * https://leetcode-cn.com/problems/excel-sheet-column-number/
 * 最后一个字母，就是26的0次方乘以他代表的数字，倒数第二个字母就是26的一次方乘以他代表的数字，以此类推加起来
 * @param {string} s
 * @returns {number}
 */
const titleToNumber = (s) => {
  /**
   * 'A'.charCodeAt() => 66
   * 'b'.charCodeAt() => 65
   * ...
   * 'Z'.charCodeAt() => 90
   */
  if (!s) return 0
  let sum = 0
  let len = s.length
  for (let i = len - 1; i >= 0; i--) {
    sum += (s[i].charCodeAt() - 64) * (26 ** (len - i - 1))
  }
  return sum
}

console.log(titleToNumber('AB'))
// 执行用时 : 112 ms, 在Excel Sheet Column Number的JavaScript提交中击败了90.85% 的用户
// 内存消耗 : 35.8 MB, 在Excel Sheet Column Number的JavaScript提交中击败了16.66% 的用户

/**
 * reduce
 * @param {string} s
 * @returns {number}
 */
const titleToNumber1 = s => {
  // 字符串转数组 [...s]
  // ** (幂) 的优先级大于 * (乘法)
  return [...s].reduce((sum, next, index) => sum + (next.charCodeAt() - 64) * 26 ** (s.length - index - 1), 0)
}

console.log(titleToNumber1('AB'))
// 执行用时 : 88 ms, 在Excel Sheet Column Number的JavaScript提交中击败了98.42% 的用户
// 内存消耗 : 34.9 MB, 在Excel Sheet Column Number的JavaScript提交中击败了40.00% 的用户
