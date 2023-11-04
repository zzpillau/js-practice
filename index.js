#!/usr/bin/env node

import app from './src/index.js';

import { calcShipsCount } from './calcShipsCount.js';

import _ from 'lodash';


app();

console.log(_.last(['one', 'two']));

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