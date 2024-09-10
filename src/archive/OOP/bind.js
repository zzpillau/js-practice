
const bind = (obj, fn) => {
  const foo = (context) => (func) => (...args) => {
    return func.apply(context, args)
  }
  return foo(obj)(fn)
}


const obj = { number: 5 };
const fn = function fn(number) {
  return number + this.number;
};
const fnWithContext = bind(obj, fn);

// Принимает столько же аргументов сколько и исходная функция
console.log(fnWithContext(3));

const each = (coll, cb) => coll
  .forEach((el) => cb.call(el));

const objects = [
  { name: 'Karl' },
  { name: 'Mia' },
];
each(objects, function callback() {
  this.name = this.name.split('').reverse().join('');
});

console.log(objects);
// [
//   { name: 'lraK' },
//   { name: 'aiM' },
// ];