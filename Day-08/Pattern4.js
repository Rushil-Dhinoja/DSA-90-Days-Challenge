function PatternFour(n) {
  let i = 1;
  while (i <= n) {
    let j = 1;
    let str = "";
    while (j <= n) {
      str += n - j + 1;
      j++;
    }
    console.log(str);
    i++;
  }
}

PatternFour(3);
