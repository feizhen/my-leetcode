/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var result = [];
  var len = nums.length;

  for (let i = 0; i < len; i++) {
    find(i);
  }

  return result;

  function find(index) {
    for (let i = index + 1; i < len; i++) {
      if (nums[i] + nums[index] === target) {
        result.push(index);
        result.push(i);
        return;
      }
    }
  }
};

function has(obj, key) {
  return obj.hasOwnProperty(key);
}

twoSum([2, 7, 11, 15], 9);
