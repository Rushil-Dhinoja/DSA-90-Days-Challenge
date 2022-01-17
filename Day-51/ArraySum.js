function ArraySum(arr1, arr2) {
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let carry = 0;

  let returnArray = [];

  while (i >= 0 && j >= 0) {
    let sum = arr1[i] + arr2[j] + carry;
    carry = sum / 10;
    sum = sum % 10;
    returnArray.unshift(parseInt(sum));
    i--;
    j--;
  }

  while (i >= 0) {
    let sum = arr1[i] + carry;
    carry = sum / 10;
    sum = sum % 10;
    returnArray.unshift(parseInt(sum));
    i--;
  }
  while (j >= 0) {
    let sum = arr2[j] + carry;
    carry = sum / 10;
    sum = sum % 10;
    returnArray.unshift(parseInt(sum));
    j--;
  }

  if (carry > 0) {
    returnArray.unshift(parseInt(carry));
  }

  return returnArray;
}

console.log(ArraySum([4, 5, 1], [7, 4, 5]));
