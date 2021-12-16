function ProductAndSum(n) {
  let num = n;
  let product = 1;
  let sum = 0;

  while (num) {
    let unit = num % 10;
    product *= unit;
    sum += unit;
    num = Math.floor(num / 10);
  }
  return product - sum;
}

console.log(ProductAndSum(234));
