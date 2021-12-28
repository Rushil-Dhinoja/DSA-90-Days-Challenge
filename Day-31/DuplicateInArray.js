function duplicateInArrayHashMap(arr) {
  map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return arr[i];
    }
    map[arr[i]] = true;
  }
}

console.log(duplicateInArrayHashMap([4, 2, 1, 3, 1]));

function duplicateInArrayUsingXOR(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans ^= arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    ans ^= i;
  }

  return ans;
}
console.log(duplicateInArrayHashMap([4, 2, 1, 3, 1]));
console.log(duplicateInArrayUsingXOR([4, 2, 1, 3, 1]));
