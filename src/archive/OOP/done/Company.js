class Company {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  employees = [];

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }
}

const company = new Company('Hexlet', 'support@hexlet.io')
console.log(company.getEmail());
console.log(company.employees);