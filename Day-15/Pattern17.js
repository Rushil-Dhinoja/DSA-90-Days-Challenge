function PatternSeventeen(n) {
  let i = 1;
  while (i <= n) {
    let j = 0;
    let str = "";
    while (j < i) {
      str += String.fromCharCode(65 + j + i - 1);
      j++;
    }
    console.log(str);
    i++;
  }
}

PatternSeventeen(4);
