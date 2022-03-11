arr = [1.01, 1.991, 1.32, 1.4];

arr.sort();
let left = 0;
let right = arr.length - 1;
let count = 0;
while (left <= right) {
  if (left == right) {
    count++;
    break;
  }
  if (arr[left] + arr[right] <= 3.0) {
    left++;
    right--;
    count++;
  } else {
    right--;
    count++;
  }
}
console.log(count);
