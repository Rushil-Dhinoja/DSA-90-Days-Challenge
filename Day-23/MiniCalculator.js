function MiniCalculator(a, b, op) {
  switch (op) {
    case "Add":
      return a + b;
    case "Minus":
      return a - b;
    case "Mul":
      return a * b;
    case "Div":
      return a / b;
  }
}

console.log(MiniCalculator(10, 5, "Add"));
console.log(MiniCalculator(10, 5, "Minus"));
console.log(MiniCalculator(10, 5, "Mul"));
console.log(MiniCalculator(10, 5, "Div"));
