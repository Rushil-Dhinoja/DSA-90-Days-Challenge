function isPossible(arr, students, mid) {
  let studentCount = 1;
  let pageSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (pageSum + arr[i] <= mid) {
      pageSum += arr[i];
    } else {
      studentCount++;
      if (studentCount > students || arr[i] > mid) {
        return false;
      } else {
        pageSum = arr[i];
      }
    }
  }
  return true;
}

function bookAllocation(arr, students) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let start = 0;
  let end = sum;
  let mid = parseInt((start + end) / 2);
  let ans = -1;

  while (start < end) {
    if (isPossible(arr, students, mid)) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = parseInt((start + end) / 2);
  }
  return ans;
}

console.log(bookAllocation([10, 20, 30, 40], 2));
