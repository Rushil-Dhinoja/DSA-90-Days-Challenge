function PatternNine(n) {
  let i = 1;
  while (i <= n) {
    let j = 1;
    let count = i;
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

PatternNine(4);
