
export const ipToInt = (ip) => {

    const split = ip.split('.');
    const map = split.map((oktet) => parseInt(oktet, 10))
    let exponent = 3;
    const red = map.reduce((acc, item) => {
        acc.push(item * 256 ** exponent)
        exponent -= 1;
        return acc;
    }, [])
     const sum = red.reduce((acc, item) => acc + item, 0)
    return sum;
}


export const intToIp = (int) => {
const Y1 = parseInt((2149583361 / 256 ** 3));
// console.log(Y1);
const Y2 = parseInt((int - (128 * 256 ** 3)) / 256 ** 2);
// console.log(Y2);
const Y3 = parseInt((int - (128 * 256 ** 3) - (32 * 256 ** 2)) / 256);
// console.log(Y3);
const Y4 = parseInt(int - (Y1 * 256 ** 3) - (Y2 * 256 ** 2) - (Y3 * 256));
// console.log(Y4);


return `${Y1}.${Y2}.${Y3}.${Y4}` //   заполнить acc через  padStart 
}


const getOktet = (integer, prev, curr, next, exponent) => parseInt((integer - prev - curr - next) / 256 ** exponent, 10);

const ip = (int) => {
    let exponent = [3, 2, 1, 0];
    let previous = 0;
    let current = 0;
    let last = 0;
    const ipInArr = exponent.reduce((acc, exp) => {
        const oktet = getOktet(int, previous, current, last, exp);
        if (exp === 1) {
            last = current;
        }
        current = previous;
        acc.push(oktet);
       previous = oktet * 256 ** exp;
        return acc;
    }, [])

return ipInArr.join('.');
}




console.log(ip(2149583361)); // '128.32.10.1'

console.log(intToIp(2149583361)); // '128.32.10.1'


// 77 * 256 3 + 88 * 256 2 + 21 * 256 1 + 8 * 256 О = 1297618184

// console.log(ipToInt('128.32.10.1')); // 2149583361
// console.log(ipToInt('0.0.0.0')); // 0
// console.log(ipToInt('255.255.255.255')); // 4294967295


// console.log((2149583361 - (128 * 256 ** 3) - (32 * 256 ** 2)) / 256);
// console.log((2149583361 - (2145386496)) / 256);
// console.log((128 * 256 ** 3) - (32 * 256 ** 2));
// console.log(2149583361 - (128 * 256 ** 3) - (32 * 256 ** 2));
// console.log(2149583361 - 2145386496);
// console.log((2149583361 - 2145386496) / 256);
// console.log(32 * 256 ** 2);

