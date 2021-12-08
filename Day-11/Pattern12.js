function PatternTwelve(n) {
  let i = 1;
  while (i <= n) {
    let j = 1;
    let str = "";
    let ch = 65;
    while (j <= n) {
      str += String.fromCharCode(ch);
      j++;
      ch++;
    }
    i++;
    console.log(str);
  }
}

PatternTwelve(3);
