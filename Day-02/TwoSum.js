const testCaseArray = [2, 11, 4, 7];
const target = 9;

function twoSum(data, target) {
  let lookup = {};
  for (let i = 0; i < data.length; i++) {
    if (lookup[data[i]] || lookup[data[i]] === 0) {
      return [lookup[data[i]], i];
    }
    lookup[target - data[i]] = i;
  }
}
console.log(twoSum(testCaseArray, target));
