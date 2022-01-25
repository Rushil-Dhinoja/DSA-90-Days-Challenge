function stringCompression(charArr) {
  let i = 0;
  let ansIndex = 0;

  while (i < charArr.length) {
    let j = i + 1;

    while (j < charArr.length && charArr[i] === charArr[j]) {
      j++;
    }

    charArr[ansIndex++] = charArr[i];
    let count = j - i;

    if (count > 1) {
      let cnt = count.toString().split("");
      for (let i = 0; i < cnt.length; i++) {
        charArr[ansIndex++] = cnt[i];
      }
    }
    i = j;
  }

  return ansIndex;
}
console.log(stringCompression(["a", "a", "b", "b", "c", "c", "c"]));
