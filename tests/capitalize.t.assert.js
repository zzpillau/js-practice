import capitalize from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

assert.equal(capitalize(''), '');
assert.equal(capitalize('hello!'), 'Hello!');
assert.strictEqual(capitalize('hello'), 'hello'); // err

// Однако, будьте осторожны. Функция strictEqual(actual, expected)
// проверяет равенство по ссылке. То есть два разных объекта, имеющих
// одинаковое содержание, рассматриваются как не эквивалентные:

// Для сравнения по значению используется ещё одно утверждение:
// assert.deepEqual(actual, expected). Оно опирается только на содержимое
