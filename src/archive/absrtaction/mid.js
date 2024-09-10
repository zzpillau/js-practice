 // Средняя точка вычисляется по формуле x = (x1 + x2) / 2 и y = (y1 + y2) / 2.

const calcMidpoint = (a, b) => (a + b) / 2;

const getMidpoint = (point1, point2) => {
    const midX = calcMidpoint(point1.x, point2.x);
    const midY = calcMidpoint(point1.y, point2.y);
    return {x: midX, y: midY};
};





const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };
const point3 = getMidpoint(point1, point2);
console.log(point3); // => { x: 2, y: 2 };