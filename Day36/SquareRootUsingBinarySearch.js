function squareRoot(number) {
  let start = 0;
  let end = number;
  let mid = parseInt((start + end) / 2);
  let ans = -1;
  while (start <= end) {
    const sqr = mid * mid;

    if (sqr === number) {
      return mid;
    } else if (sqr > number) {
      end = mid - 1;
    } else if (sqr < number) {
      ans = mid;
      start = mid + 1;
    }

    mid = parseInt((start + end) / 2);
  }
  return ans;
}

console.log(squareRoot(4));
