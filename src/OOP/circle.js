
class Circle {

  constructor(r) {
    this.r = r;
    this.p = Math.PI;
  }

  getArea() {
    return this.p * (this.r ** 2);
  };

  getCircumference() {
    return (2 * this.p * this.r)
  };
}


const circle = new Circle(3);
console.log(circle.getArea()); // 28.274...
console.log(circle.getCircumference());