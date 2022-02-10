function linearSearch(arr, i, k) {
  if (i === arr.length) {
    return false;
  }

  if (arr[i] === k) {
    return i;
  }

  return linearSearch(arr, i + 1, k);
}

console.log(linearSearch([1, 5, 7, 8, 10], 0, 9));
