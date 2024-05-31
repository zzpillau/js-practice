
class Square {
  constructor(side) {
    this.side = side;
  }

  getSide() {
    return this.side;
  }
}

class SquaresGenerator {
  static generate(side, count) {
    const result = []
    for (let i = 0; i < count; i += 1) {
      result.push(new Square(side))
    }

    return result;
  }
}

const square = new Square(10);
console.log(square.getSide()); // 10


const squares = SquaresGenerator.generate(3, 2);
console.log(squares);