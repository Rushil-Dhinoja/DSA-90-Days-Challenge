function SumOfTriplets(arr, target) {
  let returnArray = [];
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      for (let k = j + 1; k < arrLength; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        let sumArray = [arr[i], arr[j], arr[k]];
        if (sum == target) {
          returnArray.push(sumArray);
          if (returnArray.length != 0) {
            return returnArray;
          } else {
            return -1;
          }
        }
      }
    }
  }
  return -1;
}

console.log(SumOfTriplets([1, 2, 3, 1, 2, 3], 6));
