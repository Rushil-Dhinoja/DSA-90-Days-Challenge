function PatternNineteen(n) {
  let i = 1;
  while (i <= n) {
    let str = "";
    let space = n - i;

    while (space) {
      str += " ";
      space--;
    }

    let star = i;
    while (star) {
      str += "*";
      star--;
    }

    console.log(str);
    i++;
  }
}

PatternNineteen(4);
