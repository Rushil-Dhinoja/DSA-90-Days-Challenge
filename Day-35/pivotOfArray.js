var pivotIndex = function (nums) {
  let allSum = 0;
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    allSum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    let rightSum = allSum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
};

console.log(pivot([1, 7, 3, 6, 5, 6]));
