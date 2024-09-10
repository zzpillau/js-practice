import fakerator from 'fakerator';

import _ from 'lodash';

const getRandomFn = (seed) => {
  fakerator().seed(seed);
  return () => fakerator().random.number(1, 6);
};

const roundsCount = 32;
const rollDie = () => fakerator().random.number(1, 6);

const viewPercent = (a, b) => {
  return `${_.round((a / b) * 100)}%`;
};

const makeMatrixRow = (arr) => arr.map((el) => [el]);

const normalizedLine = (line) => {
  return _.padEnd(line, 4, ' ');
};

const rotateLeft = (matrix) => {
  let arrElement = [];
  const arrBig = [];
  for (let i = 1; i <= matrix[0].length; i++) {
    for (const row of matrix) {
      arrElement.push(row.at(-i));
    }
    arrBig.push(arrElement);
    arrElement = [];
  }
  const maped = arrBig.map((el) => el.join(''));

  return maped;
  // return arrBig;
};

// const rotateMatrix

const displayHistogram = (rounds, rollDie) => {
  const rolls = _.times(rounds, rollDie);
  const edges = _.range(1, 7);

  // console.log(rolls);

  const rollResults = _.countBy(rolls);
  // console.log(rollResults);

  const values = Object.values(rollResults);
  const maxRoll = Math.max(...values);
  // console.log('maxRoll', maxRoll);

  const emptyRolls = edges.reduce((acc, current) => {
    acc[current] = 0;
    return acc;
  }, {});

  // console.log(emptyRolls);

  const mergedResults = _.merge(emptyRolls, rollResults);
  // console.log(mergedResults);

  const entries = Object.entries(mergedResults);
  // console.log(entries);

  const segment = ['### '];
  const stripe = '----';
  const emptyElement = '    ';

  const joinedSegments = (a, b) => _.times(a, _.constant(b));
  // console.log('joinedSegments', joinedSegments(2, segment));

  // console.log(..._.times(2, _.constant(segment)));

  const matrix = entries.map((el, i, array) => {
    const [x, y] = el;

    const arr = [
      ` ${x}  `,
      stripe,
      y
        ? joinedSegments(y, segment).flat()
        : joinedSegments(y, emptyElement).flat(),
      y ? `${normalizedLine(viewPercent(y, rounds))}` : emptyElement,
      joinedSegments(maxRoll - y, emptyElement),
    ];

    // console.log('arr', arr);
    return makeMatrixRow(arr.flat());
  });
  // console.log(matrix);

  const rotated = rotateLeft(matrix);
  // console.log('rotated', rotated);

  const trimed = rotated.map((el, i, arr) => {
    if (i === arr.length - 2) {
      el = el.slice(0, -1);
    }
    return _.trimEnd(el);
  });

  console.log(trimed.join('\n'));
};

displayHistogram(roundsCount, rollDie);
