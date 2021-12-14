function PatternTwentySeven(n) {
  let i = 1;
  while (i <= n) {
    let str = "";
    let spaces = n - i;
    while (spaces) {
      str += " ";
      spaces--;
    }
    let nums = 1;
    let num2 = i - 1;

    while (nums <= i * 2 - 1) {
      if (nums <= i) {
        str += nums;
      } else {
        str += num2;
        num2--;
      }
      nums++;
    }

    console.log(str);
    i++;
  }
}

PatternTwentySeven(4);
