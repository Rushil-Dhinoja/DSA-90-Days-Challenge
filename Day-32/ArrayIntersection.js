function ArrayIntersection(array1, array2) {
  let returnArray = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] === array2[j]) {
      returnArray.push(array1[j]);
      i++;
      j++;
    } else if (array1[i] < array2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return returnArray;
}

console.log(ArrayIntersection([3], [6]));
