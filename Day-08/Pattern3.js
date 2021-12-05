function patternThree(n) {
  let i = 1;
  while (i <= n) {
    let j = 1;
    let str = "";
    while (j <= n) {
      str += j;
      j++;
    }
    i++;
    console.log(str);
  }
}

patternThree(4);
