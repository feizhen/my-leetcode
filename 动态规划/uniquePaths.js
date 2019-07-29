/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const s = [];
  for (let i = 0; i < n; i++) {
    const column = [];
    for (let j = 0; j < m; j++) {
      column.push(1);
    }
    s.push(column);
  }

  for (let i = n - 1; i >= 0; i--) {
    console.log(s[i]);
    for (let j = m - 1; j >= 0; j--) {
      if (i == n - 1 && j == m - 1) {
        s[i][j] = 1;
      } else {
        let right = 0,
          down = 0;
        if (j + 1 < m) {
          right = s[i][j + 1];
        }
        if (i + 1 < n) {
          down = s[i + 1][j];
        }

        s[i][j] = right + down;
      }
    }
  }

  console.log(s);

  return s[0][0];
};

uniquePaths(3, 2);
uniquePaths(7, 3);
