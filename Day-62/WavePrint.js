function wavePrint(arr) {
  for (let col = 0; col < arr[0].length; col++) {
    if (col % 2 === 0) {
      for (let row = 0; row < arr.length; row++) {
        console.log(arr[row][col]);
      }
    } else {
      for (let row = arr.length - 1; row >= 0; row--) {
        console.log(arr[row][col]);
      }
    }
  }
}

wavePrint([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
]);

//1,2,3,6,5,4,7,8,9,10,11,12

//1,4,7,10,11,8,5,2,3,6,9,12
