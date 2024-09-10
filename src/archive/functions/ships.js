import _ from 'lodash'

// if (battleField[row][col] cell && !battleField[row][col - 1] !coll[i - 1]) {
//   if (!battleField[row - 1] !field[i - 1] || !battleField[row - 1][col] !field[i - 1][i]) {


const calcShipsCount = (battleField) => {

  const reduce = battleField.reduce((shipsCount, row, index, field) => {
    const coll = row.reduce((acc, cell, i, coll) => {

      if (field[index][i] && !field[index][i - 1]) {
        if (!field[index - 1] || !field[index - 1][i]) {
          return acc += 1;
        }
      }
      // console.log('acc', acc);
      return acc;
      
    }, 0)
    console.log('shipsCount + coll', shipsCount + coll);
    return shipsCount + coll;
  }, 0)

  console.log('reduce', reduce);
  return reduce;
}


const calcShipsCount2 = (battleField) => {
  let shipsCount = 0;
  const fieldSize = battleField.length;
  for (let row = 0; row < fieldSize; row += 1) {
    for (let col = 0; col < fieldSize; col += 1) {
      if (battleField[row][col] && !battleField[row][col - 1]) {
        if (!battleField[row - 1] || !battleField[row - 1][col]) {
          shipsCount += 1;
        }
      }
    }
  }

  return shipsCount;
};


console.log(calcShipsCount([
  [0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 0, 0],
])); // 6


console.log(calcShipsCount([
  [1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [1, 1, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 1, 0],
])); // 5


console.log(calcShipsCount([
  [0, 0, 1],
  [0, 0, 0],
  [1, 1, 0],
]));