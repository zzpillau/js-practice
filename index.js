import app from './src/index.js';

app();

import _ from 'lodash';

console.log(_.last(['one', 'two']));

import { calcShipsCount } from './calcShipsCount.js';

console.log('Сколько корабликов на поле?');
const shipsCount = [
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 0],
  ];
const count = calcShipsCount(shipsCount);
console.log(`Корабликов: ${count}`);

