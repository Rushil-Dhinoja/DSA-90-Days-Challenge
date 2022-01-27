function RowWiseSum(arr) {
  for (let row = 0; row < arr.length; row++) {
    let rowSum = 0;
    for (let col = 0; col < arr[row].length; col++) {
      rowSum += arr[row][col];
    }

    arr[row] = rowSum;
  }
}

RowWiseSum([
  [3, 4, 11],
  [2, 12, 1],
  [7, 8, 7],
]);
