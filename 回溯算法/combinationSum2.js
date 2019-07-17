/**
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 *  candidates 中的每个数字在每个组合中只能使用一次。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/combination-sum-ii
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort();
  var len = candidates.length;
  var result = [];
  var cached = new Map();

  function subset(i, sum, temp) {
    if (sum === target && cached[temp.toString()] !== true) {
      result.push(temp);
      // 使用map去重
      cached[temp.toString()] = true;
      return;
    }

    if (sum > target || i >= len) {
      return;
    }

    var current = candidates[i];

    // 这种方法在递归树上会有重复

    // 包含当前元素, 但是要在下次递归中排除当前元素
    subset(i + 1, sum + current, temp.concat([current]));

    // 不包含当前元素
    subset(i + 1, sum, temp);
  }

  subset(0, 0, []);

  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
