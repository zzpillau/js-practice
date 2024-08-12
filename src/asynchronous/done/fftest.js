// @ts-check

import asyncFilter from '../asyncFilter';

test('should work', () => {
  const coll = [];
  return new Promise((done) => {
    asyncFilter(coll, (x) => x, (result) => {
      expect(result).toEqual(coll);
      expect(result).not.toBe(coll);
      done();
    });
  });
});

test('should work 2', () => {
  const coll = [10, 53, true, false, '', NaN, 22];
  return new Promise((done) => {
    asyncFilter(coll, (x) => x, (result) => {
      expect(result).toEqual([10, 53, true, 22]);
      expect(result).not.toBe(coll);
      done();
    });
  });
});

test('should work async', () => {
  const coll = [1, 5, 2, 3, 4, 10, 9];
  return new Promise((done) => {
    asyncFilter(coll, (x) => x, (result) => {
      expect(result).toEqual(coll);
      expect(result).not.toBe(coll);
      done();
    });
  });
});

test('function should be asynchronous', () => {
  const coll = [1, 2, 3];
  let actual = null;
  asyncFilter(coll, (x) => x, (result) => {
    actual = result;
  });
  expect(actual).toBeNull();
});
