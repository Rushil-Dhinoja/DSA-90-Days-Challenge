function PowerOfTwo(n) {
  if (n === 0) {
    return 1;
  }

  return 2 * PowerOfTwo(n - 1);
}

console.log(PowerOfTwo(50));
