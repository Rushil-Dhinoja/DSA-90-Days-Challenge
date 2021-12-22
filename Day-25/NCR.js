function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }

  return fact;
}

function ncr(n, r) {
  const Numerator = factorial(n);
  const Denominator = factorial(r) * factorial(n - r);
  //   console.log(Numerator);
  return Numerator / Denominator;
}

console.log(ncr(8, 2));
