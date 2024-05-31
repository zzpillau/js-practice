const objects = [
  { name: 'Karl' },
  { name: 'Mia' },
];


const each = (coll, callback) => {
  coll.forEach((obj) => callback.call(obj));
}

// console.log(each(objects));

each(objects, function callback() {
  this.name = this.name.split('').reverse().join('');
});

console.log(objects);
// [
//   { name: 'lraK' },
//   { name: 'aiM' },
// ];