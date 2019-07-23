/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  const len = s.length;

  const strArr = s.split("");

  // max = substr(0);
  for (let i = 0; i < len; i++) {
    if (max < substr(i)) max = substr(i);
  }

  console.log(max);

  return max;

  function substr(i) {
    const temp = strArr.slice(i, i + 1);
    for (let j = i + 1; j < len; j++) {
      if (!temp.includes(s[j])) {
        temp.push(s[j]);
      } else {
        break;
      }
    }

    return temp.length;
  }
};

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("aab");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring(" ");
