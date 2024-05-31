import getFunction from '../src/getFunction.js';

// Проверка, что функция возвращает нужное значение
// по существующему ключу (прямой тест на работоспособность)
if (getFunction({ key: 'value' }, 'key') !== 'value') {
  throw new Error('Boom!');
}

// Проверка на то, что возвращается значение по умолчанию, если ключа нет
if (getFunction({}, 'key', 'value') !== 'value') {
  throw new Error('Boom!');
}

// Проверка на то, что возвращается значение по существующему ключу,
// даже если передано значение по умолчанию (пограничный случай)
if (getFunction({ key: 'value' }, 'key', 'defaultValue') !== 'value') {
  throw new Error('Boom!');
}

console.log('Все тесты пройдены!');
