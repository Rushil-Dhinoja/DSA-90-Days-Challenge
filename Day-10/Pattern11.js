function PatternEleven(n) {
  let i = 1;
  let ch = 65;
  while (i <= n) {
    let j = 1;
    let str = "";
    while (j <= n) {
      str += String.fromCharCode(ch);
      j++;
    }
    i++;
    ch++;
    console.log(str);
  }
}

PatternEleven(3);
