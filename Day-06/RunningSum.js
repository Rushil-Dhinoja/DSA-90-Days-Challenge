const nums = [3, 1, 2, 10, 1];

function runningSum(inputArray) {
  const lengthOfArray = inputArray.length;
  const newArray = [];
  newArray[0] = inputArray[0];
  for (let i = 1; i < lengthOfArray; i++) {
    newArray[i] = newArray[i - 1] + inputArray[i];
  }

  return newArray;
}

console.log(runningSum(nums));
