import assert from 'power-assert';
import indexOf from '../src/indexOf.js';

assert(indexOf([1, 2, 1, 2], 2) === 1);
assert(indexOf([1, 2, 1, 2], 1) === 0);
assert(indexOf([1, 2, 1, 2], 2, 2) === 3);
assert(indexOf([], 1) === -1);
assert(indexOf([], 1, 1) === -1);
assert(indexOf([1, 'apple', true, 'book'], 8) === -1);

console.log('Все тесты пройдены!');
