function PatternThirteen(n) {
  let i = 0;

  while (i <= n) {
    let j = 1;
    let str = "";
    let ch = 65 + i;

    while (j <= n) {
      str += String.fromCharCode(ch);
      j++;
      ch++;
    }
    i++;
    console.log(str);
  }
}

PatternThirteen(3);
