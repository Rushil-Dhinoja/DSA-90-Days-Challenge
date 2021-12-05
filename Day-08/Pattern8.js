function patternEight(n) {
  let i = 1;
  let count = 1;
  while (i <= n) {
    let j = 1;
    let str = "";
    while (j <= i) {
      str += count;
      count++;
      j++;
    }
    i++;
    console.log(str);
  }
}

patternEight(4);
