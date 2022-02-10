function isSorted(arr, i) {
  if (i === arr.length || arr.length === 0) {
    return true;
  }

  if (arr[i] < arr[i - 1]) {
    return false;
  }

  return isSorted(arr, i + 1);
}

console.log(isSorted([1, 2, 3], 1));
