/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  function isWord(word) {
    return wordDict.includes(word);
  }

  // initial
  var p = [];
  for (let i = 0; i < s.length; i++) {
    p.push(false);
  }

  p.push(true);

  for (let i = s.length; i >= 0; i--) {
    for (let j = i; j <= s.length; j++) {
      if (isWord(s.slice(i, j)) && p[j]) {
        p[i] = true;
      }
    }
  }

  console.log(p);

  return p[0];
};

wordBreak("leetcode", ["leet", "code"]);
wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);
