export const calcShipsCount = (field) => {
  let shipsCount = 0;
  for (let row = 0; row < field.length; row += 1) {
    for (let col = 0; col < field[row].length; col += 1) {
      const cell = field[row][col];
      const colSituation = field[row][col - 1] !== 1;
      const rowSituation = row - 1 < 0 ? true : field[row - 1][col] !== 1;
      if (cell === 1) {
        if (rowSituation && colSituation) {
          shipsCount += 1;
        }
      }
    }
  }
  return shipsCount;
};

const isValidField = (field) => {
  for (let row = 0; row < field.length - 1; row += 1) {
    for (let col = 0; col < field[row].length - 1; col += 1) {
      const cell = field[row][col];
      const check = field[row + 1][col + 1] === 1 || field[row + 1][col - 1] === 1;
      if (cell === 1) {
        if (check) {
          return false;
        }
      }
    }
  }
  return true;
};
