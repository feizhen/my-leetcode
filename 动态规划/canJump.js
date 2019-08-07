/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  var len = nums.length;
  var p = [];
  for (let i = 0; i < len; i++) {
    p.push(false);
  }

  for (let i = 0; i < len; i++) {
    if (i === 0) {
      p[i] = true;
      continue;
    }
    let canJump = false;
    for (let j = i - 1; j >= 0; j--) {
      canJump = nums[j] >= i - j && p[j];
      if (canJump) {
        break;
      }
    }

    p[i] = canJump;
  }

  console.log(p);
  return p[len - 1];
};

canJump([2, 3, 1, 1, 4]);
canJump([3, 2, 1, 0, 4]);
canJump([0, 2, 3]);
canJump([0]);
