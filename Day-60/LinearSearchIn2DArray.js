function LinearSearchTwoDimArray(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === key) {
        return [i, j];
      }
    }
  }
  return 0;
}

console.log(
  LinearSearchTwoDimArray(
    [
      [1, 2, 3],
      [7, 8, 9],
      [13, 14, 15],
    ],
    12
  )
);
