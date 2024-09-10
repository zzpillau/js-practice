import { makeDecartPoint, getX, getY, getQuadrant } from './points.js';






const point = makeDecartPoint(0, 1);
const makeRectangle = (point, width, height) => ({ point, width, height })

const getStartPoint = (rectangle) => rectangle.point;

const rectangle = makeRectangle(point, 4, 5);
console.log(rectangle);

console.log(getStartPoint(rectangle));

const getWidth = (rectangle) => rectangle.width;
console.log(getWidth(rectangle));

const getHeight = (rectangle) => rectangle.height;

console.log(getHeight(rectangle));

const containsOrigin = (rectangle) => {
    const startPoint = getStartPoint(rectangle);
    const topRightPoint = makeDecartPoint(getX(startPoint) + getWidth(rectangle), getY(startPoint));
    const bottomRightPoint = makeDecartPoint(getX(topRightPoint), getY(topRightPoint) - getHeight(rectangle));
    const bottomLeftPoint = makeDecartPoint(getX(startPoint), getY(bottomRightPoint));

    if (getQuadrant(startPoint) === 2) {
        if (getQuadrant(topRightPoint) === 1) {
            if (getQuadrant(bottomRightPoint) === 4) {
                if (getQuadrant(bottomLeftPoint) === 3) {
                    return true;
                }
            }
        } 
    }
    return false
};  

console.log(containsOrigin(rectangle));

const rectangle2 = makeRectangle(makeDecartPoint(-4, 3), 2, 2);
console.log(containsOrigin(rectangle2));; // true