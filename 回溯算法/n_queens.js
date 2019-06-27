const n = 4;

function solveNQueens(n) {
  const queens = new Array(n).fill(null);

  const results = [];

  placeQueens(queens, 0);

  return results.map(displayResult);

  function placeQueens(q, r) {
    if (r === q.length) {
      results.push(q.slice());
    }

    // 检测第 r 行， 第 i 列元素是否符合要求
    for (let i = 0; i < q.length; i++) {
      let legal = true;

      // 检测 (0 - r -1) : j 行的元素
      for (let j = 0; j < r; j++) {
        // 检测同一列、对角线是否已经摆放皇后
        if (q[j] === i || q[j] === i + j - r || q[j] === i + r - j) {
          legal = false;
        }
      }

      if (legal) {
        q[r] = i;
        placeQueens(q, r + 1);
      }
    }
  }

  function displayResult(queens) {
    const result = [];
    for (let i = 0; i < queens.length; i++) {
      const parts = new Array(queens.length).fill(".");
      parts[queens[i]] = "Q";
      result.push(parts.join(""));
    }

    return result;
  }
}

solveNQueens(n);
