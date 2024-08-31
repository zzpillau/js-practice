const date = new Date();

const proto = Object.getPrototypeOf(date);

console.log(proto);

console.log(proto === Date);

const numbers = [1, 2, 3];

const proto1 = Object.getPrototypeOf(numbers);

console.log(proto1);

function Company(name) {
  this.name = name;
}

const company = new Company;
const proto2 = Object.getPrototypeOf(company);

console.log(proto2);



