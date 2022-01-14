function mergeArray(arr1, arr2) {
  const arr3 = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      arr3.push(arr2[j]);
      j++;
    } else {
      arr3.push(arr1[i]);
      i++;
    }
  }
  console.log(arr3);
}

mergeArray([1, 3, 5, 7, 9], [1, 2, 4, 6]);
