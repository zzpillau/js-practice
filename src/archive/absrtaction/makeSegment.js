const makeDecartPoint = (x, y) => {
    const point = { x, y };
    return point;
  };

const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0)

const getX = (point) => point.x;
const getY = (point) => point.y;


export const makeSegment = (point1, point2) => {
    return {beginPoint: point1, endPoint: point2};
}
const segment = makeSegment(beginPoint, endPoint);
console.log(segment);

const getDividedSum = (a, b) => (a + b) / 2;

export const getMidpointOfSegment = (segment) => {
    const x = getDividedSum(getX(segment.beginPoint), getX(segment.endPoint));
    const y = getDividedSum(getY(segment.beginPoint), getY(segment.endPoint));
    return { x, y };
};

console.log(getMidpointOfSegment(segment));

export const getBeginPoint = (segment) => segment.beginPoint;
export const getEndPoint = (segment) => segment.endPoint;

console.log(getBeginPoint(segment));
console.log(getEndPoint(segment));



