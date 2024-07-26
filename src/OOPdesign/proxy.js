const usersCountByCountry = {};

const handlers = {
  get: (target, prop) => {
    if (prop in target) {
      return target[prop];
    }
    return 0;
  }
};

const obj = new Proxy(usersCountByCountry, handlers);

console.log(obj.russia);
console.log(obj.russia += 1);
console.log(obj.usa);

const student = {
  name: 'Tanya',
  age: 38,
  program: 'js-frontend'
}

const rewrite = new Proxy(student, {
  set: (target, prop, value) => {
    if (prop in target) {
      target[prop] = value;
      return true;
    } else {
      throw new Error(`Cannot rewrite non-existed property '${prop}'`);
    }
  },
});

// console.log(rewrite.country = 'Russia');

console.log(rewrite.name = 'Niusha');

const user = {
  name: 'John',
  age: 25,
  password: 'secret',
};

const protectedProps = ['password'];

const error = `Access to 'password' is restricted`;

const protect = (obj, protectedProps) => {

  return new Proxy(obj, {
    set: (target, prop, value) => {
      if (prop in target && protectedProps.includes(prop)) {
        throw new Error(`Access to '${prop}' is restricted`)
      }
      target[prop] = value;
      return true;
    },
    get: (target, prop) => {
      if (prop in target && protectedProps.includes(prop)) {
        throw new Error(`Access to '${prop}' is restricted`)
      }
      return target[prop];
    }

  })
}

const protectedUser = protect(user, protectedProps);

// console.log(protectedUser);

console.log(protectedUser.password = '112');