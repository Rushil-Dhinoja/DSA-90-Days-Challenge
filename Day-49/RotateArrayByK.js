function RotateByK(nums, k) {
  let arrLength = nums.length;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr[(i + k) % arrLength] = nums[i];
  }
  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }
  console.log(arr);
}

RotateByK([1, 7, 9, 11, 12], 2);
