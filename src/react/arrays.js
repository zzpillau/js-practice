import update from 'immutability-helper';

// Массив: добавление

const state1 = [1];
const state2 = update(state1, { $push: [2] });

console.log(state2);

// Массив: удаление
