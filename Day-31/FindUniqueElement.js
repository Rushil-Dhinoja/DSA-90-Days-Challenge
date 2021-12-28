function findUniqueElement(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = ans ^ arr[i];
  }

  console.log(ans);
}

findUniqueElement([5, 3, 1, 5, 1, 3, 4, 7, 4, 8, 8]);
