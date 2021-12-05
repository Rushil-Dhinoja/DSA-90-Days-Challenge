function PatternSix(n) {
  let i = 1;
  while (i <= n) {
    let j = 1;
    let str = "";
    while (j <= i) {
      str += i;
      j++;
    }
    console.log(str);
    i++;
  }
}

PatternSix(4);
