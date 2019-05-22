/**
 * 121. 买卖股票的最佳时机
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @returns {number}
 * @example
 * [7, 1, 5, 3, 6, 4] => 6 - 1 = 5
 */
const maxProfit = (prices) => {
  if (prices.length <= 1) return 0
  let min = prices[0]
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - min)
    min = Math.min(min, prices[i])
  }
  return max
}
// 动态规划
// 前i天的最大收益 = max{前i-1天的最大收益，第i天的价格 - 前i-1天中的最小价格}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
