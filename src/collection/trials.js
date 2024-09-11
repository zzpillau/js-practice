
const chunk = (array, size) => {
  if (array.length === 0) {
    return array;
  }
  const iter = (arr, acc) => {
    if (arr.length <= size) {
      return acc.length === 0 ? [arr] : [...acc, arr];
    }
    const chunks = arr.slice(0, size);
    const rest = arr.slice(size)


    const newAcc = [...acc, chunks]
    return iter(rest, newAcc)
    
  };

  return iter(array, [])
};



console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2));
console.log(chunk(['a'], 2));



// → [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// → [['a', 'b', 'c'], ['d']]


const findIndexOfNearest = (arr, num) => {
  const diff = arr.map((el) => Math.abs(el - num));
  return diff.indexOf(Math.min(...diff));
}

// console.log(findIndexOfNearest([7, 5, 3, 2], 4));
// console.log(findIndexOfNearest([7, 5, 4, 4, 3], 4));


// findIndexOfNearest([], 2);              // null
// findIndexOfNearest([15, 10, 3, 4], 0);  // 2
;    // 1
// findIndexOfNearest([7, 5, 4, 4, 3], 4); // 2




const findOdd = (numbers) => {
  const data = numbers.reduce((acc, num) => ({...acc, [num]: acc[num] + 1 || 1 }), {});
  const [x,] = Object.entries(data).filter(([, value]) => value % 2 !== 0).flat();
  return x
}

// const numbers = [1, 2, 4, 2, 4, 1, 5, 3, 3];
const numbers = [1, 2, 5, 2, 3, 5, 1, 7, 3];


// 5
// console.log(findOdd(numbers));



const bqs = (params) => Object.keys(params)
  .sort()
  .reduce((acc, key) => `${acc}${key}=${params[key]}&`, '')
  .slice(0, -1);



const result4 = bqs({
  a: 10,
  s: 'Wow',
  d: 3.2,
  z: '89',
});
// console.log(result4);

// expect(result4).toEqual('a=10&d=3.2&s=Wow&z=89');

const without = (arr, ...rest) => arr
  .filter((el) => !rest.includes(el));

// console.log(without([2, 1, 2, 3], 1, 2, 5));
// → [3]

const difference = (arr1, arr2) => {
  const set = new Set(arr2);
  return arr1.filter((el) => !set.has(el))
}

// console.log(difference([2, 1], [2, 3]));
// → [1]

const fromPairs = (array) => {
  const red = array.reduce((acc, [key, value]) => {
    return {...acc, [key]: value}
  }, {})
  return red;
}

// console.log(fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]));
// → { 'dog': 6, 'cat': 11 }


// const intersection = (arr1, arr2) => {
//   const set = new Set(arr2);
//   return arr1.filter((el) => set.has(el))
// }

// intersection([2, 1], [2, 3]);
// → [2]

// intersection([3, 1, 3], [3, 3, 2]);
// → [3]

// console.log(intersection(
//   ['kirill', 'rakhim', 'alex', 'dima', 'dzhamshut'],
//   ['ippolit', 'rakhim', 'dima', 'schtirlitz', 'kirill', 'alex', 'alibaba'],
// ));

// → ['kirill', 'rakhim', 'alex', 'dima']

const intersection = (arr1, arr2) => {
  const set = new Set(arr2);
  
  const result = arr1.reduce((acc, el) => (set.has(el) && !acc.has(el)) ? acc.add(el) : acc, new Set());
  return Array.from(result);
};


// console.log(intersection([2, 1], [0, 5, 2]));


