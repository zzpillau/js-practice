

console.log(get(data, [null]));
console.log(get(data, ['user'])); // 'ubuntu'
console.log(get(data, ['user', 'ubuntu'])); // null
console.log(get(data, ['hosts', 0])); // { name: 'web1' }
console.log(get(data, ['hosts', 1, null])); // 3
console.log(get(data, ['hosts', 1, 'active'])); // false
console.log(get(data, [])); // { user: 'ubuntu', hosts: { 0: { name: 'web1' }, 1: { name: 'web2', null: 3, active: false }}}
console.log(get(data, ['undefined'])); // null

























const pick = (obj, expectedKey) => {

    let result = {};
    
      for (const item of expectedKey) {
    
        if (Object.hasOwn(obj, item)) {
    
          result[item] = obj[item];
    
        }
    
      }
    
      return result;
    
    };
    
    
    
    
    
    const data = {
    
      user: 'ubuntu',
    
      cores: 4,
    
      os: 'linux',
    
    };
    
     
    
    console.log(pick(data, [])); // { user: 'ubuntu' }
 


const findKeys = (obj, expectedValue) => {

    const result = [];
  
  
  
    const entries = Object.entries(obj);
  
    for (const [key, value] of entries) {
  
      console.log([key, value]);
  
      if (value === expectedValue) {
  
        result.push(key);
  
      }
  
    }
  
  
  
    return result;
  
  };
  
  
  
  const lessonMembers = {
  
    syntax: 3,
  
    using: 2,
  
    foreach: 10,
  
    operations: 10,
  
    destructuring: 2,
  
    array: 2,
  
  };
  
  
  
  
  
  
  
  
  
  
  
  const course = { name: 'JS: React', slug: 'js-react' };
  
  
  
  const keys = Object.keys(course); // [ 'name', 'slug' ]
  
  
  
  console.log(keys);
  
  
  
  for (const key of keys) {
  
    console.log(course[key]);
  
  }
  
  
  
  const values = Object.values(course);
  
  
  
  console.log(values);
  
  
  
  for (const value of values) {
  
    console.log(value);
  
  }
  
  
  
  const entries = Object.entries(course);
  
  
  
  console.log(entries);
  
  
  
  for (const [key, value] of entries) {
  
    console.log(key);
  
    console.log(value);
  
  };
  
  
  












const user1 = {
    email: 'zzpillau@gmail.com',
    name: 'Tanya',
    password: 'qwerty', 
};

const user = {
    name: 'Vasya',
    married: true,
    age: 25,
};

const name = 'married';
console.log(user.name);

const rectangle = { width: 10, height: 5 };

console.log(user.name);
console.log(rectangle.width);
console.log(user1['name']);

const user2 = {
    name: 'Misha',
    married: false,
    age: 20,
};

user2.married = true;
console.log(user2);

user2.surname = 'Petrov';
console.log(user2);

let propertyName = 'name';
console.log(user[propertyName]);

propertyName = 'married';
console.log(user[propertyName]);

const tomato = {};
tomato.name = ['cherry'];
tomato.description = 'little sweet fruit';
console.log(tomato);
console.log(tomato.name);
console.log(tomato['name']);

const unuser = {name: 'Kotya', surname: 'Obormotya'};
delete unuser.surname;
console.log(unuser);


const user3 = {name3: 'Vasya', married: true, age: 25}
const name3 = 'age';
console.log(user3);
console.log(name3);
user3[name3] = 'Inna';
console.log(user3.name3);