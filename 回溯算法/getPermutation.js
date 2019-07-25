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

  return result;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 *
 * 这个解法会超时，需要进行减枝
 */
var getPermutation = function(n, k) {
  const input = [];
  for (let i = 1; i <= n; i++) {
    input.push(i);
  }

  const output = permute(input);
  return output[k - 1].join("");
};

console.log(getPermutation(3, 3));
