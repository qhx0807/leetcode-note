/**
 * 122. 买卖股票的最佳时机 II
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @returns {number}
 */

// [7, 1, 5, 6]
// 第二天买入，第四天卖出，收益最大（6 - 1），
// 所以一般人可能会想，怎么判断不是第三天就卖出了呢 ?
// 这里就把问题复杂化了，根据题目的意思，当天卖出以后，当天还可以买入，
// 所以其实可以第三天卖出，第三天买入，第四天又卖出（（5 - 1）+ （6 - 5） === 6 - 1）。
// 所以算法可以直接简化为只要今天比昨天大，就卖出。
const maxProfit = (prices) => {
  if (prices.length <= 1) return 0
  let profit = 0
  let yesterday = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (yesterday >= prices[i]) {
      yesterday = prices[i]
    } else {
      profit = prices[i] - yesterday + profit
      yesterday = prices[i]
    }
  }
  return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
