
const uniq = (coll) => coll
  .reduce((acc, el, i) => (acc.indexOf(el) === -1 ? [...acc, el] : acc), []);

// console.log(uniq([-2, 20, 0, 4, 20, 0]));


const wordsCount = (words, stopWords) => words
    .map((word) => word.toLowerCase())
    .filter((word) => !stopWords.includes(word))
    .reduce((acc, word) => {
      const count = acc.get(word) || 0;
      return acc.set(word, count + 1)
    }, new Map());
  // console.log(normalizedWords);


  // const newMap = new Map();

  // normalizedWords.forEach((word) => {
  //   console.log(word);
  //   console.log(newMap.get(word), 'newMap.get(word)');
    

    
  //   const count = newMap.get(word) || 0;
  //   newMap.set(word, count + 1)
    

  // })



  // return normalizedWords;

  
// }

const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];

wordsCount(words, stopWords); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]

// console.log(wordsCount(words, stopWords));



const diff = (set1, set2) => [...set1]
  .reduce((acc, el) => (!set2.has(el) ? acc.add(el) : acc), new Set())


  


const set1 = new Set(['one', false, 3]);
const set2 = new Set([5, 3, true, 'two']); 

console.log(diff(set1, set2));


console.log(new Set(['one', false]));







