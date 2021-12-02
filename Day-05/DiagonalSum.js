const inputData = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function getDiagonalDifference(inputArray) {
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;
  let i = 0;
  let j = inputArray.length - 1;

  for (let index = 0; index < inputArray.length; index++) {
    firstDiagonalSum += inputArray[index][i];
    secondDiagonalSum += inputArray[index][j];
    i++;
    j--;
  }
  return Math.abs(firstDiagonalSum - secondDiagonalSum);
}

console.log(getDiagonalDifference(inputData));
