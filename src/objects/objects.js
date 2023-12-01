
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
user3.name3 = 'Inna'; // изменяется
user3['name3'] = 'Kot' //  изменяется 
console.log(user3.name);
