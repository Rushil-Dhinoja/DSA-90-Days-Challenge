function SwapAlternate(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  console.log(arr);
}

SwapAlternate([1, 2, 3, 4, 5, 6]);
