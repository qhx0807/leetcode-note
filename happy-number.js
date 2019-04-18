/**
 * 202.快乐数
 * https://leetcode-cn.com/problems/happy-number/
 * 不是快乐数的数称为不快乐数（unhappy number），
 * 所有不快乐数的数位平方和计算，
 * 最後都会进入 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 的循环中。
 * @param {number} n
 * @returns {boolean}
 */
const isHappy = (n) => {
  const unhappyarr = [4, 16, 37, 58, 89, 145, 42, 20]
  if (unhappyarr.includes(n)) return false
  let arr = n.toString().split('').map(e => Number(e))
  let num = 0
  arr.forEach((e) => {
    num += Math.pow(e, 2)
  })
  if (num === 1) return true
  if (unhappyarr.includes(num)) return false
  return isHappy(num)
}

console.log(isHappy(7))
