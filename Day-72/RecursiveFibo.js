function fibo(n) {
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  console.log(arr);
}

function fiboRec(n) {
  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }

  return fiboRec(n - 1) + fiboRec(n - 2);
}

console.log(fiboRec(3));
