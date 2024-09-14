const enlargeArrayImage = (matrix) => matrix
  .map((row) => row
  .reduce((acc, el) => [...acc, el, el], [])  )
  .map((row) => [row, row])
  .flat();





const arr = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];

console.log(enlargeArrayImage(arr));
