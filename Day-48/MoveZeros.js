function MoveZeros(arr) {
  let point = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[point];
      arr[point] = temp;
      point++;
    }
  }

  console.log(arr);
}

MoveZeros([0, 1, 0, 3, 12]);
