function PatternThirteen(n) {
  let i = 1;
  let ch = 65;

  while (i <= n) {
    let j = 1;
    let str = "";
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
