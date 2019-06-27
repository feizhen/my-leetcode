// leetcode:
// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/submissions/
const keyValue = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
};

function letterCombinations(digits) {
  let finalResult = [];

  findLetter([], digits, 0);

  return finalResult;

  function findLetter(result, input, r) {
    if (r === input.length) {
      finalResult = result;

      return result;
    }

    if (result.length === 0 && r === 0) {
      result = keyValue[input[r]];
    } else {
      const current = input[r];
      const re = [];
      keyValue[current].forEach(ch => {
        result.forEach(pre => {
          re.push(pre + ch);
        });
      });
      result = re;
    }

    findLetter(result, input, r + 1);
  }
}

// test //
letterCombinations("2");
letterCombinations("");
