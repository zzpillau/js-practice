const obj = { number: 5 };
const fn = function fn(number) {
  return number + this.number;
}

console.log(fn.bind(obj)(3));

console.log(fn.apply(obj, [3]));

const bind = (obj, fn) => (...args) => fn.call(obj, ...args);

const fnWithContext = bind(obj, fn);

console.log(fnWithContext(3));

