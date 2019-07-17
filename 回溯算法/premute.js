// 给定一个没有重复数字的序列，返回其所有可能的全排列。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var result = [];

  function combination(current, subset, temp) {
    temp.push(current);

    if (subset.length === 0) {
      result.push(temp);
      return;
    }

    for (let i = 0; i < subset.length; i++) {
      let next_current = subset[i];
      let next_subset = subset.slice();
      next_subset.splice(i, 1);
      let next_temp = temp.slice();
      combination(next_current, next_subset, next_temp);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let array = nums.slice();
    array.splice(i, 1);
    combination(current, array, []);
  }

  console.log(result);

  return result;
};

permute([1, 2, 3, 4]);
permute([0, 1]);
