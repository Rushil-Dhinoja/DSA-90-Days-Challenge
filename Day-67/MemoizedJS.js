const clumsysquare = () => {
  let cache = {};

  return function (num1, num2) {
    const memoCheck = JSON.stringify(`${num1},${num2}`);
    if (cache[memoCheck]) {
      return num1 * num2;
    }
    cache[memoCheck] = true;
    for (i = 0; i < 1000000000; i++) {}
    return num1 * num2;
  };
};

const fastClumsy = clumsysquare();

console.time("First Call");
console.log(fastClumsy(1, 5));
console.timeEnd("First Call");

console.time("First Call");
console.log(fastClumsy(1, 5));
console.timeEnd("First Call");

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(4)(4)(8)());
