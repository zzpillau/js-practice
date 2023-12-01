import fakerator from 'fakerator';

const getRandomFn = (seed) => {
  fakerator().seed(seed);
  return () => fakerator().random.number(1, 6);
};

console.log(getRandomFn(100));