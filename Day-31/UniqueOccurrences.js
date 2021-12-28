function uniqueOccurrences(arr) {
  let occurrences = {};
  for (let i = 0; i < arr.length; i++) {
    if (occurrences[arr[i]]) {
      occurrences[arr[i]]++;
    } else {
      occurrences[arr[i]] = 1;
    }
  }
  let uniques = {};
  let countArray = Object.values(occurrences);
  for (let i = 0; i < countArray.length; i++) {
    if (uniques[countArray[i]]) {
      return false;
    } else {
      uniques[countArray[i]] = 1;
    }
  }

  return true;
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
