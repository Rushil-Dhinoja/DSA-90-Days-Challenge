var check = function (nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      count++;
    }
  }
  if (nums[nums.length - 1] > nums[0]) {
    count++;
  }

  return count === 1 || count === 0 ? true : false;
};

check([1, 1, 1]);
