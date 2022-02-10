function arraySum(arr, i, sum) {
  if (i === arr.length) {
    return sum;
  }

  return arraySum(arr, i + 1, sum + arr[i]);
}

console.log(arraySum([1, 2, 3, 4, 5], 0, 0));
