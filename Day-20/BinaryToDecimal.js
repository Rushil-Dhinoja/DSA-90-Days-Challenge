function BinaryToDecimal(n) {
  let answer = 0;
  for (let i = 0; n != 0; i++) {
    let digit = n % 10;
    if (digit === 1) {
      answer = answer + Math.pow(2, i);
    }
    n = Math.floor(n / 10);
  }
  console.log(answer);
}

BinaryToDecimal(101);
