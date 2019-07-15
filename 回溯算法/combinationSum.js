var combinationSum = function(candidates, target) {
  candidates.sort();
  var result = [];
  var len = candidates.length;

  function constructSubset(i, sum, temp) {
    if (sum === target) {
      result.push(temp);
      return;
    }

    if (sum > target || i >= len) {
      return;
    }

    // 包含当前元素
    constructSubset(i, sum + candidates[i], temp.concat([candidates[i]]));

    // 不包含当前元素
    constructSubset(i + 1, sum, temp);
  }

  constructSubset(0, 0, []);

  return result;
};

combinationSum([2, 3, 6, 7], 7);
combinationSum([2, 3, 5], 7);
combinationSum([], 9);
