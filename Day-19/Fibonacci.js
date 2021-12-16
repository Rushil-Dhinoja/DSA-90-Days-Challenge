n = 10;
let a = 0;
let b = 1;
console.log(a);
console.log(b);
for (let i = 2; i <= n; i++) {
  let sum = a + b;
  a = b;
  b = sum;
  console.log(sum);
}
