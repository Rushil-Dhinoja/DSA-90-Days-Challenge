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

function AllDuplicates(arr) {
  let returnArray = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j] && !returnArray.includes(arr[j])) {
        returnArray.push(arr[j]);
      }
    }
  }
  return returnArray;
}

console.log(AllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
