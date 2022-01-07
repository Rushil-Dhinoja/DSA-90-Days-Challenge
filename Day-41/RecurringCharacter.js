const input = [2, 5, 1, 2, 3, 5, 1, 2, 4];

function firstRecurringCharacter(inputArray) {
  const lengthOfArray = inputArray.length;
  lookupTable = {};
  for (let i = 0; i < lengthOfArray; i++) {
    if (lookupTable[inputArray[i]]) {
      return inputArray[i];
    }
    lookupTable[inputArray[i]] = true;
  }

  return undefined;
}

console.log(firstRecurringCharacter(input));
