function DecimalToBinary(n) {
  let answer = 0;
  for (let i = 0; n != 0; i++) {
    let bit = n & 1;
    answer = bit * Math.pow(10, i) + answer;
    n = n >> 1;
  }
  console.log(answer);
}

DecimalToBinary(5);
