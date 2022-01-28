function wavePrint(arr) {
  for (let col = 0; col < arr.length; col++) {
    if (col % 2 === 0) {
      for (let row = 0; row < arr.length; row++) {
        console.log(arr[row][col]);
      }
    } else {
      for (let row = arr[col].length - 1; row >= 0; row--) {
        console.log(arr[row][col]);
      }
    }
    // let count = 0;
    // while (count < arr.length) {
    //   console.log(arr[col][0]);
    //   count++;
    // }
    // console.log(arr[col][0]);
  }
}

wavePrint([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
]);

//1,2,3,6,5,4,7,8,9,10,11,12

//1,4,7,10,11,8,5,2,3,6,9,12
