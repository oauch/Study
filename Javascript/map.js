// map 구현
function custom_map(arr, func) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
}

nums = [1, 2, 3, 4, 5];

//console.log(nums.map(value => value + 2));
console.log(custom_map(nums, value => value + 2));
