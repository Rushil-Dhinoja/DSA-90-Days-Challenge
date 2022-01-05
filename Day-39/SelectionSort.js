function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minPass = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minPass]) {
        minPass = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minPass];
    arr[minPass] = temp;
  }
  console.log(arr);
}

SelectionSort([29, 78, 98, 13, 87, 66, 52, 51, 36]);
