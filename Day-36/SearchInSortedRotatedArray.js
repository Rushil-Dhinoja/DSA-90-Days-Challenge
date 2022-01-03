function findMid(start, end) {
  return parseInt((start + end) / 2);
}

function findPivot(arr) {
  start = 0;
  end = arr.length - 1;
  mid = findMid(start, end);
  while (start < end) {
    if (arr[mid] >= arr[0]) {
      start = mid + 1;
    } else {
      end = mid;
    }

    mid = findMid(start, end);
  }

  return start;
}

function binarySearch(arr, s, e, k) {
  let start = s;
  let end = e;
  let mid = findMid(start, end);
  while (start <= end) {
    if (arr[mid] === k) {
      return mid;
    } else if (arr[mid] <= k) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = findMid(start, end);
  }

  return -1;
}

function SearchInSortedRotatedArray(arr, k) {
  let pivot = findPivot(arr);
  if (arr[pivot] <= k && k <= arr[arr.length - 1]) {
    return binarySearch(arr, pivot, arr.length - 1, k);
  } else {
    return binarySearch(arr, 0, pivot, k);
  }
}

console.log(SearchInSortedRotatedArray([2, 4, 5, 6, 8, 9, 1], 5));
