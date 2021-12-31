var peakIndexInMountainArray = function (arr) {
  let start = 0;
  let end = arr.length;
  let mid = parseInt((start + end) / 2);

  while (start <= end) {
    if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]) {
      return mid;
    } else if (arr[mid + 1] > arr[mid]) {
      start = mid + 1;
    } else if (arr[mid - 1] > arr[mid]) {
      end = mid - 1;
    }
    mid = parseInt((start + end) / 2);
  }
};

console.log(peakIndexInMountainArray([0, 10, 5, 2]));
