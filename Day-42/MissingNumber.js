const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function missingNumber(nums) {
  const lengthOfArray = nums.length;
  const expectedTotal = (lengthOfArray * (lengthOfArray + 1)) / 2;
  let sumOfGivenArray = 0;
  for (let i = 0; i < lengthOfArray; i++) {
    sumOfGivenArray += nums[i];
  }
  return expectedTotal - sumOfGivenArray;
}

missingNumber(nums);
