let cache = {};

function climbingStairs(n) {
  if (cache[n]) {
    return cache[n];
  }

  if (n < 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }
  const ans = climbingStairs(n - 1) + climbingStairs(n - 2);
  cache[n] = ans;
  return ans;
}

console.time();
console.log(climbingStairs(50));
console.timeEnd();
