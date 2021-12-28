function AllDuplicatesInArray(arr) {
  let map = {};
  let returnArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      returnArray.push(arr[i]);
    } else {
      map[arr[i]] = true;
    }
  }
  return returnArray;
}

console.log(AllDuplicatesInArray([4, 3, 2, 7, 8, 2, 3, 1]));
