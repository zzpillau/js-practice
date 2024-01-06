const length = (a, b) => Math.pow(b - a, 2);

const calc = (point1, point2) => {
    const first = length(point2[0], point1[0]);
    const second = length(point2[1], point1[1]);
    return Math.sqrt(first + second);
}

const point1 = [0, 0];
const point2 = [3, 4];
console.log(calc(point1, point2)); // 5