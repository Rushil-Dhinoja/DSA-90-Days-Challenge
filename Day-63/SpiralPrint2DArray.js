var spiralOrder = function (matrix) {
  let row = matrix.length;
  let cols = matrix[0].length;
  let count = 0;
  let total = row * cols;

  let startingRow = 0;
  let startingCol = 0;
  let endingRow = row - 1;
  let endingCol = cols - 1;

  const printArray = [];

  while (count < total) {
    //Print Starting Row
    for (let i = startingCol; count < total && i <= endingCol; i++) {
      printArray.push(matrix[startingRow][i]);
      count++;
    }
    startingRow++;

    //Print Ending Col
    for (let i = startingRow; count < total && i <= endingRow; i++) {
      printArray.push(matrix[i][endingCol]);
      count++;
    }
    endingCol--;

    //Print Ending Row
    for (let i = endingCol; count < total && i >= startingCol; i--) {
      printArray.push(matrix[endingRow][i]);
      count++;
    }
    endingRow--;

    //Print Starting Col

    for (let i = endingRow; count < total && i >= startingRow; i--) {
      printArray.push(matrix[i][startingCol]);
      count++;
    }
    startingCol++;
  }

  return printArray;
};
