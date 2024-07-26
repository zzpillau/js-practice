import capitalize from '../drafts/capitalize.js';

// Первое утверждение (проверка на слово)
if (capitalize('hello!') !== 'Hello!') {
  throw new Error('Функция работает неверно!');
}

// Второе утверждение (проверка на пустую строку)
if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены!');

// все проверки строятся одинаковым способом: условие => исключение
// будем использовать assert