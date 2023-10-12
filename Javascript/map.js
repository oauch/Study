// map 구현
function custom_map(arr, value) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(value(arr[i]));
  }
  return result;
}

a = [1, 2, 3, 4, 5];

console.log(a.map(value => value + 2));
console.log(custom_map(a, value => value + 2));
