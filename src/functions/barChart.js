import _ from 'lodash';

const makeMatrixRow = (arr) =>
  arr.map((el) => {
    const splited = el.split('');
    const map2 = splited.map((it) => [it]);
    return map2;
  });

const rotateLeftAndJoin = (matrix) => {
  let arrElement = [];
  const arrBig = [];
  for (let i = 1; i <= matrix[0].length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      const row = matrix[j];
      arrElement.push(row.at(-i));
    }
    arrBig.push(arrElement.flat());
    arrElement = [];
  }
  const newMatrix = arrBig.map((el) => el.join(''));
  return newMatrix;
};

const barChart = (numbers) => {
  const posBar = '*';
  const negBar = '#';

  const convertNumToBar = (num, bar) => bar.repeat(Math.abs(num));

  const getBars = numbers.map((num) => {
    let result = '';
    if (num > 0) {
      result = convertNumToBar(num, posBar);
    } else {
      result = convertNumToBar(num, negBar);
    }
    return [num, result];
  });

  // console.log(getBars);
  const positives = numbers.filter((num) => num > 0);
  const negatives = numbers.filter((num) => num < 0);

  const maxPos = positives.length ? Math.max(...positives) : 0;
  const minNeg = negatives.length ? Math.min(...negatives) : 0;

  const lineLength = Math.abs(minNeg - maxPos);

  const line = getBars.map((pair) => {
    const [num, bars] = pair;
    // console.log(pair);
    const barsLength = Math.abs(num);

    if (num > 0) {
      const substrPos = _.padStart(bars, barsLength + Math.abs(minNeg), ' ');
      return _.padEnd(substrPos, lineLength, ' ');
    }
    const substrNeg = _.padStart(bars, Math.abs(minNeg), ' ');
    return _.padEnd(substrNeg, lineLength, ' ');
  });

  console.log(line);
  // console.log(makeMatrixRow(line));

  console.log(rotateLeftAndJoin(makeMatrixRow(line)).join('\n'));
};

// console.log(barChart([5, 10, -5, -3, 7]));
console.log(
  barChart([8, 8, 8, 8, 8, 7, 6, 6, 2, 6, 8, 6, 4, 6, 5, 2, 6, 7, 3, 7]),
);

// *****     *
// ******    *      * *
// ******** *** *  ** *
// ******** *** ** ** *
// ******** ****** ** *
// ******** ****** ****
// ********************
// ********************
