var countPrimes = function (n) {
  let count = 0;
  let boolArr = Array(n + 1).fill(true);

  boolArr[0] = boolArr[1] = false;

  for (let i = 2; i < n; i++) {
    if (boolArr[i]) {
      count++;
      for (let j = i * 2; j < n; j = j + i) {
        console.log(j);
        boolArr[j] = false;
      }
    }
  }
  return count;
};
