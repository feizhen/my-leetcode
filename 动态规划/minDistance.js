function getMin(var1, var2, var3) {
  var min = var1;
  if (var2 < min) {
    min = var2;
  }

  if (var3 < min) {
    min = var3;
  }

  return min;
}
/**
 * @param {string} word1
 * @param {string} word2
 * word1 [1...m] word2 [1...n];
 * @return {number}
 */
var minDistance = function(word1, word2) {
  var m = word1.length;
  var n = word2.length;
  /* -------initial------- */
  var e = [];
  var w1 = [];
  for (let i = 0; i <= n; i++) {
    w1.push(i);
  }

  e.push(w1);

  for (let i = 1; i <= m; i++) {
    e.push([i]);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      var ins = e[i - 1][j] + 1; // 插入一个元素
      var del = e[i][j - 1] + 1; // 删除一个元素
      var rep = e[i - 1][j - 1]; // 替换一个元素

      if (word1[i - 1] != word2[j - 1]) {
        rep = e[i - 1][j - 1] + 1;
      }

      e[i][j] = getMin(ins, del, rep);
    }
  }

  console.log(e[m][n]);
  return e[m][n];
};

minDistance("horse", "ros");
minDistance("intention", "execution");
