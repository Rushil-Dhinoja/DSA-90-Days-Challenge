function ReverseString(string) {
  const arr = string.split("");
  let start = 0;
  let end = string.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  console.log(arr.join(""));
}

ReverseString("Rushil");
