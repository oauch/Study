// filter 구현
function custom_filter(arr, func) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    func(arr[i]) ? result.push(arr[i]) : null;
  }
  return result;
}

nums = [1, 2, 3, 4, 5];

console.log(a.filter(nums => nums > 2));
console.log(custom_filter(nums, value => value > 2));
