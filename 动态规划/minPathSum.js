/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const p = [];
  var m = grid.length;
  var n = grid[0].length;

  for (let i = 0; i < m; i++) {
    const column = [];
    for (let j = 0; j < n; j++) {
      column.push(Number.POSITIVE_INFINITY);
    }
    p.push(column);
  }

  //   console.log("initial p", p);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        p[i][j] = grid[i][j];
      } else {
        let right = j - 1 >= 0 ? p[i][j - 1] : Number.POSITIVE_INFINITY;
        let down = i - 1 >= 0 ? p[i - 1][j] : Number.POSITIVE_INFINITY;
        p[i][j] = (right < down ? right : down) + grid[i][j];
      }
    }
  }

  //   console.log("complete p", p);

  return p[m - 1][n - 1];
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
