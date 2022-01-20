var isPalindrome = function (s) {
  const simpleString = [];
  for (let i = 0; i < s.length; i++) {
    const code = s.toLowerCase().charCodeAt(i);
    if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
      simpleString.push(s[i].toLowerCase());
    }
  }
  const reverse = [];
  for (let i = simpleString.length - 1; i >= 0; i--) {
    reverse.push(simpleString[i]);
  }
  console.log(reverse);
  return simpleString.join("") === reverse.join("");
};

isPalindrome("race a car");
