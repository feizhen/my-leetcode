/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, originK) {
  var result = [];
  var factorial = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]; // 0 - 9 的阶乘

  function combination(current, subset, temp, k) {
    const leftLength = subset.length;

    if (k > factorial[leftLength]) {
      // 减枝，跳过
      let next_current = subset[0];
      let next_subset = subset.slice(1);
      // console.log("next_subset", next_subset);
      combination(next_current, next_subset, temp, k - factorial[leftLength]);
    } else {
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
        combination(next_current, next_subset, next_temp, k);
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let array = nums.slice();
    array.splice(i, 1);
    combination(current, array, [], originK);
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

  const output = permute(input, k);
  return output[k - 1].join("");
};

console.log(getPermutation(9, 219601));
