function printCountRec(n) {
  if (n === 0) {
    return;
  }

  console.log(n);

  printCountRec(n - 1);
}
printCountRec(5);
