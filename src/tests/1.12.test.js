import {capitalize} from "../tests_practice/1.12.js";
import {get} from "../tests_practice/1.12.js";
import {take} from "../tests_practice/1.12.js";
import {strict as assert} from 'node:assert'




// asserts

assert.strictEqual(capitalize('word'), 'Word');
assert.strictEqual(capitalize(''), '');

assert.deepStrictEqual(get({key: 'value'}, 'key', 'defaultValue'), 'value');
assert.deepStrictEqual(get({key: 'value'}, 'key'), 'value');
assert.deepStrictEqual(get({}, 'key', 'defaultValue'), 'defaultValue');

assert.deepStrictEqual(take(['one', 'two', 'three'], 2), ['one', 'two']);
assert.deepStrictEqual(take(['one', 'two', 8], 9), ['one', 'two', 8]);
assert.deepStrictEqual(take([1, 2]), [1]);
assert.deepStrictEqual(take([]), []);
assert.deepStrictEqual(take([4, 3], -1), []);



// take([], 2); // []
// take([1, 2, 3]); // [1]
// take([1, 2, 3], 2); // [1, 2]
// take([4, 3], 9); // [4, 3]
// take([4, 3], -1); // []





// первое утверждение (assert)
if (capitalize('hello!') !== 'Hello!') {
    throw new Error("Function doesn't work properly!");
};

if (capitalize('') !== '') {
    throw new Error("Function doesn't work properly!");
}

// console.log('Tests passed');


if (get({ hello: 'world' }, 'hello') !== 'world') {
    throw new Error("Function doesn't work properly!");
};

if (get({ hello: 'world' }, 'hello', 'kitty') !== 'world') {
    throw new Error("Function doesn't work properly!");
};

if (get({ hello: 'world' }, 'unknownKey', 'kitty') !== 'kitty') {
    throw new Error("Function doesn't work properly!");
};

if (get({}, 'hello', 'kitty') !== 'kitty') {
    throw new Error("Function doesn't work properly!");
};

// console.log('Tests passed')


