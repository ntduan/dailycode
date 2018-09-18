/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 * 第 i 天买入，第 i + 1 天卖出的收益是 prices[i+1] - prices[i]。遍历 prices，将所有 prices[i+1] - prices[i] 为正数的值加起来，即为最大利润。
 *
 */

const maxProfitII = (prices: number[]): number => {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    profit += Math.max(prices[i] - prices[i - 1], 0);
  }
  return profit;
};
