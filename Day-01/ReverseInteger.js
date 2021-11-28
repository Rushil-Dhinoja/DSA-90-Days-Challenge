export function reverseInteger(integer) {
  let rev = 0;

  while (integer > 0) {
    rev = rev * 10 + (integer % 10);
    integer = Math.floor(integer / 10);
  }

  return rev;
}

console.log(reverseInteger(1234565));
