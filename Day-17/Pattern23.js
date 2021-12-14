function PatternTwentyThree(n) {
  let i = 1;
  while (i <= n) {
    let str = "";
    let spaces = n - i;
    while (spaces) {
      str += " ";
      spaces--;
    }

    let nums = i;
    while (nums) {
      str += i;
      nums--;
    }

    console.log(str);
    i++;
  }
}

PatternTwentyThree(4);
