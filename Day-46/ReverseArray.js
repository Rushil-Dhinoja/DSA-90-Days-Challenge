function ReverseArray(arr, m) {
  let start = m + 1;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  console.log(arr);
}

ReverseArray([1, 2, 3, 4, 5], 3);
