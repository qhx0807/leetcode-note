/**
 * 509. 斐波那契数
 * https://leetcode-cn.com/problems/fibonacci-number/
 * @param {number} N
 * @returns {number}
 * @example
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 * 类似题目： 70.爬楼梯 [https://leetcode-cn.com/problems/climbing-stairs/]
 */
const fib = (N) => {
  /**
   * 递归
   * 执行用时 : 124 ms, 在Fibonacci Number的JavaScript提交中击败了42.76% 的用户
   * 内存消耗 : 34 MB, 在Fibonacci Number的JavaScript提交中击败了34.15% 的用户
   */
  // if (N < 2) return N
  // return fib(N - 1) + fib(N - 2)

  /**
   * 动态规划
   * 执行用时 : 96 ms, 在Fibonacci Number的JavaScript提交中击败了67.82% 的用户
   * 内存消耗 : 33.7 MB, 在Fibonacci Number的JavaScript提交中击败了59.51% 的用户
   */
  // if (N < 2) return N
  // let arr = new Array(N).fill(0)
  // arr[1] = 1
  // arr[2] = 2
  // for (let i = 3; i < arr.length; i++) {
  //   arr[i] = arr[i - 1] + arr[i - 2]
  // }
  // return arr[N - 1]

  /**
   * 迭代
   * 执行用时 : 88 ms, 在Fibonacci Number的JavaScript提交中击败了84.60% 的用户
   * 内存消耗 : 33.7 MB, 在Fibonacci Number的JavaScript提交中击败了55.12% 的用户
   */
  let [a, b] = [0, 1]
  let i = 0
  while (i < N) {
    [a, b] = [b, b + a]
    i++
  }
  return a
}

console.log(fib(0))
console.log(fib(10))
