const checkEqual = (arr1, arr2) => {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) {
      return 0;
    }
  }

  return 1;
};

var checkInclusion = function (s1, s2) {
  //Character Count Array
  const count = Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    let index = s1[i].charCodeAt(0) - "a".charCodeAt(0);
    count[index]++;
  }

  //Traverse s2 string in window of size S1 length and compare
  let i = 0;
  let windowSize = s1.length;

  //Running for 1 window
  const count2 = Array(26).fill(0);
  while (i < windowSize) {
    let index = s2[i].charCodeAt(0) - "a".charCodeAt(0);
    count2[index]++;
    i++;
  }

  if (checkEqual(count, count2)) return 1;

  //Process next windows

  while (i < s2.length) {
    let newChar = s2[i];
    let index = newChar.charCodeAt(0) - "a".charCodeAt(0);
    count2[index]++;

    let oldChar = s2[i - windowSize];
    let oldIndex = oldChar.charCodeAt(0) - "a".charCodeAt(0);
    count2[oldIndex]--;
    i++;
    if (checkEqual(count, count2)) return 1;
  }

  return 0;
};

console.log(checkInclusion("ab", "eidbaooo"));
