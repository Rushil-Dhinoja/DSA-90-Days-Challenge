function removeAllAdj(string) {
  let flag = false;
  let strArr = string.split("");
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i - 1] === strArr[i]) {
      strArr[i - 1] = "";
      strArr[i] = "";
      flag = true;
    }
  }

  if (flag) {
    return removeAllAdj(strArr.join(""));
  }
  return strArr.join("");
}

console.log(removeAllAdj("abbaca"));
