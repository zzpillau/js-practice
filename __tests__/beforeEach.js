let now;

// Запускается перед каждым тестом
beforeEach(() => {
  now = Date.now(); // текущий timestamp
});

test('first example', () => console.log(now));
test('second example', () => console.log(now));

//  console.log __tests__/index.test.js:9
//    1583871515943
//
//  console.log __tests__/index.test.js:10
//    1583871515950

let obj;
beforeEach(() => {
  obj = {};
});

test('Add number', () => {
  obj.key = 12;
  expect(obj).toEqual({ key: 12 });
});

test('Add string', () => {
  obj.key = 'value';
  expect(obj).toEqual({ key: 'value' });
});
