function PatternTwenty(n) {
  let i = 0;
  while (i < n) {
    let star = n - i;
    let str = "";
    while (star) {
      str += "*";
      star--;
    }
    console.log(str);
    i++;
  }
}

PatternTwenty(4);
