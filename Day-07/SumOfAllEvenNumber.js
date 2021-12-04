function SumOfAllEvenUsingForLoop(n) {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  console.log(sum);
}

function SumOfAllEvenUsingWhileLoop(n) {
  let sum = 0;
  let i = 0;
  while (i <= n) {
    if (i % 2 == 0) {
      sum += i;
    }
    i++;
  }
  console.log(sum);
}

SumOfAllEvenUsingForLoop(5);
SumOfAllEvenUsingWhileLoop(5);
