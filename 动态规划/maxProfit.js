/**
 * @param {number[]} prices
 * @return {number}
 */
// 暴力解法
var maxProfit = function(prices) {
  var len = prices.length;
  var max = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (prices[j] - prices[i] > max) {
        max = prices[j] - prices[i];
      }
    }
  }

  console.log(max);
  return max;
};

var maxProfit2 = function(prices) {
  var min = Number.POSITIVE_INFINITY;
  var max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  console.log(max);
  return max;
};

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([7, 6, 4, 3, 1]);

maxProfit2([7, 1, 5, 3, 6, 4]);
maxProfit2([7, 6, 4, 3, 1]);
maxProfit2([1, 2]);
