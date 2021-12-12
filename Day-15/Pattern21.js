function PatternTwentyone(n) {
  let i = 1;
  while (i <= n) {
    let str = "";
    let space = i - 1;
    while (space) {
      str += " ";
      space--;
    }
    let star = n - i + 1;
    while (star) {
      str += "*";
      star--;
    }
    i++;
    console.log(str);
  }
}

PatternTwentyone(4);
