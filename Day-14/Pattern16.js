function PatternSixteen(n) {
  let i = 1;
  let ch = 65;
  while (i <= n) {
    let j = 0;
    let str = "";
    while (j < i) {
      str += String.fromCharCode(ch);
      j++;
      ch++;
    }
    i++;
    console.log(str);
  }
}

PatternSixteen(4);
