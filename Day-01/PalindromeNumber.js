function reverseInteger(integer) {
  let rev = 0;

  while (integer > 0) {
    rev = rev * 10 + (integer % 10);
    integer = Math.floor(integer / 10);
  }

  return rev;
}

function checkPalindromeNumber(number) {
  const reverseNumber = reverseInteger(number);

  if (reverseNumber === number) {
    console.log("Number is Palindrome");
  } else {
    console.log("Number is not palindrome");
  }
}

checkPalindromeNumber(121);
