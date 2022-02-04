function recursiveFact(n) {
  if (n === 1) {
    return n;
  }
  return n * recursiveFact(n - 1);
}

console.log(recursiveFact(5));

function factNormal(n) {
  let fact = 1;

  for (let i = n; i > 0; i--) {
    fact *= i;
  }

  console.log(fact);
}

// factNormal(5);
