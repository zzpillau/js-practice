import assert from 'power-assert';

// Весь код остаётся тем же самым
const user = {
  name: 'Madonna',
  friends: ['Kate', 'Michel'],
  email: 'madonna@example.com',
};

// Интерфейс библиотеки power-assert на 100% совместим со встроенным модулем assert.
assert(user.name === 'Michel');

const array = [1, 2, 3];
const zero = 0;
const two = 2;

assert(array.indexOf(zero) === two);

// AssertionError [ERR_ASSERTION]:   # test.js:7
//
//   assert(array.indexOf(zero) === two)
//          |     |       |     |   |
//          |     |       |     |   2
//          |     -1      0     false
//          [1,2,3]
//
//   [number] two
//   => 2
//   [number] array.indexOf(zero)
//   => -1
