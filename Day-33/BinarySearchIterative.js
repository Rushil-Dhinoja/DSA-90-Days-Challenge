function BinarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = parseInt((start + end) / 2);

  while (start <= end) {
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = parseInt((start + end) / 2);
  }
  return -1;
}

console.log(BinarySearch([3, 6, 8, 9, 10, 28], 10));
