export const calcShipsCount = (field) => {
  let shipsCount = 0;
  for (let row = 0; row < field.length; row += 1) {
    for (let col = 0; col < field[row].length; col += 1) {
      let cell = field[row][col];
      let colSituation = field[row][col - 1] !== 1;
      let rowSituation = row - 1 < 0 ? true : field[row - 1][col] !== 1;
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
      let cell = field[row][col];
      let check =
        field[row + 1][col + 1] === 1 || field[row + 1][col - 1] === 1;
      if (cell === 1) {
        if (check) {
          return false;
        }
      }
    }
  }
  return true;
};
