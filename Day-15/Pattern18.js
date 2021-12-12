function PatternEighteen(n) {
  let i = 1;
  while (i <= n) {
    let j = 1;
    let str = "";
    while (j <= i) {
      str += String.fromCharCode(65 + n + j - i - 1);
      j++;
    }
    console.log(str);
    i++;
  }
}

PatternEighteen(4);
