function SortZeroOneTwos(arr) {
  let start = 0;
  let mid = 0;
  let end = arr.length - 1;

  while (mid <= end) {
    if (arr[mid] === 0) {
      temp = arr[mid];
      arr[mid] = arr[start];
      arr[start] = temp;
      mid++;
      start++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      temp = arr[end];
      arr[end] = arr[mid];
      arr[mid] = temp;
      end--;
    }
  }

  return arr;
}

console.log(SortZeroOneTwos([1, 0, 0, 1, 0, 2, 2, 2, 1, 0, 0]));
