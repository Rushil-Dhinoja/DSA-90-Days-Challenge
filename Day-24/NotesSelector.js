function NotesSelector(n) {
  let notes = {
    100: 0,
    50: 0,
    20: 0,
    1: 0,
  };

  switch ("100Rs") {
    case "100Rs":
      notes["100"] = Math.floor(n / 100);
      n = n % 100;
    case "50Rs":
      notes["50"] = Math.floor(n / 50);
      n = n % 50;
    case "20Rs":
      notes["20"] = Math.floor(n / 20);
      n = n % 20;
    case "1Rs":
      notes["1"] = Math.floor(n / 1);
  }
  console.log(notes);
}

NotesSelector(1330);
