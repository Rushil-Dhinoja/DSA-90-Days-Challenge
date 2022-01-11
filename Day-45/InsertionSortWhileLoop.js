function InsertionSort(arr) {
  let i = 1;
  while (i < arr.length) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
      j--;
    }
    i++;
    arr[j + 1] = temp;
  }
  console.log(arr);
}

InsertionSort([10, 1, 7, 6, 14, 9]);
