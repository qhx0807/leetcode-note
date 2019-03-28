/**
 * 70 爬楼梯
 * 把数字拆分成 1 和 2 的组合，有多少种组合
 * @param {number} n
 * @returns {number}
 * @example
 * // n = 3
 * // 1 + 1
 * // 1 + 2
 * // return 2
 * TODO:
 * - 动态规划
 * - 斐波那契数列
 */
const climbStairs = (n) => {
  if (n < 2) return n
  let arr = new Array(n).fill(0) // 动态规划通常使用一个数组来保存中间结果
  arr[1] = 2 // n=2; return 2
  arr[2] = 3 // n=3; return 3
  for (let i = 3; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n - 1]
}
console.log(climbStairs(4))

/**
 * 计算斐波那契数列
 * @example
 * // F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2) (n>=3，n∈N*)
 */

// 递归方法
// 要执行n次代码
const recurFib = (n) => {
  if (n < 2) return n
  return recurFib(n - 1) + recurFib(n - 2)
}

// 动态规划
const dynFib = (n) => {
  if (n <= 2) return 1
  let arr = new Array(n).fill(0)
  arr[1] = 1
  arr[2] = 2
  for (let i = 3; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n - 1]
}
console.log(dynFib(12))

// 迭代
const iterFib = (n) => {
  let last = 1
  let nextLast = 1
  let result = 1
  for (let i = 2; i < n; ++i) {
    result = last + nextLast
    nextLast = last
    last = result
  }
  return result
}
console.log(iterFib(3))
