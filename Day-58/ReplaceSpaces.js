function replaceSpaces(string) {
  const strArr = string.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      strArr[i] = "@40";
    }
  }

  console.log(strArr.join(""));
}

replaceSpaces("Rushi Dhinoja");
