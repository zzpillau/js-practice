
const namy = new String('hexlet');
console.log(namy); // объект [String: 'hexlet']
console.log(new String('hexlet'));


console.log(`${namy}`); // "hexlet" строка
console.log(namy.valueOf()); // добываем примитивное значение из объекта

const number = new Number(100);
console.log(number); // объект

const boolean = new Boolean(true);
console.log(boolean); // объект

number.valueOf = () => 9000;
const newName = `${number + 0} is a big number`;
console.log(newName);

namy.valueOf = () => 'zzcorp';
const newName1 = `${namy + ''} is a name`; // замена valueOf - только если дернуть его сложением!
console.log(newName1);

// boolean.valueOf = () => 'aaauch';
// console.log(typeof(boolean.valueOf())); // string!!!

const newName2 = `${boolean + ''} is a true`; // к строке
console.log(newName2);

const newName3 = `${boolean + 0} is a true`; // к 1
console.log(newName3);



// const solution = (value) => {
//   const object = typeof(value) === 'string' ? new String(value) : new Number(value);
//   return `Value is ${object.valueOf()}`
// }



solution(1) + ''; // 'Value is 1'
solution(10) + ''; // 'Value is 10'
solution('some value') + ''; // 'Value is some value'

console.log(solution('some value') + '');

