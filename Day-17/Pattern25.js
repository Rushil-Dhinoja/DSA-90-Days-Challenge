function PatternTwentyFive(n) {
  let i = 1;
  let printNum = 1;

  while (i <= n) {
    let str = "";

    let spaces = i - 1;
    while (spaces) {
      str += " ";
      spaces--;
    }

    let nums = n - i + 1;
    while (nums) {
      str += printNum;
      printNum++;
      nums--;
    }
    i++;
    console.log(str);
  }
}

PatternTwentyFive(4);
