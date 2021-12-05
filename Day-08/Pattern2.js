function pattenOne(n) {
  let i = 1;
  while (i <= n) {
    let j = 1;
    let str = "";
    while (j <= n) {
      str += i;
      j++;
    }
    console.log(str);
    i++;
  }
}

pattenOne(4);
