function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > temp) {
        //shift
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = temp;
  }
  console.log(arr);
}

InsertionSort([10, 1, 7, 6, 14, 9]);
