var searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let searchRow = 0;
  let searchCol = cols - 1;

  while (searchRow < rows && searchCol >= 0) {
    let element = matrix[searchRow][searchCol];

    if (element === target) {
      return 1;
    }

    if (element < target) {
      searchRow++;
    }
    if (element > target) {
      searchCol--;
    }
  }

  return 0;
};

searchMatrix(
  [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  5
);
