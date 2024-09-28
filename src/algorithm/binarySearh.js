const stopWords = ['ее', 'на', 'по', 'со', 'же', 'браво', 'всего', 'я', 'итого'];

const isStopWord = (candidate) => {
  for (let i = 0; i < stopWords.length; i += 1) {
    if(stopWords[i] === candidate) {
      return true;
    }
  }

  return false;
} 

const binarySearch = (candidate) => {
  let first = 0;
  let last = stopWords.length - 1;

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);
    if (candidate === stopWords[middle]) {
      return true;
    }

    if (candidate < stopWords[middle]) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }    
  }

  return false;
}

console.log(binarySearch('щй'));

const solution = (phoneBook, name) => {
  if (phoneBook.length === 0) {
    return 'Phonebook is empty!';
  }

  let first = 0;
  let last = phoneBook.length - 1;

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);

    const currentName = phoneBook[middle].name;
    const currentNumber = phoneBook[middle].number;

    if (name === currentName) {
      return currentNumber;
    }

    if (name < currentName) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  };

  return 'Name not found!'
}

const phonebook = [
  { name: 'Alex Bowman', number: '48-2002' },
  { name: 'Aric Almirola', number: '10-1001' },
  { name: 'Bubba Wallace', number: '23-1111' },
];

console.log(solution(phonebook, 'Alex Bowman'));
 // '48-2002'
console.log(solution(phonebook, 'None'));
 // 'Name not found!'
console.log(solution([], 'Alex Bowman'));
 // 'Phonebook is empty!'
