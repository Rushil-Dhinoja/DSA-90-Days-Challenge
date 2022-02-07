var shuffle = function (nums, n) {
  const newArray = [];
  let startPoint = 0;
  let endPoint = 0 + n;

  for (let i = 0; newArray.length !== nums.length; i++) {
    if (i % 2 == 0) {
      newArray[i] = nums[startPoint];
      newArray[i + 1] = nums[endPoint];
      startPoint++;
      endPoint++;
    }
  }

  return newArray;
};

shuffle([2, 5, 1, 3, 4, 7], 3);
