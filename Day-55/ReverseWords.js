function ReverseWords(string) {
  let splitString = string.split(" ");

  for (i = 0; i < splitString.length; i++) {
    const charArr = splitString[i].split("");
    let start = 0;
    let end = charArr.length;
    while (start < end) {
      let temp = charArr[start];
      charArr[start] = charArr[end];
      charArr[end] = temp;
      start++;
      end--;
    }
    splitString[i] = charArr.join("");
  }

  console.log(splitString.join(" "));
}

ReverseWords("My name is Rushil");
