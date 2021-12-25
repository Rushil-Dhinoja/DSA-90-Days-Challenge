function LinearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return [i, arr[i]];
    }
  }
  return "Key not found";
}

console.log(LinearSearch([1, 3, 45, 33], 0));
