const f = () => "i'm an arrow function";

function fu() {
  return "i'm regular function without name"
}

function fi() {
  return "i'm regular function with name"
}

const company = { name: 'Hexlet' };

company.getName = function () {
  return company.name;
}

console.log(company.getName());

const obj = {
  getName1: function () {
    return 'Hex';
  }
}

console.log(obj.getName1());

const company1 = { name: 'Hexlet again' };

function getHexlet() {
  return 'Hexlet again';
}

company.getName = getHexlet;

console.log(company.getName());


const company2 = { name: 'Hexlet2', employees: [] };

company2.getName = function getName2() {
  return this.name;
}

console.log(company2.getName());

company2.name = 'Hexlet2 Plus';

console.log(company2.getName());

company2.setName = function setName(name) {
  this.name = name;
}

company2.setName('Yeee')

console.log(company2.getName());


company2.addEmployee = function addEmployee(user) {
  this.employees.push(user)
}


company2.getEmployees = function getEmployees() {
  return this.employees;
}

company2.addEmployee({ name: 'Vasya' });

console.log(company2.getEmployees());

const company3 = {
  name: 'Hexlet AGAIN',
  getName: function getName() { return this.name }
}

const company4 = { name: 'ZZ bizz' };

company4.getName = company3.getName; // позднее связывание

console.log(company4.getName());

const getName = function getName() {
  return this.name;
}

console.log(getName.call(company1)); // работает только с .call
console.log(getName.call(company4));

// сокращенный синтаксис создания методов

const company5 = {
  name: 'Last Hexlet',
  getName() {
    return this.name;
  },
}



