// инкапсуляция

// const make = (name, website) => {
//   return {
//     name,
//     website,
//     getName() {
//       return this.name;
//     },
//     getWebsite() {
//       return this.website;
//     },
//   };
// };

function getName() {
  return this.name;
}

function getWebsite() {
  return this.website;
}

const make = (name, website) => {
  return {
    name,
    website,
    getName,
    getWebsite,
  };
};

// оператор new

function Company(name, website) {
  this.name = name;
  this.website = website;
  this.getName = getName;
  this.getWebsite = getWebsite;
}

const company = new Company('zz', 'zz.com');
console.log(company.getName());
console.log(company.getWebsite());

const number = new Number(100);
console.log(number);

number.valueOf = () => 'hhh';

console.log(number.valueOf());