function PatternTwentyTwo(n) {
  let i = 1;
  while (i <= n) {
    let str = "";
    let space = i - 1;
    while (space) {
      str += " ";
      space--;
    }
    let nums = n - i + 1;
    while (nums) {
      str += i;
      nums--;
    }
    i++;
    console.log(str);
  }
}

PatternTwentyTwo(6);
