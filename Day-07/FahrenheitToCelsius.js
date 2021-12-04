function fahrenheitToCelsius(n) {
  let i = 0;
  while (i <= n) {
    const celsius = ((i - 32) * 5) / 9;
    console.log(`${i} Fahrenheit = ${celsius} Celsius`);
    i++;
  }
}

fahrenheitToCelsius(100);
