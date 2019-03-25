/**
 * 罗马数字转整数
 *字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * @param {string} s
 * @returns {number}
 */
const romanToInt = (s) => {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let sum = 0
  const arr = s.split('')
  for (let i = 0; i < arr.length; i++) {
    // 如果当前位比后一位小，则减去当前位
    // 如 'IV' = -1 + 5
    if (map[arr[i]] < map[arr[i + 1]]) {
      sum -= map[arr[i]]
    } else {
      sum += map[arr[i]]
    }
  }
  return sum
}

export default romanToInt
