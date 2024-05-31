function getX() {
  return this.x;
};

function getY() {
  return this.y;
};

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
};


function getBeginPoint() {
  return this.beginPoint;
};

function getEndPoint() {
  return this.endPoint;
};

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
};

const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);

const segment = new Segment(beginPoint, endPoint);


const reverse = (segment) => {
  // console.log(segment);
  const beginPoint = segment.getBeginPoint();
  // console.log(beginPoint);
  const endPoint = segment.getEndPoint();
  // console.log(endPoint);

  const x1 = beginPoint.getX();
  // console.log(x1);
  const y1 = beginPoint.getY();
  // console.log(y1);

  const x2 = endPoint.getX()
  // console.log(x2);
  const y2 = endPoint.getY()
  // console.log(y2);

  const newBeginPoint = new Point(x2, y2);
  const newEndPoint = new Point(x1, y1);

  return new Segment(newBeginPoint, newEndPoint);
}

const reversedSegment = reverse(segment);

// console.log(
//   segment.beginPoint.x,
//   segment.beginPoint.y,
//   segment.endPoint.x,
//   segment.endPoint.y,
// );// => 1 10 11 -3

console.log(
  reversedSegment.beginPoint.x,
  reversedSegment.beginPoint.y,
  reversedSegment.endPoint.x,
  reversedSegment.endPoint.y,
); // => 11 -3 1 10



