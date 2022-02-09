const map = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

function sayDigits(n) {
  if (n == 0) {
    return;
  }
  let digit = parseInt(n % 10);
  n = parseInt(n / 10);
  sayDigits(n);
  console.log(map[digit]);
}

console.log(sayDigits(413));
