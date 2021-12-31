function FirstAndLast(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = parseInt((start + end) / 2);
  let first = -1;
  let last = -1;
  while (start <= end) {
    if (arr[mid] === key) {
      first = mid;
      end = mid - 1;
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else if (arr[mid] > key) {
      end = mid - 1;
    }
    mid = parseInt((start + end) / 2);
  }

  //   start = 0;
  //   end = arr.length - 1;
  //   mid = parseInt((start + end) / 2);
  //   while (start <= end) {
  //     if (arr[mid] === key) {
  //       last = mid;
  //       start = mid + 1;
  //     } else if (arr[mid] < key) {
  //       start = mid + 1;
  //     } else if (arr[mid] > key) {
  //       end = mid - 1;
  //     }
  //     mid = parseInt((start + end) / 2);
  //   }

  console.log(first, last);
}

FirstAndLast([0, 0, 1, 1, 2, 2, 2, 2], 2);
