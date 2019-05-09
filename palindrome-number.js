/**
 * 9. 回文数
 * https://leetcode-cn.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 * @example
 * 121 => true
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */

const isPalindrome = (x) => x === Number(x.toString().split('').reverse().join(''))

export default isPalindrome
