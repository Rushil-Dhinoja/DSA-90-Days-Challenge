function PatternTwentyEight(n) {
  let i = 1;
  while (i <= n) {
    let str = "";
    let start = n - i + 1;
    let num = i;
    while (start) {
      str += num;
      start--;
      num++;
    }

    let spaces = (i - 1) * 2;
    while (spaces) {
      str += "*";
      spaces--;
    }

    let start2 = n - i + 1;
    let num2 = n;
    while (start2) {
      str += num2;
      num2--;
      start2--;
    }

    console.log(str);
    i++;
  }
}

PatternTwentyEight(5);
