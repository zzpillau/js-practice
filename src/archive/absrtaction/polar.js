const makePoint = (x, y) => {
    const point = {
        angle: Math.atan2(y, x),
        radius: Math.sqrt(x ** 2 + y ** 2),
    };

    return point;
};

console.log(makePoint(4, 8));

// x = radius * cos(angle)

const polarToDecartX = (radius, angle) => Math.round(radius * Math.cos(angle));
const polarToDecartY = (radius, angle) => Math.round(radius * Math.sin(angle));


const getX = (point) => {
    const decartX = polarToDecartX(point.radius, point.angle)
    return decartX
}

console.log(getX(makePoint(4, 8)));

const getY = (point) => {
    const decartY = polarToDecartY(point.radius, point.angle)
    return decartY;
}

console.log(getY(makePoint(4, 8)));