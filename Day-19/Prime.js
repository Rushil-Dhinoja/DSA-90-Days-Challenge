let n = 14;
let bool = true;
for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    bool = false;
    break;
  }
}

if (bool) {
  console.log("Is a Prime");
} else {
  console.log("Not a prime");
}
