import fakerator from 'fakerator';

import _ from 'lodash';

const getRandomFn = (seed) => {
  fakerator().seed(seed);
  return () => fakerator().random.number(1, 6);
};

const roundsCount = 10;
const rollDie = () => fakerator().random.number(1, 6);

const play = (rounds, rollDie) => {
  const rolls = [];
  for (let i = 0; i < rounds; i++) {
    rolls.push(rollDie());
  }

  const dieEdge = [1, 2, 3, 4, 5, 6];
  const rollsList = _.uniq(rolls);

  const missedEdges = _.difference(dieEdge, rollsList);

  const rollResults = rolls.reduce((acc, current) => {
    acc[current] = (acc[current] ?? 0) + 1;
    return acc;
  }, {});

  const emptyRolls = missedEdges.reduce((acc, current) => {
    acc[current] = 0;
    return acc;
  }, {});

  const rollsEntries = Object.entries(rollResults);

  const emptyEntries = Object.entries(emptyRolls);

  const unitedRolls = _.union(rollsEntries, emptyEntries).sort();
  console.log(unitedRolls);

  const generatedString = unitedRolls.map((el) => {
    const [x, y] = el;
    return `${x}|${'#'.repeat(y)}${y ? y : ''}`;
  });

  console.log(generatedString.join('\n'));
};

play(roundsCount, rollDie);

// const expected = [
//   '1|# 1',
//   '2|# 1',
//   '3|### 3',
//   '4|## 2',
//   '5|### 3',
//   '6|',
