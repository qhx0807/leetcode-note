/**
 * 整数反转
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const mark = x < 0 ? '-' : ''
  const re = Math.abs(x).toString().split('').reverse().join('')
  const num = Number(mark + re)
  return num > (Math.pow(2, 31) - 1) || num < Math.pow(-2, 31) ? 0 : num
}

export default reverse
