function One() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
    i++;
  }
}

// One();

function Two() {
  for (let i = 0; i <= 5; i--) {
    console.log(i);
    i++;
  }
}
// Two();

function Three() {
  for (let i = 0; i <= 15; i += 2) {
    console.log(i);
    if (i & 1) {
      continue;
    }
    i++;
  }
}

// Three();

function Four() {
  for (let i = 0; i <= 5; i++) {
    for (let j = i; j <= 5; j++) {
      console.log(i, j);
    }
  }
}

Four();

function Five() {
  for (let i = 0; i <= 5; i++) {
    for (let j = i; j <= 5; j++) {
      if (i + j == 10) {
        break;
      }
      console.log(i, j);
    }
  }
}

Five();
