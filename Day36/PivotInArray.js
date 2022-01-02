function PivotInArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid = parseInt((start + end) / 2);
  while (start < end) {
    if (arr[mid] >= arr[0]) {
      start = mid + 1;
    } else if (arr[mid] <= arr[arr.length - 1]) {
      end = mid;
    }
    mid = parseInt((start + end) / 2);
  }
  return start;
}

console.log(PivotInArray([2, 4, 5, 6, 8, 9, 1]));
