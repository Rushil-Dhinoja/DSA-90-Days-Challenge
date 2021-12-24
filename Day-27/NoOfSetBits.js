function SetBits(a, b) {
  let setBitsCount = 0;
  console.log(a, b);
  while (a != 0) {
    if (a & 1) {
      setBitsCount++;
    }
    a = a >> 1;
  }

  while (b != 0) {
    if (b & 1) {
      setBitsCount++;
    }
    b = b >> 1;
  }

  console.log(setBitsCount);
}

SetBits(2, 3);
