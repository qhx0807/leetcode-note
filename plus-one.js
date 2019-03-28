/**
 * 66 加一
 *
 * @param {number[]} digits
 * @returns {number[]}
 */
const plusOne = (digits) => {
  /**
   * 没考虑到 Number的范围 9007199254740992
   * return (Number(digits.join('')) + 1).toString().split('').map(e => parseInt(e))
   */
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    console.log(digits[i])
    if (digits[i] === 10) {
      digits[i] = 0
      if (i === 0) { // 当第一位为9时，加1进一位
        digits.unshift(1)
        return digits
      }
    } else {
      // 末位不为9时
      return digits
    }
  }
}

console.log(plusOne([9, 9]))
