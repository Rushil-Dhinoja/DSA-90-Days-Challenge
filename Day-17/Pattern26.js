function PatternTwentySix(n) {
  let i = 1;
  let printNum = 1;
  while (i <= n) {
    let str = "";
    let spaces = n - i;
    while (spaces) {
      str += " ";
      spaces--;
    }

    let nums = i;
    while (nums) {
      str += printNum;
      printNum++;
      nums--;
    }

    console.log(str);
    i++;
  }
}

PatternTwentySix(4);
