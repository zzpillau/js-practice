import { strict as assert } from 'node:assert';
import take from '../src/take.js';

assert.deepStrictEqual(take([], 1), []);
assert.deepStrictEqual(take([1, 2, 3]), [1]);
assert.deepStrictEqual(take([1, 2, 3], 2), [1, 2]);
assert.deepStrictEqual(take([4, 3], 9), [4, 3]);
assert.deepStrictEqual(take([4, 3], -1), []);

console.log('Все тесты пройдены!');
