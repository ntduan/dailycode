/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 */

/**
 * 动态规划
 * 定义一个最小价格，遍历，于最小价格的差值的最大的就是最大利润
 */

const maxProfit = prices => {
  let [min, profit] = [Number.MAX_SAFE_INTEGER, 0];
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    profit = Math.max(prices[i] - min, profit);
  }
  return profit
};
