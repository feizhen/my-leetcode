/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  var len = nums.length;
  if (len === 0) {
    return 0;
  }
  var money = [];
  // 初始化
  money.push(nums[0]);

  if (len > 1) {
    if (money[0] > nums[1]) {
      money.push(money[0]);
    } else {
      money.push(nums[1]);
    }
  }

  for (let i = 2; i < len; i++) {
    var max = nums[i] + money[i - 2];
    if (money[i - 1] > max) {
      max = money[i - 1];
    }
    money.push(max);
  }

  console.log(money);
  return money[len - 1];
};

rob([1, 2, 3, 1]);
rob([2, 1, 1, 2]);
rob([2, 7, 9, 3, 1]);
