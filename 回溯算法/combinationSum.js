function isExist(founded, finalResult) {
  let exist = false;
  finalResult.forEach(cur => {
    if (exist) {
      return;
    }
    let allEqual = true;
    for (let i = 0; i < cur.length; i++) {
      if (cur[i] !== founded[i]) {
        allEqual = false;
      }
    }

    exist = allEqual;
  });
  return exist;
}

function uniq(array) {
  const result = [];
  array.forEach(cur => {
    if (!isExist(cur, result)) {
      result.push(cur);
    }
  });
  return result;
}

var combinationSum = function(candidates, target) {
  const finalResult = [];

  findCombination(candidates, target, []);

  return uniq(finalResult);

  function findCombination(candidates, target, founded) {
    if (target === 0) {
      finalResult.push(founded.sort());

      return;
    }

    for (let i = 0; i < candidates.length; i++) {
      const result = founded.slice();
      const current = candidates[i];
      let temp = target;
      if (current <= temp) {
        result.push(current);

        temp = temp - current;
        findCombination(candidates, temp, result);
      }
    }
  }
};

combinationSum([2, 3, 6, 7], 7);
combinationSum([2, 3, 5], 7);
combinationSum([], 9);
