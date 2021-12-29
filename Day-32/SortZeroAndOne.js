function ZeroAndOnes(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] == 0) {
      i++;
    } else if (arr[j] == 1) {
      j--;
    } else if (arr[i] == 1) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  return arr;
}

console.log(ZeroAndOnes([0, 1, 0, 1, 1, 0, 1, 1, 0, 0]));
