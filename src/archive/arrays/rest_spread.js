// ...rest

const logInfo = (name, ...details) => {
  console.log(`Name: ${name}`);
  console.log(`Details: ${details.join(', ')}`);
}

logInfo('John', 'Age: 30', 'Occupation: Developer');

const [first, second, ...anotherElements] = [1, 2, 3, 4, 5, 6, 7];
console.log(first);
console.log(second);
console.log(anotherElements);

// полифил - это обертки нового кода над старым

// ...spread

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray, 4, 5, 6];

console.log(copiedArray);

const personDetails = {name: 'Ivan', age: 25};
const updatedDetails = {...personDetails, occupation: 'Engineer'};

personDetails['occupation'] = 'Engineer';
console.log(updatedDetails);
console.log(personDetails);

// если поставить spread-оператор справа, то он перетрет имевшиеся ключи.

// реализуем push и unshift

const push = (arr, el) => {
  return [...arr, ...el] // spread
}

const unshift = (arr, el) => {
  return [...el, ...arr]
}

// console.log(push([1, 2, 3, 4,], 5)); // [1, 2, 3, 4, 5]
console.log(push([1, 2, 3], [4, 5, 6, 7])); // [1, 2, 3, 4, 5]
// console.log(unshift([1, 2, 3, 4,], 5));  // [5, 1, 2, 3, 4]
console.log(unshift([1, 2, 3], [4, 5, 6, 7]));  // [5, 1, 2, 3, 4]

const getGuestLength = (...guest) => { // rest
  return guest.flat().length;
}

console.log(getGuestLength(['Tanya', 'Katya', 'Savva'], 'Alex', 'Piotr', ['Anna', 'Elena']));

const searcWord = (arr1, arr2, word) => {
  const array = [...arr1, ...arr2];

  return `Содержится ли ${word} в массиве? - ${array.includes(word) ? 'Ды' : 'Нэт'}`;
}

const fruits1 = ['banana', 'orange', 'kiwi'];
const fruits2 = ['apple', 'grape', 'peach'];

console.log(searcWord(fruits1, fruits2, 'banana'));

