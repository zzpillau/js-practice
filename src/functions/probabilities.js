import _ from 'lodash'

// const nums = [1, 3, 1, 5, 1];
const nums = [1, 3, 1, 5, 1, 3, 1, 2, 1, 6, 1, 3];

const probabilities = (diceRolls) => {
  const getNextRolls = (item, array) => array
    .reduce((acc, el, i, arr) => {
      if (item === el && !!arr[i + 1]){
      acc.push(arr[i + 1])
    }
      return acc;
    }, [])
    .map((nextRoll, i, arr) => [nextRoll, 1 / arr.length])
    .reduce((acc, nextRoll, i, arr) => {
      const [x, y] = nextRoll;
      if (Object.hasOwn(acc, x)) {
        acc[x] = y + y;
      } else {
        acc[x] = y;
      }
      return acc;
    }, {})
  return _.uniq(diceRolls).reduce((acc, item) => {
    acc[item] = getNextRolls(item, diceRolls);
    return acc;
  }, {});
};

console.log(probabilities(nums));

// BEGIN
const countElements = (elements, element) => elements
  .reduce((acc, current) => (current === element ? acc + 1 : acc), 0);

const findProbabilityForElement = (elements, element) => elements
  .filter((current, index) => elements[index - 1] === element)
  .reduce((acc, currentElement, i, filtered) => {
    const totalElements = filtered.length;
    const probability = countElements(filtered, currentElement) / totalElements;
    return { ...acc, [currentElement]: probability };
  }, {});

const calculateProbabilities = (numbers) => _.uniq(numbers)
  .reduce((acc, number) => {
    const probabilities = findProbabilityForElement(numbers, number);
    return { ...acc, [number]: probabilities };
  }, {});

export default calculateProbabilities;
// END