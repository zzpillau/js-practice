const company = {
    name: 'ZZcomp',
}

company.getName = function getName() {
    return this.name
}

console.log(company.getName());


company.name = 'ZZplus';

console.log(company.getName());


company.setName = function setName(name) {
  this.name = name;
}

company.setName('ZzMyComp')

console.log(company.getName());


company.setParam = function setParam(param) {
    this[param] = [];
}

console.log(company.setParam('employees'));


console.log(company);


company.addEmployee = function addEmployee(employee) {
    this.employees.push(employee);
}


const user = {
    name: 'Dean Winchester',
}

company.addEmployee(user);

company.getEmployees = function getEmployees() {
    return this.employees;
}

console.log(company.getEmployees());


const company111 = {
  name: 'ZZcomp',
  getName() {
      return this.name
  },
  setName(name) {
      this.name = name;
  },
  setParam(param) {
      this[param] = [];
  },
  addEmployee(employee) {
      this.employees.push(employee);
  },
  getEmployees() {
      return this.employees;
  },
}


const company1 = { name: 'Hexlet', getName: function getName() { return this.name } };
const company2 = { name: 'Hexlet Plus' };

company1.getName(); // "Hexlet"

company2.getName = company1.getName; // ПОЗДНЕЕ СВЯЗЫВАНИЕ

// В обоих случаях одна и та же функция
console.log(company2.getName());
console.log(company1.getName());

// МЕТОДЫ функций

// .call() принимает первым параметром контекст this

const sayHi = () => console.log('Hi');

sayHi.call()

const getName = function getName() {
  return this.name;
}

// замена контекста
console.log(getName.call(company1));
console.log(getName.call(company2));

const make = (numer = null, denom = null) => {
  return {
    numer,
    denom,
    setNumer(newNumer) {
      this.numer = newNumer;
    },
    setDenom(newDenom) {
      this.denom = newDenom;
    },
    getNumer() {
      return this.numer;
    },
    getDenom() {
      return this.denom;
    },

    add(rat) {
      const newNumer = this.numer * rat.getDenom() + this.denom * rat.getNumer();
      const newDenom = this.denom * rat.getDenom();
      return make(newNumer, newDenom);
      },

    toString() {
      return `${this.numer}/${this.denom}`
    }
  }
}

const rat1 = make();
rat1.setNumer(3);
rat1.setDenom(8);
rat1.getNumer(); // 3
rat1.getDenom(); // 8

const rat2 = make(10, 3);

// Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
const rat3 = rat1.add(rat2);
rat3.toString(); // '89/24'

console.log(rat3.toString());
