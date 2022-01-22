function maximumOccuringChar(string) {
  let map = {};
  const arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }

  const keyArr = Object.keys(map);
  const valArr = Object.values(map);

  let max = 0;

  for (let i = 0; i < valArr.length; i++) {
    if (valArr[i] > valArr[max]) {
      max = i;
    }
  }

  console.log(keyArr[max]);
}

maximumOccuringChar("teessst");
