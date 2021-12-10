function PatternFifteen(n) {
  let i = 1;

  while (i <= n) {
    let j = 1;
    let str = "";
    while (j <= i) {
      str += String.fromCharCode(64 + i);
      j++;
    }
    i++;
    console.log(str);
  }
}

PatternFifteen(4);
