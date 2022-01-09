const nums = [1, 5, 6, 7];

function pushingTwoElementsApproach(inputArray) {
  const lengthOfArray = inputArray.length;
  const newArray = Array(lengthOfArray * 2);
  for (let i = 0; i < lengthOfArray; i++) {
    newArray[i] = inputArray[i];
    newArray[i + lengthOfArray] = inputArray[i];
  }
  return newArray;
}

console.log(pushingTwoElementsApproach(nums));
