function One() {
  let a,
    b = 1;

  a = 10;
  if (++a) {
    console.log(b);
  } else {
    console.log(++b);
  }
}

One();

function Two() {
  let a = 1;
  let b = 2;

  if (a-- > 0 && ++b > 2) {
    console.log("Inside if - S1");
  } else {
    console.log("Inside if - S2");
  }

  console.log(`${a} && ${b}`);
}

Two();

function Three() {
  let a = 1;
  let b = 2;

  if (a-- > 0 || ++b > 2) {
    console.log("Inside if - S1");
  } else {
    console.log("Inside if - S2");
  }

  console.log(`${a} && ${b}`);
}

Three();

function Four() {
  let number = 3;
  console.log(25 * ++number);
}
Four();

function Five() {
  let a = 1;
  let b = a++;
  let c = ++a;
  console.log(b);
  console.log(c);
}

Five();
