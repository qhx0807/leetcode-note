/**
 * 12. 整数转罗马数字
 * https://leetcode-cn.com/problems/integer-to-roman/
 *字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * @param {number} num
 * @returns {string}
 */
const intToRoman = (num) => {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const reps = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let res = ''
  for (let i = 0; i < 13; i++) {
    while (num >= values[i]) {
      num -= values[i]
      res += reps[i]
    }
  }
  return res
}

console.log(intToRoman(43))
