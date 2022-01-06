function BubbleSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (swap == false) {
      break;
    }
  }
  console.log(arr);
}

BubbleSort([10, 1, 7, 6, 14, 9]);
