function PatternTen(n) {
  let i = 1;
  while (i <= n) {
    let j = 1;
    let str = "";
    while (j <= i) {
      str += i - j + 1;
      j++;
    }
    console.log(str);
    i++;
  }
}

PatternTen(3);
