// BEGIN (write your solution here)
const apply = (count, f, arg) => {
  let res = f(arg);
  if (count === 0) {
    return arg;
  }
  return apply(count - 1, f, res)

}


// const sqrt = Math.sqrt(4);
// console.log(sqrt);
// END

console.log(apply(0, Math.sqrt, 4)); // 4
console.log(apply(1, Math.sqrt, 4)); // 2

// // Math.sqrt(Math.sqrt(16));
console.log(apply(2, Math.sqrt, 16)); // 2
// // Math.sqrt(Math.sqrt(Math.sqrt(256)));
console.log(apply(3, Math.sqrt, 256)); // 2

console.log(apply(1, v => v ** 2, 3)); // 9
console.log(apply(5, v => v + 10, 3)); // 53

