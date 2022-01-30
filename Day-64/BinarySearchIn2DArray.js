/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let mid = parseInt(matrix.length / 2);
  let start = 0;
  let end = matrix.length - 1;

  while (start <= end) {
    // console.log(mid);
    if (mid < 0 || mid >= matrix.length) {
      return false;
    }
    if (matrix[mid][0] > target) {
      end = mid - 1;
    } else if (matrix[mid][matrix[mid].length - 1] < target) {
      start = mid + 1;
    } else {
      let innerMid = parseInt(matrix[mid].length / 2);
      let innerStart = 0;
      let innerEnd = matrix[mid].length - 1;
      while (innerStart <= innerEnd) {
        if (matrix[mid][innerMid] === target) {
          return true;
        } else if (matrix[mid][innerMid] > target) {
          innerEnd = innerMid - 1;
        } else {
          innerStart = innerStart + 1;
        }
        innerMid = parseInt((innerStart + innerEnd) / 2);
      }
      return false;
    }
    mid = parseInt((start + end) / 2);
  }

  return false;
};

console.log(searchMatrix([[1], [3], [5]], 5));
